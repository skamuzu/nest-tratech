import { pgTable, text, uuid, timestamp, pgEnum  } from "drizzle-orm/pg-core";

export const courseStatus = pgEnum("course_status", ["draft", "published"])

export const course = pgTable("course", {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
    status: courseStatus("status").notNull().default("draft")
})