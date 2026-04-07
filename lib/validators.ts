import { z } from "zod";

export const contactTopicSchema = z.enum([
  "Store question",
  "Order issue",
  "Rewards",
  "Careers",
  "Accessibility",
  "Press inquiry",
  "Meetup",
  "Newsletter",
  "Store",
]);

export const contactSubmissionSchema = z.object({
  fullName: z.string().min(2).max(120),
  email: z.string().email().max(255),
  phone: z
    .string()
    .min(7)
    .max(30)
    .regex(/^[0-9()+\-\s]*$/)
    .optional()
    .or(z.literal("")),
  topic: contactTopicSchema,
  preferredStore: z.string().max(180).optional().or(z.literal("")),
  message: z.string().min(10).max(3000),
});

export const orderItemSchema = z.object({
  itemId: z.string().min(1),
  name: z.string().min(1).max(200),
  unitPriceCents: z.number().int().nonnegative(),
  quantity: z.number().int().min(1).max(50),
  customizations: z.record(z.string(), z.unknown()).optional(),
});

export const createOrderSchema = z.object({
  email: z.string().email().max(255),
  pickupName: z.string().min(2).max(120),
  pickupTime: z.string().datetime(),
  storeId: z.string().min(1).max(100),
  items: z.array(orderItemSchema).min(1).max(100),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
