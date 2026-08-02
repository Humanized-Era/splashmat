import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InteractiveDemo from "@/components/InteractiveDemo";
import WhyGrid from "@/components/WhyGrid";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import ComparisonSlider from "@/components/ComparisonSlider";
import EnvironmentSection from "@/components/EnvironmentSection";
import BenefitCards from "@/components/BenefitCards";
import UseCases from "@/components/UseCases";
import FAQAccordion from "@/components/FAQAccordion";
import Testimonials from "@/components/Testimonials";
import PricingPlans from "@/components/PricingPlans";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InteractiveDemo />
        <WhyGrid />
        <HowItWorksTimeline />
        <ComparisonSlider />
        <EnvironmentSection />
        <BenefitCards />
        <UseCases />
        <FAQAccordion />
        <Testimonials />
        <PricingPlans />
      </main>
      <Footer />
    </>
  );
}
