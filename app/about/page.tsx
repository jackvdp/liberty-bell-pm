'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const values = [
    {
        icon: Shield,
        title: "Transparency",
        description: "No hidden fees, no surprise charges. Every penny is accounted for and explained."
    },
    {
        icon: Users,
        title: "Leaseholder First",
        description: "We only work where leaseholders have control. Your building, your decisions."
    },
    {
        icon: Heart,
        title: "Integrity",
        description: "We do what's right, not what's profitable. No insurance commissions, no kickbacks."
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-liberty-base">
            <Navbar />
            
            {/* Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
                                <strong>ABOUT US</strong>
                            </span>
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-reckless font-bold !text-liberty-background mb-6 leading-tight">
                                Professional Property Management,{' '}
                                <span className="!text-liberty-accent">Personal Approach</span>
                            </h1>
                            <p className="text-lg lg:text-xl text-liberty-background/70 leading-relaxed">
                                Liberty Bell Property Management provides comprehensive block management services across England and Wales. We specialise in managing residential buildings for Right to Manage companies, Resident Management Companies, and forward-thinking freeholders who value leaseholder involvement.
                            </p>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/couple-happy.jpeg"
                                    alt="Happy homeowners working with Liberty Bell"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="py-16 lg:py-24 bg-liberty-surface-muted">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-3xl mx-auto text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-reckless font-bold !text-liberty-background mb-6">
                            What <span className="!text-liberty-accent">We Do</span>
                        </h2>
                        <p className="text-lg text-liberty-background/70 leading-relaxed">
                            Our experienced team delivers the full spectrum of block management services: service charge budgeting and collection, building maintenance coordination, insurance placement, health and safety compliance, contractor management, financial reporting, and RMC/RTM company secretarial duties. We combine professional expertise with modern technology to deliver responsive, efficient management that keeps leaseholders informed and in control.
                        </p>
                    </motion.div>

                    {/* Values */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-liberty-accent/10 rounded-xl flex items-center justify-center mb-4">
                                    <value.icon className="w-8 h-8 text-liberty-accent" />
                                </div>
                                <h3 className="text-xl font-reckless font-semibold !text-liberty-background mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-liberty-background/70">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-2 lg:order-1"
                        >
                            <span className="inline-flex items-center gap-2 bg-liberty-primary/10 text-liberty-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-primary/20">
                                <strong>OUR STORY</strong>
                            </span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-background mb-6 leading-tight">
                                A Property Management Company{' '}
                                <span className="!text-liberty-accent">Working for Leaseholders</span>
                            </h2>
                            <div className="space-y-4 text-lg text-liberty-background/70 leading-relaxed">
                                <p>
                                    First and foremost, we are leaseholders just like you.
                                </p>
                                <p>
                                    We had suffered seven years of despair at the hands of unscrupulous managing agents and found there was little help out there aimed at leaseholders. It felt like the whole leasehold system was stacked against us despite it being us that held most of the value and paid all of the costs.
                                </p>
                                <p>
                                    We knew that we could offer a better service at a much better price.
                                </p>
                                <p className="!text-liberty-background font-semibold">
                                    That was when Liberty Bell Property Management was born.
                                </p>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="order-1 lg:order-2"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/how-2.png"
                                    alt="London residential buildings"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Meet the Founder */}
            <section className="py-24 lg:py-32 bg-liberty-surface-dark">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto lg:mx-0">
                                <Image
                                    src="/images/james_lewis.avif"
                                    alt="James Lewis - Founder & Managing Director"
                                    width={400}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
                                <strong>MEET THE FOUNDER</strong>
                            </span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-text-on-dark mb-2 leading-tight">
                                James Lewis
                            </h2>
                            <p className="text-liberty-accent text-lg font-medium mb-6">
                                Founder & Managing Director
                            </p>
                            <div className="space-y-4 text-lg text-liberty-text-on-dark/80 leading-relaxed">
                                <p>
                                    James founded Liberty Bell after experiencing firsthand the frustrations of poor property management as a leaseholder. With a background in the civil service and a passion for fairness, he set out to create a managing agent that genuinely puts leaseholders first.
                                </p>
                                <p>
                                    His approach is simple: be transparent, be fair, and never forget that the people paying the service charges deserve to know exactly where their money goes.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Pledge */}
            <section className="py-24 lg:py-32">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
                            <CheckCircle size={16} />
                            <strong>OUR PLEDGE</strong>
                        </span>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-background mb-8 leading-tight">
                            If you aren&apos;t blown away by our work after one year of working with us,{' '}
                            <span className="!text-liberty-accent">we will personally find you another managing agent to replace us.</span>
                        </h2>
                        <p className="text-lg text-liberty-background/70 mb-10 max-w-2xl mx-auto">
                            That&apos;s how confident we are in what we do. We believe you&apos;ll see the difference from day one.
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

            <Footer />
        </div>
    )
}
