import { z } from 'zod';

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Description is required.').max(65535),
    // desiredAmt: z.string().min(1, 'Desired Amount is required.').max(255),
    // annualAmt: z.string().min(1, 'Annual Amount Earned is required.').max(255),
    // fullName: z.string().min(1, 'Full Name is required.').max(255),
    // businessType: z.string().min(1, 'Business Type is required.').max(255),
    // phoneNo: z.string().min(1, 'Phone No. is required.').max(255),

});

export type CreateIssueSchema = z.infer<typeof createIssueSchema>

export const patchIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255).optional(),
    description: z.string().min(1, 'Description is required.').max(65535).optional(),
    assignedToUserId: z.string().min(1, 'AssignedToUserId is required.').max(255).optional().nullable(),
    // desiredAmt: z.string().min(1, 'Desired Amount is required.').max(255).optional(),
    // annualAmt: z.string().min(1, 'Annual Amount Earned is required.').max(255).optional(),
    // fullName: z.string().min(1, 'Full Name is required.').max(255).optional(),
    // businessType: z.string().min(1, 'Business Type is required.').max(255).optional(),
    // phoneNo: z.string().min(1, 'Phone No. is required.').max(255).optional(),

});