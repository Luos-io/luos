import { ApolloProvider } from '@apollo/client';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/styles';
import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import client from '../apollo-client';
import { Layout } from 'components/layout/layout';
import { pageview } from 'utils/analytics';
import { NotificationsProvider } from 'utils/contexts';
import createEmotionCache from 'utils/createEmotionCache';
import theme from 'utils/themes/light';

import type { EmotionCache } from '@emotion/cache';
import type { AppProps } from 'next/app';
import type { Session } from 'next-auth';

import 'src/styles/globals.scss';

const clientSideEmotionCache = createEmotionCache();

const Services = ({
  Component,
  pageProps: { session, emotionCache = clientSideEmotionCache, ...pageProps },
}: AppProps<{ session: Session; emotionCache: EmotionCache }>) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => pageview(url);
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
        }}
      />
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <SessionProvider session={session} basePath="/app/api/auth">
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <NotificationsProvider>
              <Layout>
                {/* @ts-ignore */}
                <Component {...pageProps} />
              </Layout>
            </NotificationsProvider>
          </ThemeProvider>
        </ApolloProvider>
      </SessionProvider>
    </CacheProvider>
  );
};

export default Services;
