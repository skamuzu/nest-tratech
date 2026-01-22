import { pgTable, text, uuid, timestamp, pgEnum } from 'drizzle-orm/pg-core';
import { course } from '@/domains/courses/schemas/course.schema';

export const moduleStatus = pgEnum('module_status', ['draft', 'published']);

export const module = pgTable('module', {
  id: uuid('id').primaryKey().defaultRandom(),
  course_id: uuid("course_id").notNull().references(() => course.id, {onDelete: 
    "cascade"
  }),
  name: text('name').notNull(),
  description: text('description').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
  status: moduleStatus('status').notNull().default('draft'),
});
