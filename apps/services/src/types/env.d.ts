declare namespace NodeJS {
  interface ProcessEnv {
    // Server configuration
    VERCEL_ENV: 'development' | 'production' | 'test';
    DEBUG: boolean | false;
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    EMAIL_FROM: string;
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: string;
    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    NEXT_PUBLIC_DEBUG: boolean | false;
    NEXTAUTH_SECRET?: string;
  }
}
