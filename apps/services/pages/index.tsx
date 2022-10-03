import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Alert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Router from 'next/router';
import { useSession } from 'next-auth/react';
import { useContext, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { withUserBadges } from 'utils/services/mongo/withUserBadges';
import { NotificationsContext } from 'utils/contexts/notifications';

import BookingCard from 'components/BookingCard';

import type { InferGetServerSidePropsType } from 'next';
import type { Badge } from 'types/user';

import styles from 'styles/Home.module.scss';

import GetStarted from 'public/assets/images/index/gs.svg';
import Network from 'public/assets/images/index/network.svg';
import Community from 'public/assets/images/index/community.svg';
import Soon from 'public/assets/images/index/coming_soon.svg';

export const Home = ({ game }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { addNotifications } = useContext(NotificationsContext);
  const { data: session } = useSession();

  console.log('pages/index - TEST1-1 (should display)', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
  console.log('pages/index - TEST2-1 (should not display)', process.env.EMAIL_FROM);

  useEffect(() => {
    const origin = window.location.origin;
    if (origin === 'https://feel.luos.io') {
      Router.push('/typeform/form');
    }
    if (game?.badges && game?.badges.length > 0) {
      const notNotifiedBadges = game.badges.filter((t: Badge) => !t.notified);
      addNotifications(
        notNotifiedBadges.map((b) => ({
          id: b._id.toString(),
          message: (
            <p>
              You have unlocked: <b>{b.name}</b> badge !
              <br />
              <span>Go to your profile page to discover all your badges!</span>
            </p>
          ),
          image: b.image,
          timestamp: new Date().getTime().toString(),
        })),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game?.badges]);

  const getStartedButton = (
    <>
      <Tooltip title="Begin with the get started!" placement="bottom">
        <Typography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: 'pointer', mx: 3 }}
        >
          <PlayCircleIcon fontSize="large" style={{ color: '#BD99FF' }} />
        </Typography>
      </Tooltip>
    </>
  );

  const networkButton = (
    <>
      <Tooltip title="Display your embedded network in your web browser!" placement="bottom">
        <Typography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: 'pointer', mx: 3 }}
        >
          <PlayCircleIcon fontSize="large" style={{ color: '#BD99FF' }} />
        </Typography>
      </Tooltip>
    </>
  );

  const communityButton = (
    <>
      <Tooltip title="Join the Luos developers Community!" placement="bottom">
        <Typography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: 'pointer', mx: 3 }}
        >
          <PlayCircleIcon fontSize="large" style={{ color: '#BD99FF' }} />
        </Typography>
      </Tooltip>
    </>
  );

  const soonButton = (
    <>
      <Tooltip title="Sign-up to stayed informed!" placement="bottom">
        <Typography variant="body1" lineHeight={1} sx={{ cursor: 'pointer', mx: 3 }}>
          <CircleNotificationsIcon fontSize="large" style={{ color: '#BD99FF' }} />
        </Typography>
      </Tooltip>
    </>
  );

  const soonButtonLog = (
    <>
      <Tooltip title="You will be notified when the feature is ready!" placement="bottom">
        <Typography variant="body1" lineHeight={1} sx={{ mx: 3 }}>
          <CircleNotificationsIcon fontSize="large" style={{ color: '#cccccc' }} />
        </Typography>
      </Tooltip>
    </>
  );

  return (
    <main className={styles.main}>
      <Alert
        severity="info"
        style={{ margin: '0 auto 30px ', width: '60%' }}
        className={styles.infoMessage}
      >
        Welcome to our Alpha version of Luos App. Use this very first version to discover the new
        possibilities we are working on and make your suggestions by sending a message to our
        community. Any advice is good to know.{' '}
        <a
          target="blank"
          href="https://github.com/Luos-io/Luos/issues/new?assignees=nicolas-rabault&labels=feature&template=feature-request.md&title=%5BNEW+FEATURE%5D+"
        >
          💡 You can ask for new feature here. 💡
        </a>
      </Alert>
      <Box mt={2}>
        <Grid container spacing={3} mb={5} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <BookingCard
                image={GetStarted}
                title="Get started"
                description="This Get Started guide will show you how to connect, configure and use multiple boards in the same network."
                link="https://docs.luos.io/tutorials/get-started"
                blank={true}
                action={getStartedButton}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <BookingCard
                image={Network}
                title="Network Display"
                description="Visualize your entire embedded network, the physical topology, the route of all your services, and the load of your computing units."
                link="/network"
                blank={false}
                action={networkButton}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <BookingCard
                image={Community}
                title="Community"
                description="Join a community of developers, project managers, and makers revolving around Luos."
                link="https://discord.gg/luos"
                blank={true}
                action={communityButton}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={2}>
        <Grid container spacing={3} mb={10}>
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <BookingCard
                image={Soon}
                title="Registry and projects"
                description="Share codes with other and manage your embedded and edge projects."
                link={session ? undefined : '/auth/signin'}
                blank={undefined}
                action={session ? soonButtonLog : soonButton}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <BookingCard
                image={Soon}
                title="Monitor and debug"
                description="Monitor your system in real-time, debug it, and update your firmware if needed."
                link={session ? undefined : '/auth/signin'}
                blank={undefined}
                action={session ? soonButtonLog : soonButton}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={3}>
              <BookingCard
                image={Soon}
                title="Rewards and gamification"
                description="Get rewards during your learning, your projects development, and your contributions to the community and to the technology."
                link={session ? undefined : '/auth/signin'}
                blank={undefined}
                action={session ? soonButtonLog : soonButton}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
};

export const getServerSideProps = withUserBadges(async () => {
  return {
    props: {},
  };
});

export default Home;
