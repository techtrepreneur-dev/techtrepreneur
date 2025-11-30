"use server"

import z from "zod"
import { createBookingValidation } from "../validations/booking"

export const createBooking = async (prevstate: unknown, formData: FormData) => {

  try {
    const formValues = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      address: formData.get("address"),
      date: formData.get("date"),
      time: formData.get("time")
    }

    const validatedData = await createBookingValidation.parseAsync(formValues)

    const res = await fetch(process.env.API_URL + "/api/booking/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(validatedData)
    })

    if (res.status !== 201) console.log(res)

    const resData: Promise<{ success: boolean, data:Booking[], error: string }> = res.json()
    const data = await resData

    return { ...data }

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

export async function getBookedTimes(selectedDate: string) {

  const response = await fetch(`${process.env.API_URL}/api/booking/date/all?date=${selectedDate}`);

  if (!response.ok) {
    throw new Error('Failed to fetch booked times');
  }

  const data = await response.json();
  return data.data.map((item) => item.time);

}

