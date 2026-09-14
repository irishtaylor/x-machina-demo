CREATE TABLE `portal_records` (
	`scope` text NOT NULL,
	`kind` text NOT NULL,
	`key` text NOT NULL,
	`value` text NOT NULL,
	`updated` text NOT NULL,
	PRIMARY KEY(`scope`, `kind`, `key`)
);
