'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Calculator,
  Building,
  Shield,
  Users,
  Heart,
  FileText,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from '@/components/ui/animated-modal'
import Link from 'next/link'

interface Service {
  id: string
  title: string
  shortDescription: string
  icon: React.ElementType
  fullDescription: string
  keyPoints: string[]
}

const services: Service[] = [
  {
    id: 'service-charge',
    title: 'Service Charge & Budgeting',
    shortDescription: 'Transparent budgeting with 20 years of expertise',
    icon: Calculator,
    fullDescription:
      'Runaway service charges are the top causes of stress for leaseholders in today\'s market. Driven by poor budgeting practices, lack of transparency, and a focus on commissions rather than driving value for the leaseholder, service charges are becoming untenably high.\n\nAt Liberty Bell we bring 20 years of budgeting expertise from other fields and apply it to block management. Budgets prepared and delivered ahead of the financial year, signed off by leaseholders, with a clear explanation of where the costs come from.\n\nBut more than that, we at Liberty Bell also bring many years of experience of procuring services and driving value for money in the public sector, where every penny counts. We source services according to leaseholder priorities such as local tradespeople or value for money.',
    keyPoints: [
      'Budgets delivered ahead of the financial year',
      'Full transparency on all costs',
      'Leaseholder sign-off on budgets',
      'Value-driven procurement',
      'No hidden commissions',
      'Service charges kept as low as possible',
    ],
  },
  {
    id: 'building-management',
    title: 'Building Management',
    shortDescription: 'Complete building solutions tailored to your needs',
    icon: Building,
    fullDescription:
      'Managing residential blocks is not as complex as the current crop of managing agents would have leaseholders believe. This myth is perpetuated to inflate fees and intimidate leaseholders from taking control themselves. However, it is time consuming.\n\nThat\'s why at Liberty Bell we focus on ensuring leaseholders get the time they pay for from our building managers. We assess every building to understand its particular needs, if it has lots of issues, we assign appropriate management. When those issues are dealt with, we reduce the management AND the fee.\n\nAt its most basic, building management consists of ensuring the building meets the latest standards and regulations, is safe and secure and has in place an appropriate set of service contracts covering things like gardening, lift maintenance and whatever else is needed.',
    keyPoints: [
      'Management tailored to building needs',
      'Fees that reduce as issues are resolved',
      'Compliance with all regulations',
      'Comprehensive service contracts',
      'Focus on supplier accountability',
      'Full building assessments',
    ],
  },
  {
    id: 'building-insurance',
    title: 'Building Insurance',
    shortDescription: 'No hidden extras, insurance included in the fee',
    icon: Shield,
    fullDescription:
      'In almost every lease there is a clause that assigns the costs of insuring the building to the leaseholders. This insurance covers the fabric of the building and takes care of things if things go wrong. It means that leaseholders are not left unnecessarily out of pocket when disaster strikes.\n\nIt is standard practice in the leasehold sector for managing agents to take commissions for placing insurance. This is often on top of fees paid to brokers for finding the insurance. As leaseholders ourselves this bothers us. At Liberty Bell placing insurance is part of management and included in the fee with no hidden extras.\n\nWe also know from bitter experience that claims need careful management. Not all things that go wrong with buildings, especially newly built, should be claimed on insurance. At Liberty Bell we constantly review the claims being made to identify patterns and in some cases systemic issues with the building.',
    keyPoints: [
      'No commissions on insurance placement',
      'Insurance included in management fee',
      'Careful claims management',
      'Pattern identification for systemic issues',
      'Premium optimisation',
      'Peace of mind for leaseholders',
    ],
  },
  {
    id: 'onsite-staff',
    title: 'Onsite Staff Management',
    shortDescription: 'Performance-driven staff delivering best service',
    icon: Users,
    fullDescription:
      'Not all buildings require full-time onsite staff, but often, large modern blocks do benefit from having staff onsite to aid leaseholders. These roles will be specific to the needs of the leaseholders but could include concierges or caretakers.\n\nThese roles should be costed into the service charge budget and their duties be clear to all. Management of these onsite staff is the responsibility of the building manager and there needs to regular monitoring of performance like in any other workplace to ensure staff are happy as well as leaseholders.\n\nAt Liberty Bell we ensure that onsite staff are driven to deliver the best service possible to leaseholders by linking pay to performance. Leaseholders provide feedback on performance to complement that of the building manager with exemplary service rewarded and unsatisfactory performance managed.',
    keyPoints: [
      'Performance-linked pay',
      'Leaseholder feedback integration',
      'Clear duty definitions',
      'Regular performance monitoring',
      'Staff wellbeing considered',
      'Best value for money',
    ],
  },
  {
    id: 'community-management',
    title: 'Community Management',
    shortDescription: 'Building communities, not just managing buildings',
    icon: Heart,
    fullDescription:
      'As leaseholders ourselves we know that blocks are more than just buildings, they are homes and communities. Too many freeholders and managing agents neglect this. Even worse, some actively keep leaseholders and residents from forming community groups for fear that they will take control.\n\nCommunities can\'t form if there is no way for residents and leaseholders to interact. At Liberty Bell we actively support and encourage leaseholders and residents to come together and we provide the modern means to do it via established community platforms or via our own bespoke online forums.\n\nAt the heart of any community is mutual respect and a live and let live attitude. But issues do arise from time to time. Our building managers are also community leaders and many of the common issues between leaseholders and residents can be resolved with strong community.',
    keyPoints: [
      'Community platforms provided',
      'Residents encouraged to connect',
      'Building managers as community leaders',
      'Issue resolution through community',
      'Lease covenant enforcement',
      'Happy building environments',
    ],
  },
  {
    id: 'rmc-rtm',
    title: 'RMC/RTM Company Secretariat',
    shortDescription: 'All the power without the tedious admin',
    icon: FileText,
    fullDescription:
      'As you will have gathered by now Liberty Bell prides itself on putting leaseholders in control of their assets and homes. This is achieved through either a Resident Management Company (RMC) or a Right to Manage Company (RTM).\n\nCommunities can\'t form if there is no way for residents and leaseholders to interact. At Liberty Bell we actively support and encourage leaseholders and residents to come together and we provide the modern means to do it via established community platforms or via our own bespoke online forums.\n\nWe understand that leaseholders do not always have the time to invest in RMCs and RTMs so we invest in them for you. They are a critical part of the service we offer so we work hard to ensure that they are operating at their best by doing all of the heavy lifting so Directors and leaseholders only have to make decisions.',
    keyPoints: [
      'Full company administration',
      'Heavy lifting done for you',
      'Directors only make decisions',
      'RMC/RTM support included',
      'No tedious paperwork',
      'Leaseholder control maintained',
    ],
  },
]

