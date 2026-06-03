import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { createContactInquiry, getContactInquiries, updateContactInquiryStatus } from "./db";
import { createSupportDonation, getSupportDonations, updateSupportDonationStatus } from "./db";

describe("Contact Inquiries", () => {
  it("should create a contact inquiry", async () => {
    const inquiry = await createContactInquiry({
      name: "John Doe",
      email: "john@example.com",
      phone: "2533416755",
      subject: "Question about services",
      message: "I'd like to know more about your home care services",
      inquiryType: "general",
    });

    expect(inquiry).toBeDefined();
    expect(inquiry?.name).toBe("John Doe");
    expect(inquiry?.email).toBe("john@example.com");
    expect(inquiry?.inquiryType).toBe("general");
    expect(inquiry?.status).toBe("new");
  });

  it("should retrieve all contact inquiries", async () => {
    const inquiries = await getContactInquiries();
    expect(Array.isArray(inquiries)).toBe(true);
    expect(inquiries.length).toBeGreaterThan(0);
  });

  it("should update contact inquiry status", async () => {
    const inquiries = await getContactInquiries();
    const firstInquiry = inquiries[0];

    if (firstInquiry) {
      const updated = await updateContactInquiryStatus(firstInquiry.id, "responded");
      expect(updated?.status).toBe("responded");
    }
  });

  it("should create a caregiver inquiry", async () => {
    const inquiry = await createContactInquiry({
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "2533416755",
      subject: "Caregiver Application",
      message: "I'm interested in joining your team",
      inquiryType: "caregiver",
    });

    expect(inquiry?.inquiryType).toBe("caregiver");
  });

  it("should create a family inquiry", async () => {
    const inquiry = await createContactInquiry({
      name: "Robert Johnson",
      email: "robert@example.com",
      subject: "Care Request",
      message: "Looking for care for my mother",
      inquiryType: "family",
    });

    expect(inquiry?.inquiryType).toBe("family");
  });
});

describe("Support/Donations", () => {
  it("should create a monetary donation", async () => {
    const support = await createSupportDonation({
      supporterName: "Alice Williams",
      email: "alice@example.com",
      phone: "2533416755",
      supportType: "monetary",
      amount: "$250",
      message: "Supporting your mission in Ghana",
    });

    expect(support).toBeDefined();
    expect(support?.supporterName).toBe("Alice Williams");
    expect(support?.supportType).toBe("monetary");
    expect(support?.amount).toBe("$250");
    expect(support?.status).toBe("pending");
  });

  it("should create a volunteer support offer", async () => {
    const support = await createSupportDonation({
      supporterName: "Bob Martinez",
      email: "bob@example.com",
      supportType: "volunteer",
      message: "I'd like to volunteer my time",
    });

    expect(support?.supportType).toBe("volunteer");
  });

  it("should create a partnership inquiry", async () => {
    const support = await createSupportDonation({
      supporterName: "Corporate Partner",
      email: "partner@company.com",
      supportType: "partnership",
      message: "Interested in corporate sponsorship",
    });

    expect(support?.supportType).toBe("partnership");
  });

  it("should retrieve all support submissions", async () => {
    const supports = await getSupportDonations();
    expect(Array.isArray(supports)).toBe(true);
    expect(supports.length).toBeGreaterThan(0);
  });

  it("should update support status", async () => {
    const supports = await getSupportDonations();
    const firstSupport = supports[0];

    if (firstSupport) {
      const updated = await updateSupportDonationStatus(firstSupport.id, "contacted");
      expect(updated?.status).toBe("contacted");
    }
  });

  it("should handle various donation amounts", async () => {
    const amounts = ["$50", "$250", "$500", "$1000", "$5000"];

    for (const amount of amounts) {
      const support = await createSupportDonation({
        supporterName: `Donor-${amount}`,
        email: `donor-${amount}@example.com`,
        supportType: "monetary",
        amount,
      });

      expect(support?.amount).toBe(amount);
    }
  });

  it("should create advocacy support", async () => {
    const support = await createSupportDonation({
      supporterName: "Social Media Advocate",
      email: "advocate@example.com",
      supportType: "advocacy",
      message: "I'll help spread the word on social media",
    });

    expect(support?.supportType).toBe("advocacy");
  });
});

describe("Inquiry Type Validation", () => {
  it("should accept all valid inquiry types", async () => {
    const types = ["general", "caregiver", "family", "partnership", "other"] as const;

    for (const type of types) {
      const inquiry = await createContactInquiry({
        name: `Test-${type}`,
        email: `test-${type}@example.com`,
        subject: `Test ${type}`,
        message: "Test message",
        inquiryType: type,
      });

      expect(inquiry?.inquiryType).toBe(type);
    }
  });
});

describe("Support Type Validation", () => {
  it("should accept all valid support types", async () => {
    const types = ["monetary", "volunteer", "partnership", "advocacy", "other"] as const;

    for (const type of types) {
      const support = await createSupportDonation({
        supporterName: `Supporter-${type}`,
        email: `supporter-${type}@example.com`,
        supportType: type,
      });

      expect(support?.supportType).toBe(type);
    }
  });
});
