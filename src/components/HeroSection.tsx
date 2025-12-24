import { useEffect, useState } from "react";
import { Mouse } from "lucide-react";
import { restaurantConfig } from "@/config/restaurant";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger logo animation after a small delay
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Crossfade image slider
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => 
        (prev + 1) % restaurantConfig.heroImages.length
      );
    }, restaurantConfig.heroSlideInterval);

    return () => clearInterval(interval);
  }, []);

  const scrollToInfo = () => {
    document.getElementById("info-section")?.scrollIntoView({ 
      behavior: "smooth" 
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Crossfade */}
      {restaurantConfig.heroImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          aria-hidden="true"
        />
      ))}

      {/* Dark Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90"
        aria-hidden="true"
      />

      {/* Centered Logo */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <img
          src={restaurantConfig.logoUrl}
          alt={restaurantConfig.name}
          className={`logo-white h-24 w-auto max-w-[280px] sm:h-32 sm:max-w-[360px] md:h-40 md:max-w-[440px] transition-all duration-[900ms] ease-out ${
            isLoaded 
              ? "opacity-100 blur-0 scale-100" 
              : "opacity-0 blur-sm scale-[1.02]"
          }`}
        />
      </div>

      {/* Scroll Hint */}
      <button
        onClick={scrollToInfo}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/60 transition-colors hover:text-foreground"
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
