import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// Prisma 7 config: the connection URL for Migrate lives here (not in the schema).
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
