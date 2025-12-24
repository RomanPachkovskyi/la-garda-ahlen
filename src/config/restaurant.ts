// La Garda am Freibad — Restaurant Configuration
// Edit this file to update all restaurant information
//
// ========================================
// ІНСТРУКЦІЯ ДЛЯ ЛОКАЛЬНИХ ЗОБРАЖЕНЬ (FTP)
// ========================================
// Після завантаження на FTP замініть URL на відносні шляхи:
//
// Приклад структури папок на FTP:
//   public_html/
//   ├── images/
//   │   ├── hero-1.jpg
//   │   ├── hero-2.jpg
//   │   ├── hero-3.jpg
//   │   ├── info-1.jpg
//   │   ├── info-2.jpg
//   │   └── info-3.jpg
//   └── index.html
//
// Тоді змініть масиви нижче на:
//   heroImages: ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"],
//   infoImages: ["/images/info-1.jpg", "/images/info-2.jpg", "/images/info-3.jpg"],
// ========================================

export const restaurantConfig = {
  // Basic Info
  name: "La Garda am Freibad",
  tagline: "Echter italienischer Genuss, der man schmeckt in Ahlen",
  description:
    "La Garda steht für ehrliche italienische Küche, zubereitet mit hochwertigen Zutaten und viel Liebe zum Detail. Von knuspriger Pizza aus dem Steinofen bis zu feiner Pasta und klassischen Spezialitäten – bei uns geht es um echten Geschmack, nicht um Kompromisse. Ob im Restaurant oder bequem nach Hause geliefert: La Garda bringt ein Stück Italien auf Ihren Teller.",

  // Hero Section Images (crossfade slider)
  // Замініть на ваші фото: "/images/hero-1.jpg", "/images/hero-2.jpg", тощо
  heroImages: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80",
  ],

  // Info Section Images (crossfade slider)
  // Замініть на ваші фото: "/images/info-1.jpg", "/images/info-2.jpg", тощо
  infoImages: [
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80",
  ],

  // Menu PDFs
  menuLunchPdfUrl: "https://lagarda-ahlen.de/menu/speisekarte_restaurant.pdf",
  menuDinnerPdfUrl: "https://lagarda-ahlen.de/menu/flyer_pizzataxi.pdf",

  // Contact & Location
  address: "Bürgermeister-Corneli-Ring 48, 59227 Ahlen",
  phone: "+49 2382 855 355",
  hours: [{ days: "Do – So", time: "17:00 – 21:30 Uhr" }],

  // Google Maps
  googleMapsUrl: "https://maps.app.goo.gl/Fa5bDvSFu4jPfn1D6",

  // Rating
  googleRating: 4.5,

  // Logo
  logoUrl: "/lagarda_logo.svg",

  // Slider timing (ms)
  heroSlideInterval: 7000,    // Інтервал між слайдами
  crossfadeDuration: 2000,    // Тривалість crossfade переходу
};
