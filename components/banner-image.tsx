'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BannerImage() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    
    // Parallax effect on the image
    const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
    
    return (
        <section 
            ref={containerRef}
            className="relative h-[50vh] lg:h-[60vh] overflow-hidden"
        >
            {/* Parallax Image */}
            <motion.div 
                className="absolute inset-0 scale-110"
                style={{ y: imageY }}
            >
                <Image
                    src="/images/how-2.png"
                    alt="London buildings - Liberty Bell Property Management"
                    fill
                    className="object-cover"
                />
            </motion.div>
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center px-6 max-w-4xl"
                >
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-white mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                        Tired of Poor Management?
                    </h2>
                    <p className="text-lg lg:text-xl !text-white/90 mb-8 max-w-2xl mx-auto" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                        Join the growing number of leaseholders who&apos;ve switched to transparent, fair property management.
                    </p>
                    <Button size="xl" asChild className="bg-liberty-accent hover:bg-liberty-accent/90 text-liberty-text-on-accent">
                        <Link href="/contact" className="flex items-center gap-3 group">
                            Get Your Free Consultation
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
