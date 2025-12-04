"use server"

import z from "zod"
import { NewsletterValidation } from "../validations/newsletter"

export const createNewsletter = async (prevstate: unknown, formData: FormData) => {

    try {
        const formValues = {
            email: formData.get("email"),
        }

        const validatedData = await NewsletterValidation.parseAsync(formValues)

        const res = await fetch(process.env.API_URL + "/api/newsletter/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(validatedData)
        })

        if (!res) console.log(res)

        const resData: Promise<{ success: boolean, error: string }> = res.json()
        const data = await resData

        return data

    } catch (error) {
        if (error instanceof z.ZodError) {
            const fieldErrors = error.flatten().fieldErrors
            return { success: false, fieldErrors }
        }
        else {
            console.log(error)
        }
    }
}
