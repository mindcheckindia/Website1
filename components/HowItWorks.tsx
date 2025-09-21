import React from 'react';

const StepCard: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => {
  return (
    <div className="relative p-8 bg-surface rounded-2xl border border-slate-700/80">
      <div className="absolute -top-6 -left-4 w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
        {number}
      </div>
      <h3 className="mt-6 text-2xl font-bold text-textPrimary">{title}</h3>
      <p className="mt-2 text-textSecondary">{children}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="section-animate py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Your Journey to Clarity
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Our process is designed to be insightful, confidential, and straightforward.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-3 gap-16 md:gap-8">
          <StepCard number="1" title="A Smart Assessment">
            Begin with a confidential check-in that intelligently adapts to you. It’s a dynamic experience that focuses only on what's relevant, ensuring your journey is personal from the very first step.
          </StepCard>
          <StepCard number="2" title="Your Personal Blueprint">
            Receive an easy-to-understand report that translates complex insights into a clear picture of your well-being across 12 mental health domains. No jargon, just clarity.
          </StepCard>
          <StepCard number="3" title="A Guided Journey">
            Your blueprint isn't just data—it's a guide. Use your actionable insights to navigate your path to wellness with confidence and purpose.
          </StepCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;