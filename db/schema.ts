import { sqliteTable, text, primaryKey } from 'drizzle-orm/sqlite-core';
export const portalRecords = sqliteTable('portal_records', {
 scope: text('scope').notNull(), kind: text('kind').notNull(), key: text('key').notNull(),
 value: text('value').notNull(), updated: text('updated').notNull(),
}, t => [primaryKey({columns:[t.scope,t.kind,t.key]})]);
