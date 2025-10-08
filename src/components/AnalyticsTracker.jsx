import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('/api/analytics', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            path: location.pathname,
            referrer: document.referrer,
            screen: `${window.screen.width}x${window.screen.height}`,
            language: navigator.language,
          }),
        });
      } catch (error) {
        console.error('Analytics error:', error);
      }
    };

    trackVisit();
  }, [location.pathname]);

  return null;
}
