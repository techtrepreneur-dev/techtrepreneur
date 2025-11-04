"use client"
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image';
import { reviewData } from '@/lib/data';
import { IoIosArrowBack, IoIosArrowForward, } from 'react-icons/io';
import { Quote, } from 'lucide-react';

export default function Testimonia() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay()])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, setScrollSnaps, onSelect])

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index)
    }, [emblaApi])

    const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
    const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

    return (
        <>
            <div>
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-6">
                        {reviewData.map((data) => (
                            // slid element
                            <div className="min-w-[400px]" key={data.id}>
                                <div className='p-1'>
                                    <div className='p-3 shadow poppins-regular text-slate-800 text-sm leading-5.5 rounded-md'>
                                        <span><Quote className='text-blue-700 mb-1' size={15} /></span>
                                        <p>{data.tes}</p>
                                        <div className='mt-3 font-semibold roboto-regular'>{data.name}</div>
                                    </div>
                                    <Image src={data.img} alt='' width={1000} height={1000} className='border-4 border-r-black/70 border-l-amber-300 mt-4 w-[80px] h-[80px] rounded-tr-none rounded-full object-cover' />
                                </div>
                            </div>
                            // -----------

                        ))}
                    </div>
                </div>

                <div className='grid  items-center'>
                    {/* pagination */}
                    <div className="flex justify-center justify-self-center mt-4 space-x-2">
                        {scrollSnaps.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full ${index === selectedIndex ? 'bg-blue-600' : 'bg-gray-600'}`}
                                onClick={() => scrollTo(index)}
                            ></button>
                        ))}
                    </div>

                    {/* buttons for next and previous slide */}
                    <div className='flex ml-auto gap-2 -mt-3 pr-5 md:pr-0'>
                        <button className="bg-black/80 p-1 rounded-full cursor-pointer" onClick={scrollPrev}><IoIosArrowBack className='text-white' /></button>
                        <button className="bg-black/80 p-1  rounded-full cursor-pointer" onClick={scrollNext}><IoIosArrowForward className='text-white' /></button>
                    </div>
                </div>
            </div>
        </>
    );
}

