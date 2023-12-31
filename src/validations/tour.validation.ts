import { z } from "zod";

export const createTourZodSchema = z.object({
  name: z.string().min(1),
  durationHours: z.number().int().min(1),
  ratingQuantity: z.number().int().min(0),
  ratingAverage: z.number().min(0),
  price: z.number().min(0).positive(),
  availableSeats: z.number().int().min(0),
  imageCover: z.string(),
  images: z.array(z.string()).min(1),
  startLocation: z.string(),
  locations: z.array(z.string()).min(1),
  slug: z.string(),
  discountPrice: z.number().positive().min(1).optional(),
  durationDays: z.number().min(0).optional(),
});
