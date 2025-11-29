'use client'

import { motion } from 'framer-motion'
import { Calculator, Shield, Users, Heart, FileText, Building, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const benefits = [
    {
        icon: Calculator,
        title: "Transparent Service Charges",
        description: "No hidden fees or surprise costs. We provide clear, detailed breakdowns of every charge so you know exactly where your money goes."
    },
    {
        icon: Shield,
        title: "No Insurance Commissions",
        description: "Unlike other agents, we don't take commissions on building insurance. Placing insurance is part of our management fee—no hidden extras."
    },
    {
        icon: Users,
        title: "Leaseholder Control",
        description: "We only manage properties where leaseholders have a say. Your building, your decisions. We're here to support, not dictate."
    },
    {
        icon: Building,
        title: "Right-Sized Management",
        description: "We assess every building's needs and assign appropriate management. When issues are resolved, we reduce the management—and the fee."
    },
    {
        icon: Heart,
        title: "Community Focused",
        description: "Buildings are more than bricks and mortar—they're homes. We actively support residents coming together and building real communities."
    },
    {
        icon: FileText,
        title: "RMC/RTM Expertise",
        description: "We handle all the company administration so directors and leaseholders only need to make decisions—not drown in paperwork."
    }
]

export default function Benefits() {
    return (
        <section className="bg-liberty-base py-24 lg:py-32">
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
                        <CheckCircle size={16} />
                        <strong>WHY CHOOSE US</strong>
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-background mb-6">
                        Property Management That&apos;s{' '}
                        <span className="!text-liberty-accent">Actually Different</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-liberty-background/70 max-w-3xl mx-auto leading-relaxed">
                        We&apos;re not just another managing agent. As leaseholders ourselves, we built Liberty Bell to deliver the service we always wished we had.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="h-full p-8 rounded-2xl bg-liberty-secondary/10 border border-liberty-secondary/30 hover:border-liberty-accent/30 hover:bg-liberty-accent/5 transition-all duration-300">
                                <div className="w-14 h-14 bg-liberty-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-liberty-accent/20 group-hover:scale-110 transition-all duration-300">
                                    <benefit.icon className="w-7 h-7 text-liberty-primary group-hover:text-liberty-accent transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-reckless font-semibold !text-liberty-background mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-liberty-background/70 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="text-center mt-16 lg:mt-20"
                >
                    <p className="text-xl lg:text-2xl font-reckless font-semibold !text-liberty-background mb-2">
                        Ready to experience the difference?
                    </p>
                    <p className="text-lg text-liberty-background/70 mb-8">
                        If you aren&apos;t blown away after one year,{' '}
                        <span className="!text-liberty-accent font-medium">we&apos;ll find you another agent ourselves.</span>
                    </p>
                    <Button size="xl" asChild className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark">
                        <Link href="/contact" className="flex items-center gap-3 group">
                            Get in Touch
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
