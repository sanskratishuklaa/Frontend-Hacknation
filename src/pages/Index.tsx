import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DashboardPreview from "@/components/DashboardPreview";
import LiveHackathons from "@/components/LiveHackathons";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <DashboardPreview />
      <LiveHackathons />
      <StatsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
