import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Highlights from "@/components/Highlights";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

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
        <Team />
        <Location />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
