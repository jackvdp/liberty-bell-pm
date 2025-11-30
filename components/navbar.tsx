'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ArrowRight, Building, Home, Menu, Calculator, Shield, Users, Heart, FileText, ExternalLink, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true
    return path !== '/' && pathname.startsWith(path);
  }

  const getLinkClasses = (path: string) => {
    const baseClasses = "px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md"
    if (isActive(path)) {
      return `${baseClasses} text-liberty-accent bg-liberty-accent/10`
    }
    return `${baseClasses} text-liberty-background/70 hover:text-liberty-primary hover:bg-liberty-secondary/20`
  }

  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-all duration-300"
    if (isActive(path)) {
      return `${baseClasses} text-liberty-accent bg-liberty-accent/10`
    }
    return `${baseClasses} text-liberty-background/70 hover:text-liberty-primary hover:bg-liberty-secondary/10`
  }

  const services = [
    { title: "Service Charge & Budgeting", href: "/services?service=service-charge", icon: Calculator, description: "Transparent budgeting expertise" },
    { title: "Building Management", href: "/services?service=building-management", icon: Building, description: "Complete building solutions" },
    { title: "Building Insurance", href: "/services?service=building-insurance", icon: Shield, description: "No hidden commissions" },
    { title: "Onsite Staff Management", href: "/services?service=onsite-staff", icon: Users, description: "Performance-driven staff" },
    { title: "Community Management", href: "/services?service=community-management", icon: Heart, description: "Building communities" },
    { title: "RMC/RTM Company Secretariat", href: "/services?service=rmc-rtm", icon: FileText, description: "Company administration" },
  ]

  return (
    <nav className="bg-liberty-base/95 backdrop-blur-sm border-b border-liberty-secondary/30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_2fr_1fr] items-center h-16">
          {/* Logo - Left side */}
          <div className="flex justify-start">
            <Link href="/" className="block">
              <Image
                src="/images/logo-small.png"
                alt="Liberty Bell Property Management"
                width={48}
                height={48}
                className="h-12 w-12"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className={`${getLinkClasses('/')} flex items-center gap-2`}>
                    <Home className="w-4 h-4" />
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" className={getLinkClasses('/about')}>
                    About
                  </Link>
                </NavigationMenuItem>

                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={
                    isActive('/services')
                      ? "text-liberty-accent bg-liberty-accent/10 hover:bg-liberty-accent/20"
                      : "text-liberty-background/70 hover:text-liberty-primary bg-transparent hover:bg-liberty-secondary/20"
                  }>
                    <Link href="/services">
                      Services
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-96 bg-liberty-base border border-liberty-secondary/30 rounded-lg shadow-lg">
                      <ListItem 
                        href="/services" 
                        title="View All Services" 
                        icon={<Building className="w-4 h-4" />}
                        className="bg-liberty-primary/5 border border-liberty-primary/20"
                      >
                        The complete building management solution
                      </ListItem>
                      <div className="border-t border-liberty-secondary/30 my-2" />
                      {services.map((service) => (
                        <ListItem 
                          key={service.href}
                          href={service.href} 
                          title={service.title} 
                          icon={<service.icon className="w-4 h-4" />}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/contact" className={getLinkClasses('/contact')}>
                    Contact
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a 
                    href="https://www.libertybellenfranchise.co.uk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md text-liberty-background/70 hover:text-liberty-primary hover:bg-liberty-secondary/20 flex items-center gap-1.5"
                  >
                    Right to Manage
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <style jsx global>{`
              [data-slot="navigation-menu-viewport"] {
                border: none !important;
                box-shadow: none !important;
              }
            `}</style>
          </div>

          {/* Desktop CTA Button - Right side */}
          <div className="hidden lg:flex justify-end items-center gap-3">
            <ThemeToggle />
            <Button 
              asChild 
              className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden col-span-2 flex justify-end">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-liberty-background hover:text-liberty-primary"
                >
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-liberty-base w-full sm:w-full flex flex-col">
                <SheetHeader className="flex-shrink-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                
                {/* Logo and Brand */}
                <div className="flex items-center gap-3 px-2 py-4 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Liberty Bell Property Management"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-lg"
                  />
                  <div>
                    <h2 className="font-reckless font-semibold text-liberty-background text-lg">Liberty Bell</h2>
                    <p className="text-liberty-background/60 text-sm">Property Management</p>
                  </div>
                </div>

                {/* Scrollable content area */}
                <div className="flex-1 overflow-y-auto px-2 space-y-6">
                  {/* Navigation Links */}
                  <div className="space-y-4">
                    <h3 className="font-reckless font-semibold text-liberty-background text-lg border-b border-liberty-secondary/30 pb-2">Navigation</h3>
                    <div className="space-y-1">
                      <Link
                        href="/"
                        className={getMobileLinkClasses('/')}
                        onClick={() => setIsOpen(false)}
                      >
                        <Home className="w-5 h-5" />
                        <span className="font-medium">Home</span>
                      </Link>
                      <Link
                        href="/about"
                        className={getMobileLinkClasses('/about')}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">About Us</span>
                      </Link>
                      <Link
                        href="/contact"
                        className={getMobileLinkClasses('/contact')}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium">Contact</span>
                      </Link>
                      <a
                        href="https://www.libertybellenfranchise.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-all duration-300 text-liberty-background/70 hover:text-liberty-primary hover:bg-liberty-secondary/10"
                        onClick={() => setIsOpen(false)}
                      >
                        <Scale className="w-5 h-5" />
                        <span className="font-medium">Right to Manage</span>
                        <ExternalLink className="w-4 h-4 ml-auto" />
                      </a>
                    </div>
                  </div>

                  {/* Services Section */}
                  <div className="space-y-4">
                    <h3 className="font-reckless font-semibold text-liberty-background text-lg border-b border-liberty-secondary/30 pb-2">Services</h3>
                    <div className="space-y-1">
                      <Link 
                        href="/services" 
                        className={`${getMobileLinkClasses('/services')} group bg-liberty-primary/5 border border-liberty-primary/20`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="w-8 h-8 bg-liberty-primary/20 rounded-lg flex items-center justify-center group-hover:bg-liberty-primary/30 transition-colors">
                          <Building className="w-4 h-4 text-liberty-primary" />
                        </div>
                        <div>
                          <div className="font-medium">View All Services</div>
                          <div className="text-sm text-liberty-background/50">Complete building management</div>
                        </div>
                      </Link>
                      {services.map((service) => (
                        <Link 
                          key={service.href}
                          href={service.href} 
                          className={`${getMobileLinkClasses(service.href)} group`}
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-8 h-8 bg-liberty-primary/10 rounded-lg flex items-center justify-center group-hover:bg-liberty-primary/20 transition-colors">
                            <service.icon className="w-4 h-4 text-liberty-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{service.title}</div>
                            <div className="text-sm text-liberty-background/50">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fixed footer with CTA */}
                <SheetFooter className="flex-shrink-0 px-2 pb-4 space-y-2">
                  <Button 
                    asChild 
                    className="bg-liberty-primary hover:bg-liberty-primary/90 text-liberty-text-on-dark w-full h-12"
                  >
                    <Link 
                      href="/contact" 
                      onClick={() => setIsOpen(false)} 
                      className="flex items-center justify-center gap-2"
                    >
                      Get in Touch
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

const ListItem = ({ className, title, children, icon, href, ...props }: {
  className?: string
  title: string
  children: React.ReactNode
  icon?: React.ReactNode
  href: string
} & Omit<React.ComponentPropsWithoutRef<"a">, "href">) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-liberty-secondary/20 hover:text-liberty-primary focus:bg-liberty-secondary/20 focus:text-liberty-primary",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 text-sm font-medium leading-none text-liberty-background">
          {icon}
          {title}
        </div>
        <p className="line-clamp-2 text-sm leading-snug text-liberty-background/60">
          {children}
        </p>
      </Link>
    </NavigationMenuLink>
  )
}
