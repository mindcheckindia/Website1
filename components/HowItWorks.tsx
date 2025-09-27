import React from 'react';

const StepCard: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => {
  return (
    <div className="relative p-8 bg-surface rounded-2xl border border-slate-700/80">
      <div className="absolute -top-6 -left-4 w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
        {number}
      </div>
      <h3 className="mt-6 text-2xl font-bold text-textPrimary min-h-[4rem]">{title}</h3>
      <p className="mt-2 text-textSecondary">{children}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className="section-animate py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Your Journey to Clarity
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Our process is grounded in science, accelerated by technology, and guided by human expertise.
          </p>
        </div>
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          <StepCard number="1" title="A Smart Assessment">
            Begin with a confidential, scientifically-validated check-in that intelligently adapts to you, ensuring your results are precise and personal from the very first step.
          </StepCard>
          <StepCard number="2" title="Your Personal Blueprint">
            Receive an easy-to-understand report. We use AI to rapidly analyze your assessment results, translating complex scientific data into a clear picture of your well-being.
          </StepCard>
          <StepCard number="3" title="Guided Review Session">
            You're not alone. Discuss your results in a confidential one-on-one session with a trained mental health professional who can help you interpret your blueprint and answer your questions.
          </StepCard>
          <StepCard number="4" title="A Clear Path Forward">
            Collaborate with your guide to build an actionable plan. Your blueprint becomes a practical roadmap, empowering you with tangible next steps to navigate your path to wellness with confidence.
          </StepCard>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;