import { pgTable, pgEnum, text } from 'drizzle-orm/pg-core';
import { user } from '@/domains/users/schemas/user.schema';

export const role = pgEnum('role', ['admin', 'student']);

export const profile = pgTable('profiles', {
  id: text('id').references(() => user.id, { onDelete: 'cascade' }),
  role: role("role").notNull().default("student")
});
