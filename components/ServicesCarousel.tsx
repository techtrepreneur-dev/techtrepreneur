"use client"
import React, { useState } from 'react'
import { useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import "../app/services-carousel.css"
import Image from 'next/image'
import { fullstackServicesData, uiuxServicesData, webServicesData } from '@/lib/data'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
const ServicesCarousel: React.FC = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({})
    const [active, setActive] = useState(0)

    const { scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)


    function switchService(index: number) {
        onDotButtonClick(index)
        setActive(index)
    }

    return (
        <section className="embla">
            <div className="flex gap-5 px-6 mt-5 mb-3 sticky top-18 bg-white z-[5] overflow-x-auto py-3">
                {scrollSnaps.map((_, index) => {
                    return (
                        <span
                            key={index}
                            onClick={() => switchService(index)}
                            className={`${active === index && "bg-primary text-white border border-amber-300 rounded-md"} px-3 py-1 shadow rounded inline-block font-semibold text-center cursor-pointer text-sm md:text-base min-w-[150px]`}
                        >
                            {index === 0 && "Web development"}
                            {index === 1 && "Fullstack Services"}
                            {index === 2 && "Ui/UX"}
                        </span>
                    )
                })}
            </div>
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">

                    <div className="embla__slide bg-gray-100 rounded py-10">
                        <div className="container mx-auto px-3 md:px-8">
                            <div className="flex flex-wrap justify-between items-start font-bold">
                                <div className='w-[100%] md:w-[43%]' data-aos="fade-right">
                                    <div className='poppins-medium text-3xl mb-7'>Web Development</div>
                                    <div className='clip-service-image'>
                                        <div><Image src="/hero5.png" className='w-full h-[350px] object-cover' alt="" width={1000} height={1000} /></div>
                                    </div>
                                </div>

                                <div className='md:w-[50%]'>
                                    <div className='mb-4 max-w-[400px] font-normal roboto-regular mt-5 md:mt-0'>
                                        We specialize in empowering companies with results-driven consulting solutions tailored to modern business challenges.
                                    </div>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full text-black/80 reboto-regular"
                                        defaultValue="item-1"
                                    >
                                        {webServicesData.map((item, index) => {
                                            const Icon = item.icon
                                            return (< AccordionItem key={index} value={item.name} >
                                                <AccordionTrigger className=" font-semibold md:text-lg">
                                                    <div className='flex gap-3 items-center'> <div className='rounded-full border-3 border-black/80 p-2'><Icon className='size-5 md:size-6 text-black' /></div>  {item.name}</div>
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col font-normal gap-4 text-balance text-black/60">
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>)
                                        })}
                                    </Accordion>

                                    <div>
                                        <Link href="" className="flex gap-1 items-center mt-4 ">
                                            <div className='text-sm px-5 py-[10px] shadow poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80'>Get Started</div>
                                            <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80 shadow'><ArrowRight /></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="embla__slide bg-primary rounded py-10">
                        <div className="container mx-auto px-3 md:px-8">
                            <div className="flex flex-wrap justify-between items-center font-bold">
                                <div className='w-[100%] md:w-[43%]'>
                                    <div className='poppins-medium text-3xl mb-7 text-white'>Fullstack Services</div>
                                    <div className='clip-service-image white-bg'>
                                        <div><Image src="/hero12.png" className='w-full h-[350px] object-cover' alt="" width={1000} height={1000} /></div>
                                    </div>
                                </div>

                                <div className='md:w-[50%]'>
                                    <div className='mb-4 max-w-[400px] text-white font-normal roboto-regular mt-5 md:mt-0'>
                                        Empowering Businesses with Cohesive Full-Stack Architectures and Seamless User Experiences.
                                    </div>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full text-black/80 reboto-regular"
                                        defaultValue="item-1"
                                    >
                                        {fullstackServicesData.map((item, index) => {
                                            const Icon = item.icon
                                            return (< AccordionItem key={index} value={item.name} >
                                                <AccordionTrigger className=" font-semibold md:text-lg text-white/80">
                                                    <div className='flex gap-3 items-center'> <div className='rounded-full border-3 border-amber-300 p-2'><Icon className='size-5 md:size-6 text-white' /></div>  {item.name}</div>
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col font-normal gap-4 text-balance text-white/60">
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>)
                                        })}
                                    </Accordion>

                                    <div>
                                        <Link href="" className="flex gap-1 items-center mt-4 ">
                                            <div className='text-sm px-5 py-[10px] shadow poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80'>Get Started</div>
                                            <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80 shadow'><ArrowRight /></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="embla__slide bg-gray-100 rounded py-10">
                        <div className="container mx-auto px-3 md:px-8">
                            <div className="flex flex-wrap justify-between items-start font-bold">
                                <div className='w-[100%] md:w-[43%]'>
                                    <div className='poppins-medium text-3xl mb-7'>UI/UX</div>
                                    <div className='clip-service-image'>
                                        <div><Image src="/hero6.png" className='w-full h-[350px] object-cover' alt="" width={1000} height={1000} /></div>
                                    </div>
                                </div>

                                <div className='md:w-[50%]'>
                                    <div className='mb-4 max-w-[400px] font-normal roboto-regular mt-5 md:mt-0'>
                                        We craft intuitive, delightful digital experiences that remove friction, guide users, and transform complexity into clarity
                                    </div>
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="w-full text-black/80 reboto-regular"
                                        defaultValue="item-1"
                                    >
                                        {uiuxServicesData.map((item, index) => {
                                            const Icon = item.icon
                                            return (< AccordionItem key={index} value={item.name} >
                                                <AccordionTrigger className=" font-semibold md:text-lg">
                                                    <div className='flex gap-3 items-center'> <div className='rounded-full border-3 border-black/80 p-2'><Icon className='size-5 md:size-6 text-black' /></div>  {item.name}</div>
                                                </AccordionTrigger>
                                                <AccordionContent className="flex flex-col font-normal gap-4 text-balance text-black/60">
                                                    <p>
                                                        {item.description}
                                                    </p>
                                                </AccordionContent>
                                            </AccordionItem>)
                                        })}
                                    </Accordion>

                                    <div>
                                        <Link href="" className="flex gap-1 items-center mt-4 ">
                                            <div className='text-sm px-5 py-[10px] shadow poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80'>Get Started</div>
                                            <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80 shadow'><ArrowRight /></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default ServicesCarousel
