"use server"

import db from "../prisma";
export async function getScheduledTimes(selectedDate: string) {

    const response = await db.schedule.findMany({
        where: {
            date: selectedDate
        }
    })

    if (!response) {
        throw new Error('Failed to fetch booked times');
    }

    console.log(response)
}