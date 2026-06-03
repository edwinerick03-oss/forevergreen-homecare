import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createCaregiverApplication, getCaregiverApplications, updateCaregiverApplicationStatus, createFamilyApplication, getFamilyApplications, updateFamilyApplicationStatus } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  applications: router({
    // Caregiver Applications
    submitCaregiverApp: publicProcedure
      .input(z.object({
        fullName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(10),
        experience: z.string(),
        certification: z.string(),
        availability: z.string(),
        motivation: z.string(),
      }))
      .mutation(async ({ input }) => {
        return await createCaregiverApplication({
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          experience: input.experience,
          certification: input.certification,
          availability: input.availability,
          motivation: input.motivation,
        });
      }),

    // Family Applications
    submitFamilyApp: publicProcedure
      .input(z.object({
        organizationName: z.string().min(1),
        contactName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(10),
        careNeeds: z.string(),
        hoursPerWeek: z.number().optional(),
        budget: z.string().optional(),
        message: z.string(),
      }))
      .mutation(async ({ input }) => {
        return await createFamilyApplication({
          organizationName: input.organizationName,
          contactName: input.contactName,
          email: input.email,
          phone: input.phone,
          careNeeds: input.careNeeds,
          hoursPerWeek: input.hoursPerWeek,
          budget: input.budget,
          message: input.message,
        });
      }),

    // Admin: Get all caregiver applications
    getCaregiverApplications: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await getCaregiverApplications();
      }),

    // Admin: Get all family applications
    getFamilyApplications: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await getFamilyApplications();
      }),

    // Admin: Update caregiver application status
    updateCaregiverStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['pending', 'reviewed', 'approved', 'rejected']),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await updateCaregiverApplicationStatus(input.id, input.status);
      }),

    // Admin: Update family application status
    updateFamilyStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['pending', 'reviewed', 'approved', 'rejected']),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await updateFamilyApplicationStatus(input.id, input.status);
      }),
  }),
});

export type AppRouter = typeof appRouter;
