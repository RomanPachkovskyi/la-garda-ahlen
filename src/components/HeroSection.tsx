import { useEffect, useState } from "react";
import { Mouse } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";
import LuxuryAnimatedLogo from "@/components/LuxuryAnimatedLogo";
import { detectWebPSupport, getImageUrl } from "@/utils/webpDetection";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [webpSupported, setWebpSupported] = useState(false);

  useEffect(() => {
    // Detect WebP support
    detectWebPSupport().then(setWebpSupported);

    // Trigger logo animation after a small delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Start crossfade transition
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentImageIndex((prev) => 
        (prev + 1) % restaurantConfig.heroImages.length
      );
    }, restaurantConfig.heroSlideInterval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // After transition completes, update base layer
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        setDisplayIndex(currentImageIndex);
        setIsTransitioning(false);
      }, restaurantConfig.crossfadeDuration);
      return () => clearTimeout(timeout);
    }
  }, [currentImageIndex, isTransitioning]);

  const scrollToInfo = () => {
    document.getElementById("info-section")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Base Layer - shows previous/stable image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getImageUrl(restaurantConfig.heroImages[displayIndex])})`,
          zIndex: 1,
        }}
        aria-label="Restaurant hero background image"
      />

      {/* Transition Layer - fades in new image */}
      <div
        className="absolute inset-0 bg-cover bg-center ease-out"
        style={{
          backgroundImage: `url(${getImageUrl(restaurantConfig.heroImages[currentImageIndex])})`,
          zIndex: 2,
          opacity: isTransitioning ? 1 : 0,
          transition: `opacity ${restaurantConfig.crossfadeDuration}ms ease-out`,
        }}
        aria-hidden="true"
      />

      {/* Dark Gradient Overlay - always on top */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      />

      {/* Centered Logo */}
      <div className="relative flex h-full items-center justify-center" style={{ zIndex: 10 }}>
        <LuxuryAnimatedLogo
          className={`h-[7.5rem] w-auto max-w-[350px] sm:h-40 sm:max-w-[450px] md:h-[12.5rem] md:max-w-[550px] transition-opacity duration-1000 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Scroll Hint - TEMPORARILY HIDDEN */}
      <button
        onClick={scrollToInfo}
        className="hidden absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
        style={{ zIndex: 10 }}
        aria-label="Scroll to content"
      >
        <Mouse className="h-6 w-6 animate-scroll-hint" strokeWidth={1.5} />
        <span className="text-xs font-light tracking-[0.2em] uppercase">
          Scroll
        </span>
      </button>
    </section>
  );
};

export default HeroSection;
