export default ({ env }) => ({
  auth: {
    secret: env("JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
});
