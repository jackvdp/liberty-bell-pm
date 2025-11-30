'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-liberty-base flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <motion.span
                className="text-[10rem] sm:text-[14rem] font-reckless font-bold text-liberty-secondary/30 select-none leading-none"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                404
              </motion.span>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-liberty-primary/10 rounded-full flex items-center justify-center">
                  <Building className="w-10 h-10 sm:w-12 sm:h-12 text-liberty-primary" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl font-reckless font-bold text-liberty-background mb-4">
              Page Not <span className="text-liberty-accent">Found</span>
            </h1>
            <p className="text-lg text-liberty-background/70 mb-8 max-w-md mx-auto">
              Looks like this page has gone missing. Don't worry – even the best-managed buildings occasionally have a door that leads nowhere.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark"
            >
              <Link href="/" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-liberty-primary text-liberty-primary hover:bg-liberty-primary hover:text-liberty-text-on-dark"
            >
              <Link href="/services" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                View Services
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-liberty-secondary/30"
          >
            <p className="text-sm text-liberty-background/50 mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/about" 
                className="text-liberty-primary hover:text-liberty-accent transition-colors"
              >
                About Us
              </Link>
              <span className="text-liberty-secondary">•</span>
              <Link 
                href="/services" 
                className="text-liberty-primary hover:text-liberty-accent transition-colors"
              >
                Our Services
              </Link>
              <span className="text-liberty-secondary">•</span>
              <Link 
                href="/contact" 
                className="text-liberty-primary hover:text-liberty-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
