import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Caregiver applications
export const caregiverApplications = mysqlTable("caregiver_applications", {
  id: int("id").autoincrement().primaryKey(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  experience: text("experience"),
  certification: varchar("certification", { length: 100 }),
  availability: text("availability"),
  motivation: text("motivation"),
  status: mysqlEnum("status", ["pending", "reviewed", "approved", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type CaregiverApplication = typeof caregiverApplications.$inferSelect;
export type InsertCaregiverApplication = typeof caregiverApplications.$inferInsert;

// Family applications
export const familyApplications = mysqlTable("family_applications", {
  id: int("id").autoincrement().primaryKey(),
  organizationName: varchar("organization_name", { length: 255 }).notNull(),
  contactName: varchar("contact_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  careNeeds: text("care_needs"),
  hoursPerWeek: int("hours_per_week"),
  budget: varchar("budget", { length: 100 }),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "reviewed", "approved", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type FamilyApplication = typeof familyApplications.$inferSelect;
export type InsertFamilyApplication = typeof familyApplications.$inferInsert;

// Contact inquiries
export const contactInquiries = mysqlTable("contact_inquiries", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  subject: varchar("subject", { length: 255 }).notNull(),
  message: text("message").notNull(),
  inquiryType: mysqlEnum("inquiry_type", ["general", "caregiver", "family", "partnership", "other"]).default("general").notNull(),
  status: mysqlEnum("status", ["new", "responded", "closed"]).default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = typeof contactInquiries.$inferInsert;

// Support/Donations
export const supportDonations = mysqlTable("support_donations", {
  id: int("id").autoincrement().primaryKey(),
  supporterName: varchar("supporter_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  supportType: mysqlEnum("support_type", ["monetary", "volunteer", "partnership", "advocacy", "other"]).default("monetary").notNull(),
  message: text("message"),
  amount: varchar("amount", { length: 100 }),
  status: mysqlEnum("status", ["pending", "contacted", "completed"]).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type SupportDonation = typeof supportDonations.$inferSelect;
export type InsertSupportDonation = typeof supportDonations.$inferInsert;