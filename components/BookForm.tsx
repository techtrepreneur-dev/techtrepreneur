"use client"

import { useState, useEffect, useActionState } from "react"
import { DateCalendar, DigitalClock } from "@mui/x-date-pickers"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"

import { getBookedTimes,createBooking } from "@/lib/actions/booking"

import { ArrowRight, Loader2 } from "lucide-react"


export default function BookForm() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [bookedTimes, setBookedTimes] = useState([]);

  const [notice, setNotice] = useState(true)
  const [mounted, setMounted] = useState(false)

  const today = dayjs();
  // Check if the selected date is the same as today's date
  const isToday = (selectedDate && selectedDate.isSame(today, 'day')) ? true : false;

  const [state, formAction, isPending] = useActionState(createBooking, null)


  const router = useRouter()

  useEffect(() => {
    if (state !== null && state?.fieldErrors === undefined) {
      console.log("okay")
    }
  }, [state]);


  // This useEffect runs every time selectedDate changes
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
      const loadBookedTimes = async () => {
        try {
          const times = await getBookedTimes(formattedDate);
          setBookedTimes(times);

        } catch (err) {
          setBookedTimes([]);
        }
      }
      loadBookedTimes();
    }
  }, [selectedDate]); // This dependency ensures the effect re-runs when the date changes


  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null


  const shouldDisableTime = (timeValue, view) => {
    // Format the timeValue to match your backend's "h:mm A" format.
    const formattedTime = dayjs(timeValue).format('h:mm A')

    // Check if the formatted time dey inside the array of already booked times.
    return bookedTimes.includes(formattedTime);
  };

  return (
    <div className="px-5">
      <form action={formAction} className="w-full poppins-regular">
        {notice && (
          <div className="bg-gray-100 rounded-md border border-gray-200 p-2 max-w-[400px] mb-3 shadow">
            <div className="text-lg text-slate-800 font-semibold roboto-regular tracking-wider">Notice!</div>
            <p className="max-w-[340p] text-xs text-slate-700 leading-[18px]">Please correctly fill the form below and we'll surely get back to you within <b>6 hours</b> </p>
            <button
              onClick={() => setNotice(false)}
              className="text-xs px-2 mt-2 cursor-pointer py-1 rounded border border-gray-400 text-slate-700 font-bold">Got it</button>
          </div>
        )}

        <div className="text-sm text-gray-700">Personal Info</div>
        <div className="flex flex-wrap md:flex-nowrap justify-between mt-3 items-center">

          <div className="mb-4 w-full md:basis-[47%]">
            <input type="text" name="name" className="w-full text-xs md:text-sm  p-2 md:p-[7px] rounded-md border border-gray-300 focus:outline-none" placeholder="Full Name" />
            {state?.fieldErrors?.name && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.name}</p>}
          </div>

          <div className="mb-4 w-full md:basis-[47%]">
            <input type="text" name="phone" className="w-full text-xs md:text-sm p-2 md:p-[7px] rounded-md border border-gray-300 focus:outline-none" placeholder="Phone number" />
            {state?.fieldErrors?.phone && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.phone}</p>}
          </div>

        </div>

        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          <div className="mb-4 w-full md:basis-[47%]">
            <input type="email" name="email" className="w-full text-xs md:text-sm p-2 md:p-[7px] rounded-md border border-gray-300 focus:outline-none" placeholder="Email" />
            {state?.fieldErrors?.email && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.email}</p>}
          </div>

          <div className="mb-4 w-full md:basis-[47%]">
            <input type="text" name="address" className="w-full text-xs md:text-sm  p-2 md:p-[7px] rounded-md border border-gray-300 focus:outline-none" placeholder="Address" />
            {state?.fieldErrors?.address && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.address}</p>}
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap gap-3">
          <div>
            <div className="text-sm text-gray-700">Pick a date</div>
            <DateCalendar
              className="m-0! !max-h-[350px]"
              value={selectedDate}
              disablePast
              onChange={(newDate) => setSelectedDate(newDate)}
            />
            <input type="hidden" name="date" value={dayjs(selectedDate).format('YYYY-MM-DD') || ""} />
            {state?.fieldErrors?.date && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.date}</p>}
          </div>

          <div>
            <div className="mb-2 text-sm text-gray-700">Pick Time</div>
            <DigitalClock
              value={selectedTime}
              onChange={(newTime) => setSelectedTime(newTime)}
              timeStep={60}
              shouldDisableTime={shouldDisableTime}
              ampm={true}
              disablePast={isToday}
            />
            <input type="hidden" name="time" value={dayjs(selectedTime).format('h:mm A') || ""} />
            {state?.fieldErrors?.time && <p className="text-xs mt-2 md:max-w-[250px] text-red-400">{state.fieldErrors.time}</p>}
          </div>
        </div>
        <div className="mt-5 md:mt-3">
          <button className="flex gap-1 items-center cursor-pointer">
            <div className='border border-black/30 px-5 py-[8px] shadow poppins-medium rounded-3xl duration-500 roboto-regula transiton-all  text-black/80 hover:text-black/100 hover:bg-white/80'>Book</div>
            <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-amber-300 text-black hover:text-black/80 hover:bg-white/80 shadow'> {isPending ? <Loader2 className="animate-spin" /> : <ArrowRight />} </div>
          </button>
        </div>
      </form>
    </div>
  )
}
