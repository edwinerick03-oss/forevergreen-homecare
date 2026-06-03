import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAuthContext(isAdmin = false): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "test-user",
    email: "test@example.com",
    name: "Test User",
    loginMethod: "manus",
    role: isAdmin ? "admin" : "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

describe("applications", () => {
  describe("submitCaregiverApp", () => {
    it("should successfully submit a caregiver application", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.applications.submitCaregiverApp({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "(206) 555-0123",
        certification: "CNA",
        experience: "5 years in home care",
        availability: "Flexible",
        motivation: "I want to help seniors live independently",
      });

      expect(result).toHaveProperty("id");
      expect(result.fullName).toBe("John Doe");
      expect(result.email).toBe("john@example.com");
      expect(result.status).toBe("pending");
    });

    it("should require all caregiver application fields", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.applications.submitCaregiverApp({
          fullName: "John Doe",
          email: "john@example.com",
          phone: "(206) 555-0123",
          certification: "CNA",
          experience: "5 years",
          availability: "Flexible",
          motivation: "", // Missing motivation
        } as any);
        expect.fail("Should have thrown an error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe("submitFamilyApp", () => {
    it("should successfully submit a family application", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      const result = await caller.applications.submitFamilyApp({
        organizationName: "Lakewood Adult Family Home",
        contactName: "Jane Smith",
        email: "jane@example.com",
        phone: "(206) 555-0456",
        careNeeds: "Senior care for 2 residents",
        hoursPerWeek: 40,
        budget: "$20-25/hr",
        message: "Looking for reliable caregivers",
      });

      expect(result).toHaveProperty("id");
      expect(result.organizationName).toBe("Lakewood Adult Family Home");
      expect(result.email).toBe("jane@example.com");
      expect(result.status).toBe("pending");
    });

    it("should require all family application fields", async () => {
      const { ctx } = createAuthContext();
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.applications.submitFamilyApp({
          organizationName: "Lakewood Adult Family Home",
          contactName: "Jane Smith",
          email: "jane@example.com",
          phone: "(206) 555-0456",
          careNeeds: "", // Missing care needs
          message: "Looking for reliable caregivers",
        } as any);
        expect.fail("Should have thrown an error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe("getCaregiverApplications", () => {
    it("should return empty array when no applications exist", async () => {
      const { ctx } = createAuthContext(true);
      const caller = appRouter.createCaller(ctx);

      const result = await caller.applications.getCaregiverApplications();

      expect(Array.isArray(result)).toBe(true);
    });

    it("should require admin role to view applications", async () => {
      const { ctx } = createAuthContext(false);
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.applications.getCaregiverApplications();
        expect.fail("Should have thrown an error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  describe("updateCaregiverStatus", () => {
    it("should require admin role to update status", async () => {
      const { ctx } = createAuthContext(false);
      const caller = appRouter.createCaller(ctx);

      try {
        await caller.applications.updateCaregiverStatus({
          id: 1,
          status: "approved",
        });
        expect.fail("Should have thrown an error");
      } catch (error) {
        expect(error).toBeDefined();
      }
    });

    it("should allow admin to update application status", async () => {
      const { ctx } = createAuthContext(true);
      const caller = appRouter.createCaller(ctx);

      // First submit an application
      const submitted = await caller.applications.submitCaregiverApp({
        fullName: "John Doe",
        email: "john@example.com",
        phone: "(206) 555-0123",
        certification: "CNA",
        experience: "5 years",
        availability: "Flexible",
        motivation: "I want to help",
      });

      // Then update its status
      const updated = await caller.applications.updateCaregiverStatus({
        id: submitted.id,
        status: "approved",
      });

      expect(updated.status).toBe("approved");
    });
  });
});
