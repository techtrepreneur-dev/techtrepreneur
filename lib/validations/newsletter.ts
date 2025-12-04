
import { z } from "zod"

export const NewsletterValidation = z.object({
    email: z.string()
        .min(3, "Must be at least 3 characters. ")
        .max(30, "Must not exceed 30 characters. ")
        .regex(/^[a-zA-Z0-9@.]+$/, "Only numbers, letters, and @ are allowed")
})