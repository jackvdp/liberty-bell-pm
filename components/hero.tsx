'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })
    
    // Text fades out and moves left as user scrolls - starts immediately
    const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0])
    const textX = useTransform(scrollYProgress, [0, 0.3], [0, -200])
    
    // Diagonal clip path - starts further right, then slides left
    // Bottom left point moves from 50% to -50% (off screen left)
    // Top point moves from 70% to -30% (off screen left)
    // This keeps the diagonal angle while sliding the whole thing left
    const clipBottomLeft = useTransform(scrollYProgress, [0, 0.5], [50, -50])
    const clipTopLeft = useTransform(scrollYProgress, [0, 0.5], [70, -30])
    
    return (
        <div ref={containerRef} className="relative h-[200vh]">
            {/* Sticky hero section - accounts for navbar height */}
            <section className="h-[calc(100vh-64px)] bg-liberty-base sticky top-16 overflow-hidden flex flex-col">
                <div className="flex-1 flex relative">
                    {/* Left Content - Text */}
                    <motion.div 
                        className="w-full lg:w-1/2 flex items-center relative z-10"
                        style={{ 
                            opacity: textOpacity,
                            x: textX
                        }}
                    >
                        <div className="w-full max-w-xl ml-auto pr-4 pl-8 sm:pl-12 lg:pl-16 py-16">
                            {/* Introducing Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
                                    <strong>LIBERTY BELL PROPERTY MANAGEMENT</strong>
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                                className="text-4xl lg:text-5xl xl:text-6xl font-reckless font-bold text-liberty-background mb-6 leading-tight"
                            >
                                Putting Leaseholders{' '}
                                <span className="text-liberty-accent">First</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-lg lg:text-xl text-liberty-background/70 mb-8 leading-relaxed"
                            >
                                Transparent service charges. Fair block management. Real value for money. We manage properties where leaseholders are in control.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button size="xl" asChild className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark">
                                    <Link href="/contact" className="flex items-center gap-3 group">
                                        Get in Touch
                                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <Button size="xl" variant="outline" asChild className="border-liberty-primary text-liberty-primary hover:bg-liberty-primary hover:text-liberty-text-on-dark">
                                    <Link href="/services">
                                        Our Services
                                    </Link>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Content - Image with animated diagonal clip path */}
                    <div className="hidden lg:block absolute inset-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="absolute inset-0"
                        >
                            <motion.div 
                                className="w-full h-full relative overflow-hidden"
                                style={{
                                    clipPath: useTransform(
                                        [clipBottomLeft, clipTopLeft],
                                        ([bottom, top]) => `polygon(${bottom}% 100%, ${top}% 0%, 100% 0%, 100% 100%)`
                                    )
                                }}
                            >
                                <Image
                                    src="/images/london.png"
                                    alt="London cityscape - Liberty Bell Property Management"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                
                                {/* Gradient overlay that fades out as image expands */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-liberty-base/20"
                                    style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]) }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    
                    {/* Mobile: Static image without scroll effects */}
                    <div className="lg:hidden absolute inset-0 -z-10">
                        <Image
                            src="/images/london.png"
                            alt="London cityscape - Liberty Bell Property Management"
                            fill
                            className="object-cover opacity-20"
                            priority
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
