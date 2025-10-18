import { useEffect } from 'react';

export default function LoadingOptimization() {
  useEffect(() => {
    // Preload critical resources
    const preloadLinks = [
      '/images/logo/logo2.png',
      '/images/gallery/1.jpg',
      '/images/tutors/abel.png'
    ];

    preloadLinks.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnectDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    preconnectDomains.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = href;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
}

// Component untuk lazy loading images
export function LazyImage({ src, alt, className = '', ...props }) {
  return (
    <img
      data-src={src}
      alt={alt}
      className={`lazy ${className}`}
      loading="lazy"
      {...props}
    />
  );
}
