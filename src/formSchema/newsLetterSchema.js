import {z} from "zod"

export const emailSchema = z.object({
    email:  z.string()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least 5 characters long" })
    .max(50, { message: "Email must be at most 50 characters long" })
})

