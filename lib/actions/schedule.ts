"use server"

import { z } from "zod";
import db from "../prisma";
import { scheduleValidation } from "../validation/schedule";


export async function getScheduledTimes(selectedDate: string) {

    const response = await db.schedule.findMany({
        where: {
            date: selectedDate
        }
    })

    if (!response) {
        throw new Error('Failed to fetch booked times');
    }

    return response
}

export const createSchedule = async (prevstate: unknown, formData: FormData) => {

    try {
        const formValues = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            address: formData.get("address"),
            date: formData.get("date"),
            time: formData.get("time")
        }
        const validatedData = await scheduleValidation.parseAsync(formValues)

        const result = await db.schedule.create({
            data: validatedData
        })
        if (!result) {
            return { success: false, error: "Unable to book appointment" }
        }
        console.log(result)
        return { success: true, error: null }

    } catch (error) {
        if (error instanceof z.ZodError) {
            const fieldErrors = error.flatten().fieldErrors
            return { success: false, fieldErrors }
        }
        else {
            console.log(error)
            throw new Error("Something went wrong")
        }
    }
}