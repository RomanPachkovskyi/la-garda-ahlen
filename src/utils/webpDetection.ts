// WebP Support Detection Utility
// Detects if the browser supports WebP format

let webpSupported: boolean | null = null;

export const detectWebPSupport = (): Promise<boolean> => {
  // Return cached result if already detected
  if (webpSupported !== null) {
    return Promise.resolve(webpSupported);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      webpSupported = img.width === 1 && img.height === 1;
      resolve(webpSupported);
    };
    img.onerror = () => {
      webpSupported = false;
      resolve(false);
    };
    // 1x1 WebP test image
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';
  });
};

export const getImageUrl = (jpgPath: string): string => {
  // If WebP is supported, replace .jpg with .webp
  if (webpSupported === true) {
    return jpgPath.replace(/\.jpg$/i, '.webp');
  }
  // Fallback to JPG
  return jpgPath;
};

// Initialize detection on module load
detectWebPSupport();
