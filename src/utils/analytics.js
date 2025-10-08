// Basic visitor tracking
const trackVisit = async () => {
  const data = {
    url: window.location.href,
    referrer: document.referrer,
    screenWidth: window.screen.width,
    userAgent: navigator.userAgent,
    language: navigator.language,
    time: new Date().toISOString(),
    // Add more data points as needed
  };

  try {
    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (err) {
    console.error('Analytics error:', err);
  }
};

// Track page load
document.addEventListener('DOMContentLoaded', trackVisit);

// Track SPA route changes (if applicable)
if (window.history.pushState) {
  const originalPushState = window.history.pushState;
  window.history.pushState = function () {
    originalPushState.apply(this, arguments);
    trackVisit();
  };
}
