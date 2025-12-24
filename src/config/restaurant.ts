// La Garda am Freibad — Restaurant Configuration
// Edit this file to update all restaurant information

export const restaurantConfig = {
  // Basic Info
  name: "La Garda am Freibad",
  tagline: "Italienischer Genuss in Ahlen",
  description:
    "Erleben Sie authentische italienische Küche mit frischen Zutaten und mediterraner Leidenschaft – direkt am Freibad Ahlen.",

  // Hero Section Images (crossfade slider)
  heroImages: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80",
  ],

  // Info Section Images (crossfade slider)
  infoImages: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
  ],

  // Menu PDFs
  menuLunchPdfUrl: "https://lagarda-ahlen.de/menu/speisekarte_restaurant.pdf",
  menuDinnerPdfUrl: "https://lagarda-ahlen.de/menu/flyer_pizzataxi.pdf",

  // Contact & Location
  address: "Am Freibad 1, 59229 Ahlen",
  phone: "+49 2382 123456",
  hours: [
    { days: "Di – Fr", time: "11:30 – 14:30, 17:30 – 22:00" },
    { days: "Sa – So", time: "12:00 – 22:00" },
    { days: "Montag", time: "Ruhetag" },
  ],

  // Google Maps
  googleMapsUrl: "https://maps.app.goo.gl/Fa5bDvSFu4jPfn1D6",

  // Rating
  googleRating: 4.5,

  // Logo
  logoUrl: "/lagarda_logo.svg",

  // Slider timing (ms)
  heroSlideInterval: 7000,
};
