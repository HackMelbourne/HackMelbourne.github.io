import { useEffect } from 'react';

const useFavicon = (faviconPath) => {
  useEffect(() => {
    const originalFavicon = document.querySelector('link[rel="icon"]');
    const originalHref = originalFavicon.href;

    originalFavicon.href = faviconPath;

    return () => {
      originalFavicon.href = originalHref;
    };
  }, [faviconPath]);
};

export default useFavicon;
