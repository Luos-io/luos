import Alert, { AlertColor } from '@mui/material/Alert';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/styles';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useContext, useEffect } from 'react';

import Header from 'components/layout/header/header';
import Footer from 'components/layout/footer/footer';
import theme from 'styles/theme';
import themeDark from 'styles/theme-dark';
import { NotificationsContext, useMaterialUIController } from 'utils/contexts';

import styles from 'components/layout/layout.module.scss';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const { notifications, removeNotifications } = useContext(NotificationsContext);
  const displayNotification =
    notifications && notifications.length > 1
      ? {
          id: new Date().getTime().toString(),
          message: (
            <p>
              You have unlocked {notifications.length} new badges!
              <br />
              <span>Go to your profile page to discover them!</span>
            </p>
          ),
          image: 'default.png',
          variant: 'info' as AlertColor,
        }
      : notifications[0];

  useEffect(() => {
    const handleStart = () => {
      removeNotifications(
        '',
        notifications.map((n) => n.id),
      );
    };
    router.events.on('routeChangeStart', handleStart);

    return () => {
      router.events.off('routeChangeStart', handleStart);
    };
  }, [router, notifications]);

  const LinkNotification = ({ children }: { children: ReactNode }): JSX.Element => {
    if (window.location.pathname !== '/user/profile') {
      return <Link href="/user/profile">{children}</Link>;
    }

    return <>{children}</>;
  };

  return (
    <>
      <Head>
        <title>Luos Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={darkMode ? themeDark : theme}>
        <CssBaseline />
        <Paper
          sx={{
            bgcolor: theme.palette.background.default,
            borderRadius: 0,
            minHeight: '100vh',
          }}
        >
          <Header
            toogleLight={() => {
              //
            }}
          />
          <main id={styles.layout_content_wrapper}>{children}</main>
          <Footer />
        </Paper>
        {displayNotification && (
          <Snackbar
            open={true}
            key={`notification-${displayNotification.id}`}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            {displayNotification.image ? (
              <div>
                <LinkNotification>
                  <Stack
                    className={styles.notificationWrapper}
                    direction={'row'}
                    alignItems={'center'}
                    style={{
                      borderColor:
                        theme.palette[
                          displayNotification.variant ? displayNotification.variant : 'info'
                        ].main,
                      boxShadow: theme.shadows[5],
                    }}
                  >
                    <Image
                      src={`/assets/images/user/badges/${displayNotification.image}`}
                      alt="notification"
                      width={64}
                      height={64}
                      objectFit="contain"
                    />
                    <div className={styles.notificationMessageWrapper}>
                      {displayNotification.message}
                    </div>
                  </Stack>
                </LinkNotification>
              </div>
            ) : (
              <Alert severity={displayNotification.variant}>{displayNotification.message}</Alert>
            )}
          </Snackbar>
        )}
      </ThemeProvider>
    </>
  );
};

export default Layout;
