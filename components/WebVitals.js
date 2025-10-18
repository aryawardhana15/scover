import { useEffect } from 'react';

export default function WebVitals() {
  useEffect(() => {
    // Optimize CLS (Cumulative Layout Shift)
    const optimizeCLS = () => {
      // Add explicit dimensions to images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.style.width && !img.style.height) {
          img.style.width = '100%';
          img.style.height = 'auto';
        }
      });

      // Add explicit dimensions to videos
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (!video.style.width && !video.style.height) {
          video.style.width = '100%';
          video.style.height = 'auto';
        }
      });
    };

    // Optimize LCP (Largest Contentful Paint)
    const optimizeLCP = () => {
      // Preload hero image
      const heroImage = document.querySelector('.hero-image');
      if (heroImage) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = heroImage.src;
        document.head.appendChild(link);
      }
    };

    // Optimize FID (First Input Delay)
    const optimizeFID = () => {
      // Defer non-critical JavaScript
      const scripts = document.querySelectorAll('script[data-defer]');
      scripts.forEach(script => {
        if (script.src) {
          const newScript = document.createElement('script');
          newScript.src = script.src;
          newScript.async = true;
          document.head.appendChild(newScript);
          script.remove();
        }
      });
    };

    // Run optimizations
    optimizeCLS();
    optimizeLCP();
    optimizeFID();

    // Monitor Web Vitals
    if (typeof window !== 'undefined' && 'web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);

  return null;
}
