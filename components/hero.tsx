'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="h-[calc(100vh-64px)] bg-liberty-base relative overflow-hidden flex flex-col">
            <div className="flex-1 flex">
                {/* Left Content - Text extending into diagonal white space */}
                <div className="w-full lg:w-1/2 flex items-center relative z-10">
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
                </div>

                {/* Right Content - Image (full width to edge, not constrained by container) */}
                <div className="hidden lg:block lg:w-2/3 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="absolute inset-0"
                    >
                        {/* Main image with parallax inside fixed diagonal mask */}
                        <div className="w-full h-full relative overflow-hidden"
                             style={{
                                 clipPath: 'polygon(0% 100%, 40% 0%, 100% 0%, 100% 100%)'
                             }}>
                            <motion.div
                                className="w-full h-full"
                            >
                                <Image
                                    src="/images/london.png"
                                    alt="London cityscape - Liberty Bell Property Management"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-liberty-base/5" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
