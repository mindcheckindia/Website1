import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto">
        <div className="text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-textPrimary leading-tight tracking-tight max-w-4xl mx-auto">
            Your mind's blueprint
            <br />
            <span className="text-accent">Revealed</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            Mind Path Lab's proprietary AI-powered assessment, built on peer-reviewed research and clinical science, creates a wellness blueprint with the clarity and precision of a physical check-up. We're now granting early access for a limited time to users who can help shape our product with their feedback.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a
              href="https://mental-wellness-report1-lwip.vercel.app/?submissionId=SUB-1756826816721-e552j2h"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent/10 border border-accent/50 text-accent font-bold py-4 px-8 rounded-full text-lg hover:bg-accent/20 transition-all duration-300 transform hover:scale-105"
            >
              View Sample Report
            </a>
            <a
              href="/form.html"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent text-background font-bold py-4 px-8 rounded-full text-lg hover:bg-accent-dark transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(45,212,191,0.5)] hover:shadow-[0_0_35px_rgba(45,212,191,0.7)]"
            >
              Get Early Access
            </a>
          </div>
           <p className="mt-4 text-sm text-textSecondary/70">Join our private beta. Your feedback will shape our public launch.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;