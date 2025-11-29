import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Benefits from "@/components/benefits";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-liberty-base">
        <Navbar />
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Footer />
      </div>
  );
}
