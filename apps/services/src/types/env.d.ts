declare namespace NodeJS {
  interface ProcessEnv {
    // Server configuration
    VERCEL_ENV: 'development' | 'production' | 'test';
    DEBUG: boolean | false;
    NEXT_PUBLIC_DEBUG: boolean | false;
  }
}
