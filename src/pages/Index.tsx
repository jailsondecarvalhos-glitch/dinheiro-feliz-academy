import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ModulesSection from "@/components/ModulesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InstructorSection from "@/components/InstructorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ModulesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <InstructorSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
