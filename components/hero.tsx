'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
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
    
    // Overlay text fades in as image is fully revealed
    const overlayTextOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1])
    
    // Diagonal clip path - starts with more white space, original angle
    // Bottom left point moves from 40% to -50% (off screen left)
    // Top point moves from 65% to -25% (off screen left)
    // This keeps the original diagonal angle while sliding left
    const clipBottomLeft = useTransform(scrollYProgress, [0, 0.5], [40, -50])
    const clipTopLeft = useTransform(scrollYProgress, [0, 0.5], [65, -25])
    
    return (
        <div ref={containerRef} className="relative h-[200vh]">
            {/* Sticky hero section - accounts for navbar height */}
            <section className="h-[calc(100vh-64px)] bg-liberty-base sticky top-16 overflow-hidden flex flex-col">
                <div className="flex-1 flex relative">
                    {/* Left Content - Text */}
                    <motion.div 
                        className="w-full lg:w-1/2 flex items-center relative z-10 bg-liberty-base lg:bg-transparent"
                        style={{ 
                            opacity: textOpacity,
                            x: textX
                        }}
                    >
                        <div className="w-full pr-12 sm:pr-16 lg:pr-24 pl-12 sm:pl-16 lg:pl-32 pt-16 pb-24">
                            {/* Introducing Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={"max-w-lg"}
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
                                Property Management<br/>
                                <span className="text-liberty-accent">For Leaseholders</span>
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
                                className="flex flex-col gap-4"
                            >
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="xl" asChild className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark">
                                        <Link href="/services" className="flex items-center gap-3 group">
                                            Our Services
                                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </Button>
                                    <Button size="xl" variant="outline" asChild className="border-liberty-primary text-liberty-primary hover:bg-liberty-primary hover:text-liberty-text-on-dark">
                                        <Link href="/contact">
                                            Get in Touch
                                        </Link>
                                    </Button>
                                </div>
                                <p className="text-sm text-liberty-background/60">
                                    Not yet in control of your building?{' '}
                                    <a 
                                        href="https://www.libertybellenfranchise.co.uk/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-liberty-primary hover:text-liberty-accent underline underline-offset-2 inline-flex items-center gap-1"
                                    >
                                        Learn about Right to Manage
                                        <ExternalLink size={12} />
                                    </a>
                                </p>
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
                                
                                {/* Dark overlay that fades in for text readability */}
                                <motion.div 
                                    className="absolute inset-0 bg-black/60"
                                    style={{ opacity: overlayTextOpacity }}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                    
                    {/* Mobile: Solid white background, no image behind text */}
                    <div className="lg:hidden absolute inset-0 -z-10 bg-liberty-base" />
                    
                    {/* Mobile: Image section that appears on scroll */}
                    <motion.div 
                        className="lg:hidden absolute inset-0 -z-5"
                        style={{ opacity: useTransform(scrollYProgress, [0.2, 0.4], [0, 1]) }}
                    >
                        <Image
                            src="/images/london.png"
                            alt="London cityscape - Liberty Bell Property Management"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Dark overlay for text readability on mobile */}
                        <motion.div 
                            className="absolute inset-0 bg-black/50"
                            style={{ opacity: useTransform(scrollYProgress, [0.3, 0.45], [0, 1]) }}
                        />
                    </motion.div>
                    
                    {/* Centered overlay text - fades in and slides up as image is fully revealed */}
                    <motion.div 
                        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                        style={{ 
                            opacity: overlayTextOpacity,
                            y: useTransform(scrollYProgress, [0.25, 0.4], [100, 0])
                        }}
                    >
                        <div className="text-center px-8 max-w-4xl pointer-events-auto">
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-white mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                                We&apos;ve Been Where You Are
                            </h2>
                            <p className="font-family-reckless text-xl lg:text-2xl xl:text-3xl !text-white/95 leading-relaxed max-w-3xl mx-auto mb-8" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                                After seven years of frustration with unscrupulous managing agents, we knew leaseholders deserved better. That&apos;s why we built Liberty Bell, a property management company that puts you in control.
                            </p>
                            <Button size="xl" asChild className="bg-liberty-accent hover:bg-liberty-accent/90 text-liberty-text-on-accent">
                                <Link href="/about" className="flex items-center gap-3 group">
                                    Our Story
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}
