import { useEffect } from 'react';

const useFavicon = (faviconPath:any) => {
  useEffect(() => {
    const originalFavicon = document.querySelector('link[rel="icon"]');
    
    if (originalFavicon != null) {
      const originalHref = originalFavicon.href;
    }
    

    originalFavicon.href = faviconPath;

    return () => {
      originalFavicon.href = originalHref;
    };
  }, [faviconPath]);
};

export default useFavicon;
