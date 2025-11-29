'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Clock, PoundSterling, Building, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const faqCategories = [
  {
    id: 'basics',
    title: 'Getting Started',
    icon: HelpCircle,
    color: 'text-liberty-primary',
    bgColor: 'bg-liberty-primary/10',
    borderColor: 'border-liberty-primary/30'
  },
  {
    id: 'costs',
    title: 'Costs & Fees',
    icon: PoundSterling,
    color: 'text-liberty-accent',
    bgColor: 'bg-liberty-accent/10',
    borderColor: 'border-liberty-accent/30'
  },
  {
    id: 'process',
    title: 'The Process',
    icon: Clock,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    id: 'services',
    title: 'Our Services',
    icon: Building,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  }
]

const faqs = [
  // Getting Started
  {
    category: 'basics',
    question: 'What makes Liberty Bell different from other managing agents?',
    answer: 'We\'re leaseholders ourselves who experienced years of poor management. We only manage buildings where leaseholders have control, we don\'t take insurance commissions, and we scale our management (and fees) based on your building\'s actual needs.',
    educationalNote: 'Many managing agents prioritise freeholder interests or take hidden commissions. We believe transparent, leaseholder-focused management leads to better outcomes for everyone.'
  },
  {
    category: 'basics',
    question: 'Do you only work with RTM or RMC buildings?',
    answer: 'We primarily work with buildings where leaseholders are in control through an RTM company or RMC. However, we can also work with freeholders who are committed to giving leaseholders a genuine say in how their building is managed.',
    educationalNote: 'Right to Manage (RTM) and Resident Management Companies (RMC) give leaseholders legal control over their building\'s management decisions.'
  },
  {
    category: 'basics',
    question: 'What areas do you cover?',
    answer: 'We currently manage properties across England and Wales. Our team can conduct site visits and attend AGMs in person, while handling day-to-day management remotely for efficiency.',
    educationalNote: 'Modern property management combines on-the-ground presence with digital tools for faster response times and lower overhead costs.'
  },
  // Costs & Fees
  {
    category: 'costs',
    question: 'How do your fees compare to other managing agents?',
    answer: 'Our fees are competitive and fully transparent. We charge a fixed management fee with no hidden extras—insurance placement, company secretarial work, and routine administration are all included. We don\'t take commissions on insurance or contractor work.',
    educationalNote: 'Hidden commissions on insurance can add 20-30% to your premiums. Always ask potential agents about their commission arrangements.'
  },
  {
    category: 'costs',
    question: 'Will our service charges go down if we switch to you?',
    answer: 'We can\'t guarantee lower service charges as they depend on your building\'s needs. However, we bring 20 years of procurement expertise to drive value for money, and our transparent approach means you\'ll know exactly where every penny goes.',
    educationalNote: 'Service charges should reflect actual costs. Unexplained increases or vague budget items are red flags that warrant investigation.'
  },
  {
    category: 'costs',
    question: 'Do you take commissions on building insurance?',
    answer: 'No, never. We believe placing insurance is a core part of management and include it in our fee. Unlike many agents who take commissions on top of broker fees, we work to get you the best cover at the best price—full stop.',
    educationalNote: 'Leaseholders have the right to request details of any commissions their managing agent receives. This is protected under the Landlord and Tenant Act.'
  },
  // The Process
  {
    category: 'process',
    question: 'How long does it take to switch managing agents?',
    answer: 'Typically 4-8 weeks depending on your current contract terms and how quickly we can obtain records from your existing agent. We handle the entire transition process to make it as smooth as possible for directors and leaseholders.',
    educationalNote: 'Most management contracts require 1-3 months notice. Check your agreement for termination clauses before starting the process.'
  },
  {
    category: 'process',
    question: 'What happens during the handover from our current agent?',
    answer: 'We request all records, contracts, and financial information from your current agent. We review everything, identify any issues, set up new systems, and introduce ourselves to residents. You\'ll have a dedicated building manager from day one.',
    educationalNote: 'A thorough handover is crucial. Missing records or incomplete information can cause problems down the line, which is why we\'re meticulous about this process.'
  },
  {
    category: 'process',
    question: 'Can you help us set up an RTM company?',
    answer: 'Yes, we can guide you through the Right to Manage process or connect you with our sister company, Liberty Bell Ethical Enfranchisement, who specialise in helping leaseholders take control of their buildings.',
    educationalNote: 'RTM is a legal right for qualifying leaseholders. You don\'t need to prove fault with current management—it\'s simply about taking control.'
  },
  // Our Services
  {
    category: 'services',
    question: 'What\'s included in your management service?',
    answer: 'Our comprehensive service includes: service charge budgeting and collection, building maintenance coordination, insurance placement, health & safety compliance, contractor management, financial reporting, AGM organisation, and RMC/RTM company secretarial duties.',
    educationalNote: 'A good managing agent should handle all routine matters, only involving directors for significant decisions or approvals above agreed thresholds.'
  },
  {
    category: 'services',
    question: 'How do you handle maintenance and repairs?',
    answer: 'We maintain relationships with vetted local contractors and obtain competitive quotes for works. For routine maintenance, we act within agreed budgets. For major works, we present options to directors with clear recommendations and cost breakdowns.',
    educationalNote: 'Section 20 consultation is legally required for major works over £250 per leaseholder. We handle this process to ensure compliance.'
  },
  {
    category: 'services',
    question: 'Do you provide 24/7 emergency support?',
    answer: 'Yes, we provide round-the-clock emergency support for genuine emergencies like flooding, fire damage, or security breaches. Residents receive emergency contact details, and our on-call team can dispatch contractors when needed.',
    educationalNote: 'True emergencies are rare, but having proper emergency procedures protects both residents and the building from further damage.'
  }
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('basics')
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  const categoryFaqs = faqs.filter(faq => faq.category === activeCategory)
  const activeColor = faqCategories.find(cat => cat.id === activeCategory)

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-liberty-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium mb-6 border border-liberty-accent/20">
            <strong>FAQ</strong>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-reckless font-bold !text-liberty-background mb-4">
            Frequently Asked <span className="!text-liberty-accent">Questions</span>
          </h2>
          <p className="text-xl text-liberty-background/70 max-w-3xl mx-auto">
            Everything you need to know about working with Liberty Bell Property Management.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          {faqCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id)
                setExpandedQuestion(null)
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.bgColor} ${category.borderColor} ${category.color} border-2`
                  : 'bg-liberty-secondary/20 border-liberty-secondary/30 border-2 text-liberty-background/70 hover:bg-liberty-secondary/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {categoryFaqs.map((faq, index) => (
                <motion.div
                  key={`${activeCategory}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  viewport={{ 
                    once: true,
                    margin: "-50px"
                  }}
                >
                  <Card className="border-liberty-secondary/30 hover:border-liberty-accent/50 transition-all duration-300 bg-liberty-base">
                    <CardContent className="p-0">
                      <button
                        onClick={() => setExpandedQuestion(expandedQuestion === index ? null : index)}
                        className="w-full text-left p-6 flex items-center justify-between"
                      >
                        <h3 className="font-reckless font-bold !text-liberty-background text-lg pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown 
                          className={`w-6 h-6 text-liberty-accent transition-transform duration-300 flex-shrink-0 ${
                            expandedQuestion === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      <AnimatePresence>
                        {expandedQuestion === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6">
                              <div className="border-t border-liberty-secondary/20 pt-6">
                                <p className="text-liberty-background/80 leading-relaxed mb-4">
                                  {faq.answer}
                                </p>
                                
                                {/* Educational Note */}
                                <div className={`${activeColor?.bgColor} ${activeColor?.borderColor} border-l-4 pl-4 py-3 rounded-r-lg`}>
                                  <div className="flex items-start gap-2">
                                    <AlertCircle className={`w-5 h-5 ${activeColor?.color} flex-shrink-0 mt-0.5`} />
                                    <div>
                                      <h4 className={`font-medium ${activeColor?.color} text-sm mb-1`}>
                                        Did you know?
                                      </h4>
                                      <p className="text-liberty-background/70 text-sm">
                                        {faq.educationalNote}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
