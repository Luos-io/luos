import path from "node:path";

import type {} from "@strapi/typescript-utils";

export default ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        "..",
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },

    useNullAsDefault: true,
  },
});
