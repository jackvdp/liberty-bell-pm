'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const testimonials = [
    {
        quote: "After years of dealing with managing agents who didn't care, Liberty Bell was a breath of fresh air. They actually listen to us and our service charges have become completely transparent.",
        author: "Sarah M.",
        role: "RTM Company Director",
        building: "Riverside Court, London",
        rating: 5
    },
    {
        quote: "The transition was seamless. Within weeks, we had clear budgets, responsive management, and for the first time, we felt like we were in control of our own building.",
        author: "David T.",
        role: "RMC Chairman",
        building: "The Granary, Manchester",
        rating: 5
    },
    {
        quote: "What impressed me most was their honesty. They identified issues our previous agent had ignored for years and actually fixed them—without inflating the costs.",
        author: "Priya K.",
        role: "Leaseholder",
        building: "Victoria House, Birmingham",
        rating: 5
    }
]

export default function Testimonials() {
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
                    {/* Small photo of happy owners */}
                    <div className="flex justify-center mb-6">
                        <div className="relative w-24 h-24 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-liberty-primary/30">
                            <Image
                                src="/images/owners.png"
                                alt="Happy homeowners"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    
                    <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
                        <strong>TESTIMONIALS</strong>
                    </span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-reckless font-bold !text-liberty-background mb-6">
                        What Our{' '}
                        <span className="!text-liberty-accent">Clients Say</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-liberty-background/70 max-w-3xl mx-auto leading-relaxed">
                        Don&apos;t just take our word for it. Here&apos;s what leaseholders and directors have to say about working with Liberty Bell.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <div className="h-full p-8 rounded-2xl bg-liberty-secondary/10 border border-liberty-secondary/30 flex flex-col hover:border-liberty-accent/30 hover:bg-liberty-accent/5 hover:-translate-y-1 transition-all duration-300">
                                {/* Quote icon */}
                                <Quote className="w-10 h-10 text-liberty-primary/50 mb-4" />
                                
                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-liberty-accent text-liberty-accent" />
                                    ))}
                                </div>
                                
                                {/* Quote */}
                                <blockquote className="text-liberty-background/80 leading-relaxed mb-6 flex-grow">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>
                                
                                {/* Author */}
                                <div className="border-t border-liberty-secondary/30 pt-4">
                                    <p className="font-semibold !text-liberty-background">{testimonial.author}</p>
                                    <p className="text-sm text-liberty-background/60">{testimonial.role}</p>
                                    <p className="text-sm text-liberty-primary">{testimonial.building}</p>
                                </div>
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
                    <Button size="xl" asChild className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark">
                        <Link href="/about" className="flex items-center gap-3 group">
                            Learn More About Us
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
