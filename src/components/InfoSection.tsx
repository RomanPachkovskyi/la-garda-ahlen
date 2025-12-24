import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Star, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurantConfig } from "@/config/restaurant";
const InfoSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % restaurantConfig.infoImages.length);
    }, restaurantConfig.heroSlideInterval);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Full-screen Info Section with Slideshow */}
      <section id="info-section" className="relative flex min-h-screen items-center">
        {/* Background Images with Crossfade */}
        {restaurantConfig.infoImages.map((image, index) => (
          <div
            key={image}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms]"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: index === currentImageIndex ? 1 : 0,
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            aria-hidden="true"
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />

        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-2xl">
            {/* Tagline */}
            <h1 className="font-serif text-4xl uppercase leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl">
              {restaurantConfig.tagline}
            </h1>

            {/* Italian Tricolor Bar */}
            <div className="my-8 flex h-1 w-32">
              <div className="flex-1 bg-italian-green" />
              <div className="flex-1 bg-italian-white" />
              <div className="flex-1 bg-italian-red" />
            </div>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {restaurantConfig.description}
            </p>

            {/* Menu Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-primary-foreground"
              >
                <a href={restaurantConfig.menuLunchPdfUrl} target="_blank" rel="noopener noreferrer">
                  Menü – im Restaurant
                  <ArrowUpRight
                    className="ml-2 h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-primary-foreground"
              >
                <a href={restaurantConfig.menuDinnerPdfUrl} target="_blank" rel="noopener noreferrer">
                  Menü – zur Lieferung
                  <ArrowUpRight
                    className="ml-2 h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100"
                    strokeWidth={1.5}
                  />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Strip - Two Columns */}
      <section className="border-t border-border/30 bg-background py-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col gap-6 md:items-center md:justify-center md:flex md:flex-row">
            {/* Left Column (65%) - Address, Phone, Hours stacked */}
            <div className="flex flex-1 flex-col gap-3 md:basis-[65%] md:flex-col py-0 my-[20px] md:flex md:items-start md:justify-center md:gap-[13px]">
              <a
                href={restaurantConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <MapPin className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                {restaurantConfig.address}
              </a>

              <a
                href={`tel:${restaurantConfig.phone}`}
                className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <Phone className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                {restaurantConfig.phone}
              </a>

              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="text-sm text-muted-foreground">
                  {restaurantConfig.hours.map((slot, i) => (
                    <span key={i}>
                      {slot.days}: {slot.time}
                      {i < restaurantConfig.hours.length - 1 && " · "}
                    </span>
                  ))}
                </span>
              </div>
            </div>

            {/* Right Column (35%) - Google Rating */}
            <div className="flex items-center justify-start gap-4 md:basis-[35%] md:justify-end">
              <a
                href={restaurantConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-muted-foreground"
              >
                <Star className="h-4 w-4 fill-foreground text-foreground" />
                <span className="font-medium">{restaurantConfig.googleRating}</span>
                <span className="text-muted-foreground">Google</span>
                <ArrowUpRight className="h-3 w-3 text-muted-foreground" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default InfoSection;
