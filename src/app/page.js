import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Clients from "../components/Clients";
import ReferralBenefits from "../components/ReferralBenefits";
import AccredianEdge from "../components/AccredianEdge";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <ReferralBenefits />
      <AccredianEdge />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <ContactCTA />
      <Footer />
    </>
  );
}