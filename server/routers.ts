import { getSessionCookieOptions } from "./_core/cookies";

const COOKIE_NAME = "session";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { createCaregiverApplication, getCaregiverApplications, updateCaregiverApplicationStatus, createFamilyApplication, getFamilyApplications, updateFamilyApplicationStatus, createContactInquiry, getContactInquiries, updateContactInquiryStatus, createSupportDonation, getSupportDonations, updateSupportDonationStatus } from "./db";
import { notifyOwner } from "./_core/notification";

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

  contact: router({
    // Submit contact inquiry
    submitInquiry: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        subject: z.string().min(1),
        message: z.string().min(1),
        inquiryType: z.enum(['general', 'caregiver', 'family', 'partnership', 'other']).default('general'),
      }))
      .mutation(async ({ input }) => {
        const inquiry = await createContactInquiry({
          name: input.name,
          email: input.email,
          phone: input.phone,
          subject: input.subject,
          message: input.message,
          inquiryType: input.inquiryType,
        });
        
        // Notify owner
        await notifyOwner({
          title: `New Contact Inquiry: ${input.subject}`,
          content: `From: ${input.name} (${input.email})\n\nType: ${input.inquiryType}\n\nMessage: ${input.message}`,
        });
        
        return inquiry;
      }),

    // Admin: Get all contact inquiries
    getInquiries: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await getContactInquiries();
      }),

    // Admin: Update inquiry status
    updateInquiryStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['new', 'responded', 'closed']),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await updateContactInquiryStatus(input.id, input.status);
      }),
  }),

  support: router({
    // Submit support/donation
    submitSupport: publicProcedure
      .input(z.object({
        supporterName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        supportType: z.enum(['monetary', 'volunteer', 'partnership', 'advocacy', 'other']).default('monetary'),
        message: z.string().optional(),
        amount: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const support = await createSupportDonation({
          supporterName: input.supporterName,
          email: input.email,
          phone: input.phone,
          supportType: input.supportType,
          message: input.message,
          amount: input.amount,
        });
        
        // Notify owner
        await notifyOwner({
          title: `New Support Offer: ${input.supportType}`,
          content: `From: ${input.supporterName} (${input.email})\n\nType: ${input.supportType}${input.amount ? `\nAmount: ${input.amount}` : ''}\n\nMessage: ${input.message || 'No message provided'}`,
        });
        
        return support;
      }),

    // Admin: Get all support/donations
    getSupport: protectedProcedure
      .query(async ({ ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await getSupportDonations();
      }),

    // Admin: Update support status
    updateSupportStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['pending', 'contacted', 'completed']),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Unauthorized');
        }
        return await updateSupportDonationStatus(input.id, input.status);
      }),
  }),
});

export type AppRouter = typeof appRouter;
