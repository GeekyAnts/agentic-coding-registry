import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

// A demo table. Replace with your own; run `pnpm db:generate` after edits.
export const example = pgTable("example", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
