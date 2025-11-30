'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Scale, 
  Shield, 
  FileText, 
  Users, 
  AlertCircle,
  Clock,
  Mail,
  Building,
  Database,
  Lock,
  Briefcase,
  AlertTriangle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'
import { useState } from 'react'
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const sections = [
  {
    id: 'definitions',
    icon: FileText,
    title: '1. Definitions & Interpretation',
    content: `
      <p><strong>"We", "Us", "Our"</strong> means Liberty Bell Property Management Ltd, a company registered in England and Wales.</p>
      <p><strong>"You", "Your"</strong> means the individual, RMC, RTM company, or group of leaseholders entering into a contract with us.</p>
      <p><strong>"Services"</strong> means the property management services we provide including block management, service charge administration, building insurance, and related services.</p>
      <p><strong>"Property"</strong> means the building or development for which we provide management services.</p>
      <p><strong>"Business Day"</strong> means a day other than a Saturday, Sunday, or public holiday in England when banks in London are open for business.</p>
    `
  },
  {
    id: 'services',
    icon: Briefcase,
    title: '2. Our Services',
    content: `
      <p>We provide property management services which may include:</p>
      <ul>
        <li>Service charge budgeting and administration</li>
        <li>Building management and maintenance coordination</li>
        <li>Building insurance arrangement and claims management</li>
        <li>Onsite staff management where applicable</li>
        <li>Community management and resident communications</li>
        <li>RMC/RTM company secretarial services</li>
        <li>Contractor procurement and supervision</li>
        <li>Health and safety compliance</li>
      </ul>
      <p class="mt-4"><strong>Important:</strong> We only manage properties where leaseholders are in control, either through an RMC or RTM company. We believe happy leaseholders equal a happy freeholder.</p>
    `
  },
  {
    id: 'obligations',
    icon: Users,
    title: '3. Your Obligations',
    content: `
      <p>When using our services, you agree to:</p>
      <ul>
        <li>Provide accurate and timely information as requested</li>
        <li>Grant necessary access to the property and common areas</li>
        <li>Have proper authority to act on behalf of your RMC, RTM company, or leaseholder group</li>
        <li>Pay service charges and management fees when due</li>
        <li>Comply with the terms of your lease and any house rules</li>
        <li>Notify us promptly of any issues, defects, or emergencies at the property</li>
      </ul>
    `
  },
  {
    id: 'data',
    icon: Database,
    title: '4. Data Use & Commercial Application',
    content: `
      <p>We may collect, store, and process data provided during our services. We are entitled to anonymise and aggregate this data to:</p>
      <ul>
        <li>Develop and maintain benchmarking data for service charges</li>
        <li>Conduct market analysis and contractor performance reviews</li>
        <li>Create insights to improve our services</li>
        <li>Develop new offerings for leaseholders</li>
      </ul>
      <p class="mt-4"><strong>Privacy Guarantee:</strong> All data will be fully anonymised - no individual property, client, or personal data will be identifiable. We comply with UK GDPR and the Data Protection Act 2018.</p>
    `
  },
  {
    id: 'payment',
    icon: Scale,
    title: '5. Charges & Payment',
    content: `
      <p>Payment terms for our services:</p>
      <ul>
        <li>Management fees are agreed in advance and included in the service charge budget</li>
        <li>Service charges are payable in accordance with your lease terms</li>
        <li>We do not take commissions on insurance or other services - everything is included in our transparent fee</li>
        <li>We may charge interest on late payments under the Late Payment of Commercial Debts Act 1998</li>
        <li>All payments must be made without deduction or set-off except as required by law</li>
      </ul>
    `
  },
  {
    id: 'liability',
    icon: AlertCircle,
    title: '6. Limitation of Liability',
    content: `
      <p><strong>We do not exclude liability for:</strong></p>
      <ul>
        <li>Death or personal injury caused by negligence</li>
        <li>Fraud or fraudulent misrepresentation</li>
      </ul>
      <p class="mt-4"><strong>We are not liable for:</strong></p>
      <ul>
        <li>Loss of profits, business, goodwill, or anticipated savings</li>
        <li>Indirect, consequential or economic losses</li>
        <li>Acts or omissions of contractors engaged for the property</li>
        <li>Data loss or corruption</li>
        <li>Delays caused by factors outside our reasonable control</li>
      </ul>
      <p class="mt-4">Our total liability is limited to the management fees paid for the services in the relevant year.</p>
    `
  },
  {
    id: 'intellectual',
    icon: Building,
    title: '7. Intellectual Property',
    content: `
      <p>All intellectual property rights in our systems, processes, reports, and deliverables remain our property. We grant you a non-exclusive, non-transferable licence to use deliverables as necessary for the management of your property.</p>
      <p class="mt-4">Any feedback you provide may be used by us without obligation to you.</p>
    `
  },
  {
    id: 'confidentiality',
    icon: Lock,
    title: '8. Confidentiality',
    content: `
      <p>Both parties agree to keep confidential information secret and not disclose it except:</p>
      <ul>
        <li>For performing obligations under our agreement</li>
        <li>To representatives who need to know and are bound by confidentiality</li>
        <li>As required by law or regulatory authorities</li>
        <li>If information becomes public through no breach</li>
      </ul>
      <p class="mt-4">These obligations continue after our services end.</p>
    `
  },
  {
    id: 'management',
    icon: AlertTriangle,
    title: '9. Property Management Specifics',
    content: `
      <p>For property management services, please note:</p>
      <ul>
        <li>We act on behalf of the RMC or RTM company, not individual leaseholders</li>
        <li>Decisions affecting the property are made by the directors of the RMC/RTM company</li>
        <li>We will always seek approval for expenditure above agreed thresholds</li>
        <li>Emergency works may be authorised without prior approval where necessary to protect life or property</li>
        <li>We maintain professional indemnity insurance (details available on request)</li>
      </ul>
    `
  },
  {
    id: 'termination',
    icon: Clock,
    title: '10. Termination',
    content: `
      <p>Either party may terminate our agreement:</p>
      <ul>
        <li>By giving notice as specified in the management agreement (typically 3 months)</li>
        <li>If the other party materially breaches terms and fails to remedy within 14 days of notice</li>
        <li>If the other party becomes insolvent or enters administration</li>
      </ul>
      <p class="mt-4">On termination, we will provide a full handover of records, accounts, and contractor information to ensure smooth transition.</p>
      <p class="mt-4"><strong>Our Pledge:</strong> If you aren't blown away by our work after one year of working with us, we will personally find you another managing agent to replace us!</p>
    `
  },
  {
    id: 'general',
    icon: Shield,
    title: '11. General Terms',
    content: `
      <p><strong>Force Majeure:</strong> Neither party is liable for delays due to circumstances beyond reasonable control. If delays exceed 3 months, either party may terminate with 14 days' notice.</p>
      <p class="mt-4"><strong>Governing Law:</strong> These terms are governed by the laws of England and Wales.</p>
      <p class="mt-4"><strong>Dispute Resolution:</strong> Disputes should be resolved informally first, then through mediation before legal proceedings.</p>
      <p class="mt-4"><strong>Third Parties:</strong> We engage contractors and service providers on your behalf but remain responsible for their supervision and performance monitoring.</p>
      <p class="mt-4"><strong>Insurance:</strong> We hold professional indemnity insurance and public liability insurance (details available on request).</p>
    `
  }
]

