'use client'

import { motion } from 'framer-motion'
import { Phone, ClipboardCheck, Handshake, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
    {
        number: "01",
        icon: Phone,
        title: "Get in Touch",
        description: "Tell us about your building and your current situation. We'll listen to your challenges and understand what you need from a managing agent."
    },
    {
        number: "02",
        icon: ClipboardCheck,
        title: "We Assess Your Building",
        description: "We'll review your building's needs, current contracts, and service charge structure. Then we'll provide a clear, no-obligation proposal tailored to you."
    },
    {
        number: "03",
        icon: Handshake,
        title: "Take Back Control",
        description: "Once you're happy, we handle the transition seamlessly. You'll have transparent management, fair charges, and a team that actually works for you."
    }
]

export default function HowItWorks() {
    return (
        <section className="bg-liberty-surface-dark py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-16 lg:mb-20"
                >
                    <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
                        <strong>HOW IT WORKS</strong>
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-text-on-dark mb-6">
                        Three Simple Steps to{' '}
                        <span className="!text-liberty-accent">Better Management</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-liberty-text-on-dark/70 max-w-3xl mx-auto leading-relaxed">
                        Switching managing agents doesn&apos;t have to be complicated. We make it straightforward.
                    </p>
                </motion.div>

                {/* Steps */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                            className="relative"
                        >
                            {/* Connector line (hidden on mobile and after last item) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-16 left-[calc(50%+4rem)] w-[calc(100%-4rem)] h-[2px] bg-liberty-accent/20" />
                            )}
                            
                            <div className="text-center">
                                {/* Step number */}
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-liberty-accent/10 border-2 border-liberty-accent/30 mb-6">
                                    <span className="text-2xl font-bold !text-liberty-accent">{step.number}</span>
                                </div>
                                
                                {/* Icon */}
                                <div className="w-14 h-14 mx-auto bg-liberty-primary/20 rounded-xl flex items-center justify-center mb-6">
                                    <step.icon className="w-7 h-7 !text-liberty-accent" />
                                </div>
                                
                                {/* Content */}
                                <h3 className="text-xl lg:text-2xl font-reckless font-semibold !text-liberty-text-on-dark mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-liberty-text-on-dark/70 leading-relaxed max-w-sm mx-auto">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="text-center mt-16 lg:mt-20"
                >
                    <Button size="xl" asChild className="bg-liberty-accent hover:bg-liberty-accent/90 text-liberty-text-on-accent">
                        <Link href="/services" className="flex items-center gap-3 group">
                            Explore Our Services
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
