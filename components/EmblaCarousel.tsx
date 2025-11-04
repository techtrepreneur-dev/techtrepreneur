"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import "../app/embla.css"
import Image from 'next/image'

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const slides = [1, 2, 3, 4, 5, 6]

const EmblaCarousel: React.FC = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true })
    ])


    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero1.jpg" alt='' width={2000} height={2000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero2.jpg" alt='' width={2000} height={2000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero3.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[23%] text-white">
                        <Image src="/hero4.jpg" alt='' width={2000} height={2000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero5.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[20%] text-white">
                        <Image src="/hero6.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[30%] text-white">
                        <Image src="/hero7.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero8.jpg" alt='' width={2000} height={2000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>

                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero9.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>

                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero10.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>

                    <div className="embla__slide basis-[45%] md:!basis-[35%] text-white">
                        <Image src="/hero11.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>

                    <div className="embla__slide basis-[45%] md:!basis-[25%] text-white">
                        <Image src="/hero12.png" alt='' width={1000} height={1000} className='w-full border rounded-xl h-[300px] object-cover' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EmblaCarousel