export default function TermsAndConditions() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <div className="min-h-screen bg-liberty-base">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-liberty-secondary/20 to-liberty-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-liberty-primary/10 rounded-full flex items-center justify-center">
                <Scale className="w-8 h-8 text-liberty-primary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-reckless font-bold text-liberty-background mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-liberty-background/70 max-w-3xl mx-auto mb-4">
              Liberty Bell Property Management Ltd
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-liberty-accent/10 border border-liberty-accent/30 rounded-lg p-6 mb-12"
          >
            <h2 className="text-2xl font-semibold text-liberty-background mb-4">Welcome</h2>
            <p className="text-liberty-background/80 leading-relaxed mb-4">
              These terms and conditions apply when you engage Liberty Bell Property Management Ltd for 
              property management services. They form the basis of our agreement and prevail over any other terms.
            </p>
            <p className="text-liberty-background/80 leading-relaxed">
              By instructing us to proceed with our services, you confirm that you have read, understood, 
              and agreed to these terms. They constitute the entire agreement between us and supersede all 
              previous agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-12 bg-liberty-secondary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-liberty-base border border-liberty-secondary/30 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-liberty-secondary/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-liberty-primary/10 text-liberty-primary rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-liberty-background text-left">
                      {section.title}
                    </h3>
                  </div>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-liberty-background/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-liberty-background/60" />
                  )}
                </button>
                
                {expandedSection === section.id && (
                  <div className="px-6 pb-6">
                    <div 
                      className="ml-14 text-liberty-background/70 leading-relaxed text-sm prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-liberty-background/60 mb-6">
              Have questions about our terms? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-liberty-primary hover:text-liberty-primary/80 font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                Contact Our Team
              </Link>
              <span className="text-liberty-background/40">|</span>
              <Link 
                href="/privacy" 
                className="inline-flex items-center gap-2 text-liberty-primary hover:text-liberty-primary/80 font-medium transition-colors"
              >
                <Lock className="w-5 h-5" />
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
