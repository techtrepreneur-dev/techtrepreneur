import BookForm from '@/components/BookForm'
import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

export default function page() {
    return (
        <section className="">
            <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-5 py-8">
                    <BookForm />
                </div>
                <div className="w-full md:w-6/12 hidden md:block bg-primary">
                    <div className="relative">
                        <div className="dark-overlay flex justify-center items-center absolute left-0 top-0 w-full h-full z-[1] rounded-tl-xl rounded-bl-xl">
                            <div className="borde rounded border-gray-200 p-5 max-w-[550px] mx-auto w-full">
                                <div className="text-4xl font-bold text-center  poppins-medium text-white">
                                    Let's solve the Puzzle, <br /> Let's talk business
                                </div>
                                <div className="mt-4 text-sm poppins-regular text-gray-300 leading-6 text-center max-w-[420px] mx-auto">
                                    <FaQuoteLeft size={10} /> A sound mind in a sound body is a short but full description of a happy state in this world
                                    - <small className='font-extrabold'> John Locke </small>
                                </div>
                            </div>
                        </div>
                        <Image src="/hero.png" alt="" width={1000} height={1000} className="w-full h-full rounded-tl-xl rounded-bl-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
