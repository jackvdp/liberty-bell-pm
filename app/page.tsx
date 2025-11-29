import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import BannerImage from "@/components/banner-image";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
      <div className="min-h-screen bg-liberty-base">
        <Navbar />
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <BannerImage />
        <FAQSection />
        <ContactForm/>
        <Footer />
      </div>
  );
}
