import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'

export default function Footer() {
  const services = [
    { title: "Service Charge & Budgeting", href: "/services?service=service-charge" },
    { title: "Building Management", href: "/services?service=building-management" },
    { title: "Building Insurance", href: "/services?service=building-insurance" },
    { title: "Onsite Staff Management", href: "/services?service=onsite-staff" },
    { title: "Community Management", href: "/services?service=community-management" },
    { title: "RMC/RTM Company Secretariat", href: "/services?service=rmc-rtm" },
  ]

  const company = [
    { title: "About Us", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" },
  ]

  const legal = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms & Conditions", href: "/terms" },
  ]

  return (
      <footer className="bg-liberty-surface-dark text-liberty-text-on-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 sm:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <Image
                      src="/images/logo.avif"
                      alt="Liberty Bell Property Management"
                      width={320}
                      height={107}
                      className="h-24 w-auto"
                  />
                </div>
                <p className="text-liberty-secondary text-sm leading-relaxed mb-6">
                  A property management company working for leaseholders. We put leaseholders&apos; needs before profits, offering transparent and fair block management services.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-liberty-accent flex-shrink-0" />
                    <a
                        href="mailto:lbpm@libertybellpm.co.uk"
                        className="text-liberty-secondary hover:text-liberty-accent transition-colors text-sm"
                    >
                      lbpm@libertybellpm.co.uk
                    </a>
                  </div>
                </div>
              </div>

              {/* Empty div for spacing */}
              <div></div>

              {/* Services */}
              <div>
                <Link href="/services">
                  <h3 className="text-lg font-reckless font-bold !text-liberty-text-on-dark mb-4 hover:text-liberty-accent transition-colors">
                    Services
                  </h3>
                </Link>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                      <li key={index}>
                        <Link href={service.href} className="text-liberty-secondary hover:text-liberty-accent transition-colors text-sm">
                          {service.title}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-lg font-reckless font-bold !text-liberty-text-on-dark mb-4">
                  Company
                </h3>
                <ul className="space-y-3">
                  {company.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href} className="text-liberty-secondary hover:text-liberty-accent transition-colors text-sm">
                          {item.title}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-liberty-secondary/20 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-liberty-secondary">
                <span>© 2025 Liberty Bell Property Management</span>
                <span className="hidden sm:inline">•</span>
                <span>All rights reserved</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                {legal.map((item, index) => (
                    <Link key={index} href={item.href} className="text-liberty-secondary hover:text-liberty-accent transition-colors">
                      {item.title}
                    </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="border-t border-liberty-secondary/20 py-8">
            <div className="text-center">
              <p className="text-liberty-secondary text-sm italic max-w-4xl mx-auto">
                &ldquo;First and foremost, we are leaseholders just like you. We suffered seven years of despair at the hands of unscrupulous managing agents and found there was little help out there aimed at leaseholders. It felt like the whole leasehold system was stacked against us despite it being us that held most of the value and paid all of the costs. We knew we could offer a better service at a much better price. That was when Liberty Bell Property Management was born.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}
