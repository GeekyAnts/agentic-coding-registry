import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Reads DATABASE_URL from the environment.
const client = postgres(process.env.DATABASE_URL ?? "");

export const db = drizzle(client, { schema });
