import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "lagarda_cookie_consent";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid flash on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/20 bg-card/95 p-4 backdrop-blur-sm md:p-6">
      <div className="container mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p className="text-center text-sm text-muted-foreground md:text-left">
          Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten.{" "}
          <Link 
            to="/datenschutz" 
            className="underline transition-colors hover:text-foreground"
          >
            Mehr erfahren
          </Link>
        </p>
        <Button
          onClick={handleAccept}
          size="sm"
          className="shrink-0 bg-foreground text-background hover:bg-foreground/90"
        >
          Akzeptieren
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
