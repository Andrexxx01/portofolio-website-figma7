import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").refine((val) => val.trim().length > 0, {message: "Name cannot be empty",}),
    email: z.string().trim().min(1, "Email is required").refine((val) => emailRegex.test(val), {message: "Email must contain '@' sign and domain name",}),
    message: z.string().trim().min(1, "Message is required").refine((val) => val.trim().length > 0, {message: "Message cannot be empty",}),
});

export type ContactFormValues = z.infer<typeof contactSchema>;