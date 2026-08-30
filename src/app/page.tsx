import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00C4CC] selection:text-white">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1">
        <HeroSection />
        <TrustedBy />
      </main>
    </div>
  );
}
