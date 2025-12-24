import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurantConfig } from "@/config/restaurant";

const InfoSection = () => {
  return (
    <>
      {/* Full-screen Info Section */}
      <section 
        id="info-section" 
        className="relative flex min-h-screen items-center"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${restaurantConfig.infoImage}')` }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        
        {/* Content */}
        <div className="container relative z-10 mx-auto px-6 py-20 md:px-12 lg:px-16">
          <div className="max-w-xl">
            {/* Tagline */}
            <h1 className="font-serif text-4xl font-medium uppercase leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl">
              {restaurantConfig.tagline}
            </h1>
            
            {/* Italian Tricolor Bar */}
            <div className="my-8 flex h-1 w-32">
              <div className="flex-1 bg-italian-green" />
              <div className="flex-1 bg-italian-white" />
              <div className="flex-1 bg-italian-red" />
            </div>
            
            {/* Description */}
            <p className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl">
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
                <a 
                  href={restaurantConfig.menuLunchPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Menü – Mittag
                  <ExternalLink className="ml-2 h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-foreground/30 bg-transparent text-foreground hover:bg-foreground hover:text-primary-foreground"
              >
                <a 
                  href={restaurantConfig.menuDinnerPdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Menü – Abend
                  <ExternalLink className="ml-2 h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-background py-20 md:py-28">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Adresse
                </h3>
                <p className="mt-2 text-foreground">
                  {restaurantConfig.address}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Telefon
                </h3>
                <a 
                  href={`tel:${restaurantConfig.phone}`}
                  className="mt-2 block text-foreground transition-colors hover:text-muted-foreground"
                >
                  {restaurantConfig.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" strokeWidth={1.5} />
              <div>
                <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  Öffnungszeiten
                </h3>
                <div className="mt-2 space-y-1">
                  {restaurantConfig.hours.map((slot, i) => (
                    <p key={i} className="text-foreground">
                      <span className="text-muted-foreground">{slot.days}:</span>{" "}
                      {slot.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Rating & Maps */}
            <div className="flex flex-col gap-4">
              {/* Google Rating Badge */}
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-foreground text-foreground" />
                <span className="text-lg font-medium text-foreground">
                  {restaurantConfig.googleRating}
                </span>
                <span className="text-sm text-muted-foreground">auf Google</span>
              </div>
              
              {/* Maps Button */}
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-fit text-muted-foreground hover:text-foreground"
              >
                <a 
                  href={restaurantConfig.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  In Google Maps öffnen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
