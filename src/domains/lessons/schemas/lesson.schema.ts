import { pgTable, text, uuid, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { module } from '@/domains/modules/schemas/module.schema';

export const lessonStatus = pgEnum('lesson_status', ['draft', 'published']);

export const lesson = pgTable('lesson', {
  id: uuid('id').primaryKey().defaultRandom(),
  module_id: uuid("module_id").notNull().references(() => module.id, {onDelete: "cascade"}),
  title: text('title').notNull(),
  content: text('content').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  status: lessonStatus('status').notNull().default('draft'),
});
