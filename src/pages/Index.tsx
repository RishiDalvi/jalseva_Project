
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import HowItWorksSection from "../components/HowItWorksSection";
import BenefitsSection from "../components/BenefitsSection";
import ImpactDashboardSection from "../components/ImpactDashboardSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrustedBrandsSection from "../components/TrustedBrandsSection";
import StartCampaignSection from "../components/StartCampaignSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import WhatsAppButton from "../components/WhatsAppButton";

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ImpactDashboardSection />
      <TestimonialsSection />
      <TrustedBrandsSection />
      <StartCampaignSection />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
