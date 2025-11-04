import EmblaCarousel from "@/components/EmblaCarousel";
import { FAQ } from "@/components/FAQ";
import { Navigation } from "@/components/Navigation";
import ServicesCarousel from "@/components/ServicesCarousel";
import Testimonia from "@/components/Testimonial";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsFolder, BsPatchQuestion } from "react-icons/bs";
import { CiFacebook, CiLinkedin, CiTrophy, CiTwitter } from "react-icons/ci";
import { FaPaperPlane } from "react-icons/fa";
import { FaBriefcase, FaUsers } from "react-icons/fa6";


export default function page() {
    return (
        <>
            <header className="bg-primary pb-5">
                <div className="container mx-auto !px-6 !md:px-8">
                    <section className="pt-15">
                        <div className="flex flex-wrap items-center justify-center">
                            <div className="basis-[100%] md:basis-[55%]">
                                <div className="text-white/70 roboto-regular text-lg tracking-widest mb-5">Techtrepreneur <sup>_</sup> Lets's tech it</div>
                                <div className="text-4xl md:text-6xl md:leading-16 poppins-medium text-white">
                                    Build and growth <br />with scalable <span className="text-amber-300">tools</span>
                                </div>
                                <Link href="" className="flex gap-1 items-center mt-4 ">
                                    <div className='text-sm px-5 py-[10px] poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80'>Get Started</div>
                                    <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80'><ArrowRight /></div>
                                </Link>
                            </div>
                            <div className="basis-[100%] md:basis-[35%] hidden md:block" data-aos="fade-up">
                                <Image src="/hero.png" alt="" width={1000} height={1000} className="w-[80%]" />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt-5">
                    <EmblaCarousel />
                </div>

            </header>
            <main>
                <section className="mt-10 overflow-hidden" id="about">
                    <div className="container mx-auto !px-3 !md:px-8">
                        <div className="flex flex-wrap gap-8 md:gap-[0px]">
                            <div className="basis-[100%] md:basis-[50%]">
                                <div className="roboto-regular text-amber-300 font-bold mb-3">About us</div>
                                <div className="text-3xl md:text-5xl roboto-regular">We're In The Business  of Creating  <span className="text-amber-300 font-bold">Solutions</span> </div>
                                <p className="max-w-[550px] mt-3">
                                    We are a team of visionary engineers and data scientists building elegant, high-performance web solutions infused with proprietary Artificial Intelligence to solve business challenges more effectively than ever before.
                                </p>
                                <p className="mt-2">
                                    Techtrepreneur was founded on the principle that the web should be
                                    adaptive and intuitive. We leverage cutting-edge advancements in afrificial intelligence
                                    and data analysis to help boost productivity for small, medium and large scale businesses
                                </p>

                                <div className="mt-5 mb-8">
                                    <Link href="" className="flex gap-1 items-center">
                                        <div className='text-sm px-5 py-[10px] shadow poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-black text-amber-300 hover:text-black/80 hover:bg-white/80'>Know more</div>
                                        <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-amber-300 text-black hover:text-black/80 hover:bg-white/80 shadow'><ArrowRight /></div>
                                    </Link>
                                </div>

                                <div className="my-5 flex items-center gap-4 md:gap-5 flex-wrap">
                                    <div className="flex flex-wrap md:flex-nowrap items-start justify-between basis-[47%] md:basis-[35%] rounded-xl p-4 bg-gray-200 gap-5">
                                        <BsFolder className="size-8 md:size-12" />
                                        <div>
                                            <div className="text-2xl poppins-medium font-bold">200+</div>
                                            <div className="text-gray-800 text-sm md:text-base ">We deliver great work always</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap  items-start justify-between basis-[47%] md:basis-[35%] rounded-xl p-4 bg-foreground gap-5">
                                        <div className="text-left"><FaBriefcase className="size-7 text-amber-300" /></div>
                                        <div className="text-white">
                                            <div className="text-2xl poppins-medium font-bold">10+</div>
                                            <div className="text-white/80 text-sm md:text-base">Experience you can count on</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap items-start justify-between basis-[47%] md:basis-[35%] rounded-xl p-4 bg-foreground gap-5">
                                        <div className="text-left"><FaUsers className="size-7 text-amber-300" /></div>
                                        <div className="text-white">
                                            <div className="text-2xl poppins-medium font-bold">5K+</div>
                                            <div className="text-white/80 text-sm md:text-base">We have happy Clients worldwide</div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap md:flex-nowrap items-start justify-between basis-[47%] md:basis-[35%] rounded-xl p-4 bg-gray-200 gap-5">
                                        <CiTrophy className="size-8 md:size-12" />
                                        <div>
                                            <div className="text-2xl poppins-medium font-bold">20+</div>
                                            <div className="text-gray-800 text-sm md:text-base ">Award-Winning Works</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="basis-[100%] md:basis-[45%] ml-auto" data-aos="fade-up">
                                <div className="ml-auto clip-left">
                                    <Image src="/about1.jpg" alt="" width={2000} height={2000} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10" id="get-started">
                    <div className="container mx-auto !px-3 !md:px-8">
                        <div className="my-5">
                            <div className="text-3xl md:text-5xl roboto-regular text-center">Get Started</div>
                            <p className="roboto-regular text-center">Get started with just three easy steps</p>
                        </div>

                        <div className="flex flex-wrap mt-10 roboto-regular">
                            <div className="w-full md:w-4/12 p-3 text-center mb-3 md:mb-0" data-aos="fade-up">
                                <div className="flex justify-center items-center border-4 border-black/80 bg-gray-100 rounded-full  w-15 h-15 text-4xl poppins-medium font-bold mx-auto">1</div>
                                <div className="mt-4 text-xl poppins-medium ">Check service list</div>
                                <div className="text-sm text-balance mt-1 max-w-[330px] mx-auto">Go through our list of services and find the service that best suits your business needs.</div>
                            </div>

                            <div className="w-full md:w-4/12 p-3 text-center mb-3 md:mb-0" data-aos="fade-up">
                                <div className="flex justify-center items-center border-4 border-black/80 rounded-full  w-15 h-15 text-4xl poppins-medium font-bold bg-amber-300 mx-auto">2</div>
                                <div className="mt-4 text-xl poppins-medium ">Schedule a meeting</div>
                                <div className="text-sm text-balance mt-1 max-w-[330px] mx-auto">Locate the scheduling page and schedule a meeting with us, so we can get your business requirements.</div>
                            </div>

                            <div className="w-full md:w-4/12 p-3 text-center mb-3 md:mb-0" data-aos="fade-up">
                                <div className="flex justify-center items-center border-4 border-black/80 bg-gray-100 rounded-full  w-15 h-15 text-4xl poppins-medium font-bold mx-auto">3</div>
                                <div className="mt-4 text-xl poppins-medium ">Wait for feedback</div>
                                <div className="text-sm text-balance mt-1 max-w-[330px] mx-auto">You're all set and good to go. We'll get back to you with-in 12 hours, kindly wait for our feedback</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-10 relative" id="services">
                    <div className="container mx-auto !px-3 !md:px-8">
                        <div className="roboto-regular text-amber-300 font-bold mb-3">Our services</div>
                        <div className="text-3xl md:text-5xl roboto-regular">We're The <span className="text-amber-300 font-bold"></span>ExPerts</div>
                        <p className="max-w-[300px] roboto-regular">Web focused, AI oriented, we offer only the best of these services</p>
                    </div>
                    <ServicesCarousel />
                </section>

                <section className="py-15">
                    <div className="container mx-auto px-3 md:px-6">
                        <div className="flex flex-wrap gap-10 items-center">
                            <div className="basis-[100%] md:basis-[40%] roboto-regular clip-bottom" data-aos="fade-down">
                                <Image src="/schedule.png" alt="" width={2000} height={2000} className="border-5 border-black" />
                            </div>
                            <div className="basis-[100%] md:basis-[50%] roboto-regular" data-aos="fade-up">
                                <div className="text-sm md:text-base">Don't know what you need?</div>
                                <div className="text-2xl md:text-4xl">Schedul A Meeting <br /> Let's <span className="font-bold">Talk Business</span></div>
                                <div className="text-sm max-w-[500px] mt-2">Feeling overwelmed? Want a website for your business<br /> but don't really know what you need or how to even get started? </div>
                                <div className="text-sm max-w-[500px] ">Schedule a meeting today. We offer free counselling and tips on how to boots your online presense and increase business productivity.</div>

                                <div className="animate-bounce mt-10">
                                    <Link href="" className="flex gap-1 items-center ">
                                        <div className='text-sm px-5 py-[10px] shadow poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-black text-amber-300 hover:text-black/80 hover:bg-white/80'>Schedule</div>
                                        <div className='text-sm p-2 poppins-medium rounded-full duration-500 roboto-regula transiton-all bg-amber-300 text-black hover:text-black/80 hover:bg-white/80 shadow'><ArrowRight /></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-15 pb-10 bg-primary overflow-clip" id="news-letter">
                    <div className="container mx-auto px-3 md:px-6">
                        <div className="flex flex-wrap gap-8 justify-between">
                            <div className="basis-[100%] md:basis-[40%]" data-aos="fade-up">
                                <div className="clip-right">
                                    <Image src="/about2.jpg" alt="" width={2000} height={2000} />
                                </div>
                            </div>
                            <div className="basis-[100%] md:basis-[50%]" data-aos="fade-up">
                                <div>
                                    <div className="text-xl md:text-3xl text-white poppins-medium">If You Can Think It</div>
                                    <div className="text-3xl md:text-5xl text-white poppins-medium">We Can <span className="text-amber-300 font-bold">Tech It</span></div>
                                </div>

                                <div className="flex gap-3 text-white/50 my-3">
                                    <CiFacebook size={30} className="cursor-pointer hover:text-amber-300 transition-all duration-300" />
                                    <CiLinkedin size={30} className="cursor-pointer hover:text-amber-300 transition-all duration-300" />
                                    <CiTwitter size={30} className="cursor-pointer hover:text-amber-300 transition-all duration-300" />
                                </div>

                                <div className="mt-10 text-white roboto-regular">
                                    <div className="text-white/80">Suscribe to our News Letter for updates</div>
                                    <form action="" className="mt-2 max-w-[400px]">
                                        <input type="email" placeholder="Email" className="w-full border-b border-b-white/50 p-2 " required />
                                        <button className="flex gap-1 justify-center items-center w-full mt-2 p-3 rounded-md bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer text-black/80 text-center font-semibold">Send <FaPaperPlane /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="my-10">
                    <div className="container mx-auto px-3 md:px-6" id="reviews">
                        <div className="mb-4">
                            <div className="text-3xl md:text-5xl roboto-regular">Customer's Feedback</div>
                            <p className="max-w-[300px] roboto-regular pl-2">We get positive feedbacks from all our clients. Here are a few</p>
                        </div>

                        <Testimonia />
                    </div>
                </section>


                <section className="py-10 bg-primary relative overflow-hidden" id="faq">
                    <div className="absolute top-10 right-30 z-[1]"><BsPatchQuestion className="text-white opacity-5 size-50" /></div>
                    <div className="absolute -bottom-10 -left-5 z-[1]"><BsPatchQuestion className="text-amber-300 opacity-5 size-50" /></div>
                    <div className="container mx-auto px-3 md:px-6">
                        <div className="basis-[100%] md:basis-[50%] px-3 md:px-5 my-5 md:mt-8">
                            <div className="text-3xl poppins-regular font-bold text-white">FAQ</div>
                            <div className='flex mt-1 gap-2'><span className='h-[5px] w-[30px] rounded-md bg-amber-300'></span><span className='h-[5px] w-[30px] rounded-md bg-white'></span></div>
                            <div className="text-white/80 roboto-regular mb-5 mt-3">Don't forget to ask questions</div>
                            <FAQ />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
