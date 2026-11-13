import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Highlights />
        <Testimonials />
      </main>
    </>
  );
}