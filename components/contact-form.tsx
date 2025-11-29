'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import ContactFormFields from '@/components/ui/contact-form-fields'

export default function ContactForm() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-liberty-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-reckless font-bold !text-liberty-background mb-4">
            {"Still Got"}{' '}
            <span className="text-liberty-accent">
              {"Questions?"}
            </span>
          </h2>
          <p className="text-xl !text-liberty-background/60 max-w-2xl mx-auto">
            {"Whether you've got more questions or are ready to take the first step to control your building, talk to our expert team."}
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Contact Form - Full Width Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="max-w-4xl mx-auto">
              <ContactFormFields
                  submitButtonText={"Get in touch"}
                  successMessage={"Thank you! Our expert team will be in touch soon."}
                  privacyText={"We respect your privacy and will never share your information."}
                  namePlaceholder={"Your name *"}
                  emailPlaceholder={"Your email *"}
                  phonePlaceholder={"Your phone"}
                  addressPlaceholder={"Your address"}
                  messagePlaceholder={"Your message"}
                  buttonVariant="accent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
