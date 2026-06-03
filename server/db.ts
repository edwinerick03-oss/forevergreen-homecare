import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, caregiverApplications, familyApplications, InsertCaregiverApplication, InsertFamilyApplication } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Caregiver Applications
export async function createCaregiverApplication(app: InsertCaregiverApplication) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.insert(caregiverApplications).values(app);
  const created = await db.select().from(caregiverApplications).where(eq(caregiverApplications.email, app.email)).orderBy(desc(caregiverApplications.createdAt)).limit(1);
  return created[0];
}

export async function getCaregiverApplications() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return await db.select().from(caregiverApplications).orderBy(desc(caregiverApplications.createdAt));
}

export async function updateCaregiverApplicationStatus(id: number, status: "pending" | "reviewed" | "approved" | "rejected") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.update(caregiverApplications).set({ status }).where(eq(caregiverApplications.id, id));
  const updated = await db.select().from(caregiverApplications).where(eq(caregiverApplications.id, id)).limit(1);
  return updated[0];
}

// Family Applications
export async function createFamilyApplication(app: InsertFamilyApplication) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.insert(familyApplications).values(app);
  const created = await db.select().from(familyApplications).where(eq(familyApplications.email, app.email)).orderBy(desc(familyApplications.createdAt)).limit(1);
  return created[0];
}

export async function getFamilyApplications() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return await db.select().from(familyApplications).orderBy(desc(familyApplications.createdAt));
}

export async function updateFamilyApplicationStatus(id: number, status: "pending" | "reviewed" | "approved" | "rejected") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.update(familyApplications).set({ status }).where(eq(familyApplications.id, id));
  const updated = await db.select().from(familyApplications).where(eq(familyApplications.id, id)).limit(1);
  return updated[0];
}
import { contactInquiries, InsertContactInquiry, supportDonations, InsertSupportDonation } from "../drizzle/schema";

// Contact Inquiries
export async function createContactInquiry(inquiry: InsertContactInquiry) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.insert(contactInquiries).values(inquiry);
  const created = await db.select().from(contactInquiries).where(eq(contactInquiries.email, inquiry.email)).orderBy(desc(contactInquiries.createdAt)).limit(1);
  return created[0];
}

export async function getContactInquiries() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return await db.select().from(contactInquiries).orderBy(desc(contactInquiries.createdAt));
}

export async function updateContactInquiryStatus(id: number, status: "new" | "responded" | "closed") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.update(contactInquiries).set({ status }).where(eq(contactInquiries.id, id));
  const updated = await db.select().from(contactInquiries).where(eq(contactInquiries.id, id)).limit(1);
  return updated[0];
}

// Support/Donations
export async function createSupportDonation(support: InsertSupportDonation) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.insert(supportDonations).values(support);
  const created = await db.select().from(supportDonations).where(eq(supportDonations.email, support.email)).orderBy(desc(supportDonations.createdAt)).limit(1);
  return created[0];
}

export async function getSupportDonations() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  return await db.select().from(supportDonations).orderBy(desc(supportDonations.createdAt));
}

export async function updateSupportDonationStatus(id: number, status: "pending" | "contacted" | "completed") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.update(supportDonations).set({ status }).where(eq(supportDonations.id, id));
  const updated = await db.select().from(supportDonations).where(eq(supportDonations.id, id)).limit(1);
  return updated[0];
}
