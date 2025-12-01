'use client'

import { motion } from 'framer-motion'
import { Calculator, Shield, Users, Heart, FileText, Building, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
    {
        id: 'service-charge',
        icon: Calculator,
        title: "Service Charge & Budgeting",
        description: "Transparent budgets delivered ahead of the financial year, signed off by leaseholders. No hidden commissions—just real value for money."
    },
    {
        id: 'building-management',
        icon: Building,
        title: "Building Management",
        description: "Management tailored to your building's needs. When issues are resolved, we reduce the management—and the fee."
    },
    {
        id: 'building-insurance',
        icon: Shield,
        title: "Building Insurance",
        description: "Insurance placement included in our fee with no commissions. We manage claims carefully to keep premiums low."
    },
    {
        id: 'onsite-staff',
        icon: Users,
        title: "Onsite Staff Management",
        description: "Performance-linked pay ensures staff deliver the best service. Leaseholder feedback drives accountability."
    },
    {
        id: 'community-management',
        icon: Heart,
        title: "Community Management",
        description: "Buildings are homes, not just investments. We help residents connect and build real communities."
    },
    {
        id: 'rmc-rtm',
        icon: FileText,
        title: "RMC/RTM Company Secretariat",
        description: "We handle all the company admin so directors only need to make decisions – not drown in paperwork."
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
                        <Building size={16} />
                        <strong>OUR SERVICES</strong>
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-background mb-6">
                        Complete Building{' '}
                        <span className="!text-liberty-accent">Management</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-liberty-background/70 max-w-3xl mx-auto leading-relaxed">
                        We only manage properties where leaseholders are in control. Click on any service to learn more about how we can help.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <Link 
                                href={`/services?service=${service.id}`}
                                className="group block h-full"
                            >
                                <div className="h-full p-8 rounded-2xl bg-liberty-secondary/10 border border-liberty-secondary/30 hover:border-liberty-accent/50 transition-all duration-300">
                                    <div className="w-14 h-14 bg-liberty-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-liberty-accent/20 group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-7 h-7 text-liberty-primary" />
                                    </div>
                                    <h3 className="text-xl font-reckless font-semibold !text-liberty-background mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-liberty-background/70 leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-liberty-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                        Learn more
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </Link>
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