function ServiceCard({ service }: { service: Service }) {
  const IconComponent = service.icon

  return (
    <Modal>
      <ModalTrigger className="w-full h-full p-0 bg-transparent">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-liberty-base border border-liberty-secondary/30 rounded-xl p-6 h-full flex flex-col items-center text-center cursor-pointer group hover:border-liberty-primary/50 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-16 h-16 bg-liberty-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-liberty-primary/20 transition-colors duration-300">
            <IconComponent className="w-8 h-8 text-liberty-primary" />
          </div>
          <h3 className="font-reckless text-xl font-semibold text-liberty-background mb-2">
            {service.title}
          </h3>
          <p className="text-liberty-background/70 text-sm mb-4 flex-1">
            {service.shortDescription}
          </p>
          <span className="inline-flex items-center gap-2 text-liberty-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
            Learn more
            <ArrowRight className="w-4 h-4" />
          </span>
        </motion.div>
      </ModalTrigger>
      <ModalBody className="max-w-3xl">
        <ModalContent className="overflow-y-auto max-h-[70vh]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 bg-liberty-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-7 h-7 text-liberty-primary" />
            </div>
            <h2 className="font-reckless text-2xl lg:text-3xl font-semibold text-liberty-background">
              {service.title}
            </h2>
          </div>

          <div className="space-y-4 text-liberty-background/80 leading-relaxed mb-8">
            {service.fullDescription.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-liberty-secondary/10 rounded-xl p-6">
            <h3 className="font-reckless text-lg font-semibold text-liberty-background mb-4">
              Key Benefits
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-liberty-accent flex-shrink-0 mt-0.5" />
                  <span className="text-liberty-background/80 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </ModalContent>
        <ModalFooter className="gap-3">
          <Button
            asChild
            className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-liberty-base">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-liberty-accent/10 text-liberty-accent px-4 py-2 rounded-full text-sm font-medium border border-liberty-accent/20 mb-6">
              <Building className="w-4 h-4" />
              The Complete Building Management Solution
            </span>
            <h1 className="font-reckless text-4xl lg:text-5xl xl:text-6xl font-bold text-liberty-background mb-6">
              Property Management{' '}
              <span className="text-liberty-accent">Services</span>
            </h1>
            <p className="text-lg lg:text-xl text-liberty-background/70 leading-relaxed">
              We are different to other managing agents. We only manage properties where
              leaseholders are in control. We believe that happy leaseholders equal a
              happy freeholder.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-liberty-surface-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-reckless text-3xl lg:text-4xl font-semibold text-liberty-background mb-4">
              Ready to Take Control?
            </h2>
            <p className="text-liberty-background/70 text-lg mb-8 max-w-2xl mx-auto">
              Are you tired of dealing with unscrupulous managing agents or being bullied
              by your freeholder? We know how you feel. Contact us now for a free
              consultation call and take your first step towards liberation with Liberty
              Bell.
            </p>
            <Button
              asChild
              size="xl"
              className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
