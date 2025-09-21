import React, { useEffect } from 'react';

// FIX: Define the Tally property on the window object to resolve TypeScript errors.
// The Tally embed script adds a global `Tally` object for interacting with their forms.
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const CTA: React.FC = () => {
  // This useEffect hook handles loading the Tally embed script.
  // It's designed to run only once when the component mounts and ensures the script isn't loaded multiple times.
  useEffect(() => {
    const scriptSrc = 'https://tally.so/widgets/embed.js';

    const loadTallyEmbeds = () => {
      // Tally's script adds a `Tally` object to the window.
      if (window.Tally) {
        window.Tally.loadEmbeds();
      } else {
        // Fallback for cases where the script is loaded but the Tally object isn't immediately available.
        document.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((iframe: any) => {
          iframe.src = iframe.dataset.tallySrc;
        });
      }
    };

    // Check if the script is already on the page to avoid duplicates.
    if (document.querySelector(`script[src="${scriptSrc}"]`)) {
      loadTallyEmbeds();
      return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.onload = loadTallyEmbeds;
    script.onerror = loadTallyEmbeds;
    document.body.appendChild(script);

  }, []);


  return (
    <section id="waitlist" className="section-animate py-20 md:py-24 bg-surface">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Get Early Access & Shape the Future
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            We're inviting a limited number of people to experience our assessment and provide feedback. Join the private beta waitlist for a chance to get your personalized blueprint before our public launch.
          </p>

          <div className="mt-10">
            {/* The Tally form is embedded here. The useEffect hook above ensures it loads correctly. */}
            <iframe
              data-tally-src="https://tally.so/embed/mRpDBl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1708"
              // FIX: Correct iframe properties from string to number to match React's TypeScript definitions.
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Mind Path Lab Registration Form"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;