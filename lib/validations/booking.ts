
import { z } from "zod"

export const BookingValidation = z.object({
    name: z.string().min(5, "Must contain at least 5 characters. ").max(50, "Must not exceed 50 characters. "),
    phone: z.string()
        .min(3, "Must be at least 3 characters. ")
        .max(11, "Must not exceed 11 characters. ")
        .regex(/^[0-9+]+$/, "Only numbers are allowed"),
    email: z.string()
        .min(3, "Must be at least 3 characters. ")
        .max(30, "Must not exceed 30 characters. ")
        .regex(/^[a-zA-Z0-9@.]+$/, "Only numbers, letters, and @ are allowed"),
    address: z.string().min(5, "Must contain at least 5 characters. ").max(50),
    date: z.string()
        .min(3, "Must be at least 3 characters. ")
        .max(10, "Please pick a date. ")
        .regex(/^[0-9-]+$/, "Only numbers and - are allowed"),
    time: z.string()
        .min(3, "Must be at least 3 characters. ")
        .max(10, "Please pick a time. ")
        .regex(/^[A-Z0-9: ]+$/, "Only letters, numbers and : are allowed"),
})