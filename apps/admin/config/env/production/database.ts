export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: `${env("DB_INSTANCE_CONNECTION_NAME")}`,
      database: env("DB_NAME"),
      user: env("DB_USER"),
      password: env("DB_PASSWORD"),
    },
  },
});
