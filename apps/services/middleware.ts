export { default } from 'next-auth/middleware';

export const config = { matcher: ['/api/db/:path*', '/api/form/:path*', '/user/:path*'] };
