import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Benefits from "@/components/benefits";
import Footer from "@/components/footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-liberty-base">
        <Navbar />
        <Hero />
        <Benefits />
        <Footer />
      </div>
  );
}
