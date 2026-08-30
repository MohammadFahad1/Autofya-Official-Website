import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import CoreCapabilities from "@/components/CoreCapabilities";

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
      </main>
    </div>
  );
}
