// components/MainNav.tsx
'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


// Define the menu links
const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#about', label: 'About' },
    { href: '/#services', label: 'Services' },
    { href: '/schedule', label: 'Schedule meeting' },
    { href: '/#contact', label: 'Contact us' },
];

export function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className='sticky top-0 z-[10] bg-primary'>
            <div className="container mx-auto px-3 md:px-6 flex h-18  items-center justify-between">
                {/* === Logo/Branding Section - Left Side === */}
                <Link href="/" className="text-white roboto-regular italic transition-colors">
                    <span className='font-bold text-xl text-amber-300'>T</span>echtrepreneur
                </Link>

                {/* === Desktop Navigation - Right Side === */}
                <nav className="hidden items-center gap-4 md:flex bg-foreground-light rounded-3xl overflow-hidden">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            // Added vertical padding here to make links bigger on hover
                            className="px-4 py-[10px]  text-white/80  roboto-regular rounded-3xl transition-all duration-500  hover:text-white/60 tracking-wider"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Link href="#get-started" className='text-sm px-5 py-[10px] poppins-medium rounded-3xl duration-500 roboto-regula transiton-all bg-white hover:text-black/80 hover:bg-white/80'>Get Started</Link>
                </div>

                {/* === Mobile Menu Button (Visible on Mobile) === */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-slate-700" // Hide button on desktop
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? <X className='!size-6' /> : <Menu className="!size-6" />}
                </Button>
            </div>

            {/* Mobile Menu Flyout with Smooth Transition  */}

            <div
                className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 border-t' : 'max-h-0'
                    }`}
            >
                <nav className="flex flex-col items-start !p-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={toggleMenu} // Close menu when a link is clicked
                            // Increased padding (py-3 px-4) for a bigger, touch-friendly mobile button
                            className="inline  py-3 px-2 text-slate-800 poppins-medium rounded transition-all duration-500 hover:bg-blue-400 hover:text-white tracking-wider"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}