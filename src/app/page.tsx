import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import CoreCapabilities from "@/components/CoreCapabilities";
import IndustriesSection from "@/components/IndustriesSection";
import AiDevelopmentExcellence from "@/components/AiDevelopmentExcellence";
import FasterDeliveryBanner from "@/components/FasterDeliveryBanner";
import ProductsSolutions from "@/components/ProductsSolutions";
import CompanyOverview from "@/components/CompanyOverview";
import TechStackSection from "@/components/TechStackSection";
import OurProcessSection from "@/components/OurProcessSection";
import BrandCollectiveSection from "@/components/BrandCollectiveSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import JoinOurTeamSection from "@/components/JoinOurTeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00A3AD] selection:text-white">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
        <CoreCapabilities />
        <IndustriesSection />
        <AiDevelopmentExcellence />
        <FasterDeliveryBanner />
        <ProductsSolutions />
        <CompanyOverview />
        <TechStackSection />
        <OurProcessSection />
        <BrandCollectiveSection />
        <CaseStudiesSection />
        <JoinOurTeamSection />
      </main>

      {/* Global Offices & Footer */}
      <Footer />
    </div>
  );
}
