import { z } from 'zod';

const createEmployeeZodSchema = z.object({
  body: z.object({
    firstName: z.string().min(1).max(255),
    lastName: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string(),
    phoneNo: z.string(),
    isBlocked: z.boolean().optional(),
  }),
});

export const EmployeeValidation = {
  createEmployeeZodSchema,
};
