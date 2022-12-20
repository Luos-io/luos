import { ObjectId } from 'mongodb';
import BusinessIcon from '@mui/icons-material/Business';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
// import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SvgIcon from '@mui/material/SvgIcon';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { User } from 'next-auth';
import { getProviders, getSession, signIn } from 'next-auth/react';
import React, { useContext, useEffect, useState } from 'react';

import { NotificationsContext } from 'utils/contexts';
import mongoClient from '@packages/services/mongo/mongodbAdapter';
import withUserAccounts from 'utils/services/mongo/withUserAccounts';
import withUserBadges, { WithUserBadgesResult } from 'utils/services/mongo/withUserBadges';

import { getRoleValue } from 'utils/user';

import type { SvgIconProps, SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/types';
import type { GetServerSidePropsContext } from 'next';
import type { SyntheticEvent } from 'react';

import type { WithAuthResult } from 'utils/services/auth/withAuth';
import type { SignInErrorTypes } from 'types/auth';
import type { Game, Role, Team, Badge } from 'types/user';

import Styles from 'pages/user/profile/profile.module.scss';

export const Profile = ({
  providers,
  session,
  teams,
  game,
  error,
  user,
}: WithUserBadgesResult &
  WithAuthResult & {
    [key: string]: any;
  }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<string | false>('badges');

  const { addNotifications } = useContext(NotificationsContext);
  useEffect(() => {
    if (game?.badges && game?.badges.length > 0) {
      const notNotifiedBadges = game.badges.filter((t: Badge) => !t.notified);
      addNotifications(
        notNotifiedBadges.map((b) => ({
          id: b._id.toString(),
          message: (
            <span>
              You have unlocked: <b>{b.name}</b> badge !
            </span>
          ),
          image: b.image,
          timestamp: new Date().getTime().toString(),
        })),
      );
    }
  }, [game?.badges]);

  const handleChange = (panel: string) => (_event: SyntheticEvent, newExpanded: boolean) =>
    setExpanded(newExpanded ? panel : false);

  const ProfileSection = ({
    name,
    Icon,
    children,
  }: {
    name: string;
    Icon: React.ReactElement<SvgIconProps>;
    children: React.ReactNode;
  }) => (
    <Accordion
      expanded={expanded === name}
      onChange={handleChange(name)}
      className={Styles.section}
      disableGutters
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${name}-content`}
        id={`${name}-header`}
      >
        <Grid container>
          <Grid
            item
            xs={1}
            sx={{
              width: '24px',
              height: '24px',
            }}
          >
            {Icon}
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h3" className={Styles.sectionTitle}>
              {`${name.charAt(0).toUpperCase()}${name.slice(1)}`}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      {children}
    </Accordion>
  );

  const Account = () => (
    <ProfileSection name="profile" Icon={<ManageAccountsIcon />}>
      <AccordionDetails className={Styles.sectionContent}>
        <Grid container alignItems={'center'} className={Styles.sectionContentRow}>
          <Grid item md={4} xs={12}>
            <Typography variant="h4" className={Styles.sectionKey}>
              Username
            </Typography>
          </Grid>
          <Grid item md={6} xs={8}>
            <Typography className={Styles.sectionValue}>{session?.user?.name || ''}</Typography>
          </Grid>
          <Grid item md={2} xs={4}>
            {/* <Button variant="contained" sx={{ display: 'block', margin: '0 0 0 auto' }}>
              Change
            </Button> */}
          </Grid>
        </Grid>
      </AccordionDetails>
    </ProfileSection>
  );

  const Integrations = () => {
    const isAccountLinked = (providerName: string) =>
      user?.accounts.some((account: string) => account === providerName.toLowerCase());
    return (
      <ProfileSection name="integrations" Icon={<LinkIcon />}>
        <AccordionDetails className={Styles.sectionContent}>
          <List className={Styles.sectionContentList}>
            {providers &&
              Object.values(providers).map((provider: any) =>
                provider.name !== 'Email' ? (
                  <ListItem className={Styles.sectionContentListItem} key={provider.name}>
                    <ListItemAvatar className={Styles.sectionContentListItemAvatar}>
                      <i
                        className={`fab fa-${provider.name.toLowerCase()} ${
                          Styles.sectionContentListItemAvatarIcon
                        }`}
                      ></i>
                    </ListItemAvatar>
                    <ListItemText primary={provider.name} />
                    <Button
                      className={Styles.sectionContentListItemButton}
                      variant="text"
                      color={
                        user?.accounts.some(
                          (account: string) => account === provider.name.toLowerCase(),
                        )
                          ? 'error'
                          : 'success'
                      }
                      onClick={() =>
                        isAccountLinked(provider.name)
                          ? {} // Nothing actually happens
                          : signIn(provider.id, {})
                      }
                      disabled={isAccountLinked(provider.name) && user?.accounts.length <= 1}
                    >
                      {isAccountLinked(provider.name) ? 'Unlink' : 'link'}{' '}
                    </Button>
                  </ListItem>
                ) : (
                  ''
                ),
              )}
          </List>
        </AccordionDetails>
      </ProfileSection>
    );
  };

  const Organizations = ({ teams }: { teams: { name: string; image: string; role: Role }[] }) => (
    <ProfileSection name="organizations" Icon={<BusinessIcon />}>
      <AccordionDetails className={Styles.sectionContent}>
        <List className={Styles.sectionContentList}>
          {teams.map(({ name, image, role }) => (
            <ListItem className={Styles.sectionContentListItem} key={`organization-${name}`}>
              <ListItemAvatar className={Styles.sectionContentListItemAvatar}>
                <Image
                  src={`data:image/gif;base64,${image}`}
                  width="24"
                  height="24"
                  alt="service picto"
                />
              </ListItemAvatar>
              <ListItemText primary={name} />
              <Chip label={getRoleValue(role)} variant="outlined" color="warning" />
              <Button variant="text" color="error" sx={{ marginLeft: theme.spacing(1) }}>
                Leave
              </Button>
            </ListItem>
          ))}
          <ListItem className={Styles.sectionContentListItemAdd}>
            <Button variant="outlined">New Organization</Button>
          </ListItem>
        </List>
      </AccordionDetails>
    </ProfileSection>
  );

  const Badges = ({ /*experience, level,*/ badges, greyBadges }: Game) => {
    // const endLevelXP = 1000 * Math.pow(level, 3);
    // const currentXP = Math.round((experience / endLevelXP) * 100);
    return (
      <ProfileSection name="badges" Icon={<EmojiEventsIcon />}>
        <AccordionDetails className={Styles.sectionContent}>
          {/* <Grid
            container
            direction={'row'}
            alignItems={'center'}
            style={{ margin: '0 auto', width: '80%', textAlign: 'center' }}
          >
            <Grid item xs={12}>
              <Typography variant="h4" className={Styles.sectionKey}>
                Progress
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Tooltip title={`Level ${level}`}>
                <div>
                  <Image
                    src={`/assets/images/user/rank/rank-${level}.svg`}
                    width="32"
                    height="38"
                    alt="actual rank"
                  />
                </div>
              </Tooltip>
            </Grid>
            <Grid item xs={8}>
              <Tooltip title={`Experience: ${experience} / ${endLevelXP} (${currentXP}%)`}>
                <LinearProgress variant="determinate" value={currentXP} />
              </Tooltip>
            </Grid>
            <Grid item xs={2}>
              <Image
                src={`/assets/images/user/rank/rank-${level}.svg`}
                width="32"
                height="38"
                alt="next rank"
                style={{
                  filter: 'grayscale(100%)',
                  opacity: 0.5,
                }}
              />
            </Grid>
          </Grid> */}
          <Grid container className={Styles.sectionContentList}>
            {[...badges, ...greyBadges].map((badge) => {
              const { name, image, description } = badge;
              return (
                <Grid item xs={3} className={Styles.sectionContentListItem} key={`badge-${name}`}>
                  <Tooltip
                    title={description}
                    componentsProps={{
                      tooltip: {
                        sx: {
                          marginTop: '4px !important',
                        },
                      },
                    }}
                  >
                    <div
                      style={{
                        textAlign: 'center',
                        marginTop: theme.spacing(1),
                      }}
                    >
                      <Image
                        src={`/assets/images/user/badges/${image}`}
                        width="72"
                        height="64"
                        alt={`badge: ${description}`}
                        objectFit="fill"
                        objectPosition="50% 50%"
                        style={{
                          ...(greyBadges.includes(badge)
                            ? {
                                filter: 'grayscale(1)',
                                opacity: 0.5,
                              }
                            : {}),
                        }}
                      />
                    </div>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </AccordionDetails>
      </ProfileSection>
    );
  };

  return (
    <div className={Styles.profile}>
      <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <Grid item xs={12}>
          <Avatar
            alt={`avatar of ${session?.user?.name || 'unknown'}`}
            src={session?.user?.image ? session?.user?.image : ''}
            sx={{
              width: '96px',
              height: '96px',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h1" className={Styles.profileTitle}>
            Welcome {session?.user?.name || ''}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" className={Styles.profileSubTitle}>
            Manage your information and the privacy and security of your data to get the most out of
            Luos services.
          </Typography>
        </Grid>
        <Grid item xs={12} className={Styles.sections}>
          <Account />
          <Integrations />
          <Organizations teams={teams} />
          {game ? <Badges {...game} /> : null}
        </Grid>
      </Grid>
    </div>
  );
};
export default Profile;

export const getServerSideProps = withUserBadges(
  withUserAccounts(async (ctx: GetServerSidePropsContext) => {
    // Handle signin errors
    const { query } = ctx;

    const providers = await getProviders();
    const session = await getSession(ctx);
    let teams: Team[] = [];
    // let game: Game | null = null;

    if (session?.user) {
      const db = (await mongoClient).db();

      // Get the user's data
      if (session?.user?.email) {
        const user = await db.collection('users').findOne<User>({
          email: session.user.email,
        });
        if (user) {
          const userId = new ObjectId(user._id);

          // Get the user's teams
          teams = await db
            .collection('teams')
            .find<Team>(
              {
                members: {
                  $elemMatch: { userId },
                },
              },
              {
                projection: {
                  name: 1,
                  image: 1,
                  members: 1,
                  _id: 0,
                },
              },
            )
            .toArray();
        }
      }
    }

    return {
      props: {
        session,
        providers,
        teams: teams.map(({ name, image, members }) => ({
          name,
          image: image.toString(),
          role: members?.[0].role,
        })),
        error: query?.error ? (query.error as SignInErrorTypes) : null,
      },
    };
  }),
);
