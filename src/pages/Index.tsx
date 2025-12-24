import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <InfoSection />
      <Footer />
      <CookieBanner />
    </main>
  );
};

export default Index;
