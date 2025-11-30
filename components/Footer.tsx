import React from 'react'
// import MessageForm from './MessageForm'
import Link from 'next/link'
import { CiFacebook, CiLinkedin, CiTwitter } from 'react-icons/ci'
import { BsWhatsapp } from 'react-icons/bs'

export default function Footer() {
    return (
        <section className='py-8 bg-gradient-to-b from-primary to-black/95 border-t border-white/30' id='contact'>
            <div className="container mx-auto px-3 md:px-6">
                <div className="flex justify-center gap-3 items-center mt-5"><span className='border border-white max-w-[40px] md:max-w-[70px] w-full '></span> <span className='text-2xl md:text-3xl text-gray-200 poppins-medium'>Reach Us</span><span className='border border-white max-w-[40px] md:max-w-[70px] w-full'></span> </div>

                <div className="flex flex-wrap mt-10 roboto-regular">
                    <div className="w-full md:w-3/12 p-3">
                        <Link href="/" className="text-white roboto-regular block text-3xl transition-colors">
                            <span className='font-bold text-4xl text-amber-300'>T</span>echtrepreneur
                        </Link>
                        <div className='mt-2 mb-4 max-w-[280px]'>
                            <p className='text-sm text-gray-300 max-w-[300px] poppins-regular'><i><span className='font-semibold'>Let's Tech It</span></i></p>
                        </div>
                        <div className="flex gap-3 text-white/50 my-3">
                            <Link href="https://web.facebook.com/profile.php?id=61583752487444"><CiFacebook size={30} className="cursor-pointer hover:text-amber-300 transition-all duration-300" /></Link>
                            <CiLinkedin size={30} className="cursor-pointer hover:text-amber-300 transition-all duration-300" />
                            <CiTwitter size={30} className="cursor-pointer hover:text-amber-300 transition-all duration-300" />
                        </div>
                    </div>

                    <div className="w-full md:w-3/12 p-3">
                        <div className="text-xl text-white poppins-medium">Call us at:</div>
                        <p className='mt-1 text-gray-200 roboto-regular text-sm'>+234 0719393627</p>

                        <div className="text-xl text-white mt-3 poppins-medium">Send an email</div>
                        <p className='mt-1 text-gray-200 roboto-regular text-sm'>techtrepreneur.global@gmail.com</p>

                        <div className="text-xl text-white mt-3 poppins-medium">Chat us</div>
                        <div className='inline-block mt-1'>
                            <Link href="https://wa.me/+2347019392627" className='flex gap-1 items-center rounded text-white bg-green-600 px-2 py-1'>WhatsApp <BsWhatsapp /></Link>
                        </div>
                    </div>

                    <div className="w-full md:w-3/12 p-3">
                        <div className="text-xl text-white poppins-medium">Page links</div>

                        <ul>
                            <li className='mb-2 mt-2'><Link href="/" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>Home</Link></li>
                            <li className='mb-2'><Link href="/about" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>About</Link></li>
                            <li className='mb-2'><Link href="/schedule" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>Schedule meeting</Link></li>
                        </ul>
                    </div>

                    <div className="w-full md:w-3/12 p-3">
                        <div className="text-xl text-white poppins-medium">Useful Links</div>
                        <ul>
                            <li className='mb-2 mt-2'><Link href="/services" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>Services</Link></li>
                            <li className='mb-2'><Link href="/#reviews" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>Reviews</Link></li>
                            <li className='mb-2'><Link href="/#faq" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>FAQ</Link></li>
                            <li className='mb-2'><Link href="/#news-letter" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>News letter</Link></li>
                            <li className='mb-2'><Link href="https://wa.me/+201103170327" className='text-gray-200 hover:text-amber-300 hover:underline hover:font-bold transition-all duration-300'>Free consultation</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </section >
    )
}
