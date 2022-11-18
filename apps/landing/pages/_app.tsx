import { AppProps } from 'next/app';
import Head from 'next/head';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';

import Layout from 'components/layout';

import { createEmotionCache, theme } from '@packages/ui';

import 'styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props: AppProps<{ emotionCache: EmotionCache }>) {
  const {
    Component,
    pageProps: { emotionCache = clientSideEmotionCache, ...pageProps },
  } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/*
        @property defaultMode - Correspond to localStorage key 'mui-mode'.
      */}
      <CssVarsProvider defaultMode="dark" theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          {/* @ts-ignore */}
          <Component {...pageProps} />
        </Layout>
      </CssVarsProvider>
    </CacheProvider>
  );
}
