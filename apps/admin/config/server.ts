export default ({ env }) => ({
  host: env("ADMIN_HOST", "0.0.0.0"),
  port: env.int("ADMIN_PORT", 1337),
  app: {
    keys: env.array("ADMIN_APP_KEYS"),
  },
});
