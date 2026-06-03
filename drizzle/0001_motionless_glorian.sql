CREATE TABLE `contact_inquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`subject` varchar(255) NOT NULL,
	`message` text NOT NULL,
	`inquiry_type` enum('general','caregiver','family','partnership','other') NOT NULL DEFAULT 'general',
	`status` enum('new','responded','closed') NOT NULL DEFAULT 'new',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contact_inquiries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `support_donations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`supporter_name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(20),
	`support_type` enum('monetary','volunteer','partnership','advocacy','other') NOT NULL DEFAULT 'monetary',
	`message` text,
	`amount` varchar(100),
	`status` enum('pending','contacted','completed') NOT NULL DEFAULT 'pending',
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `support_donations_id` PRIMARY KEY(`id`)
);
