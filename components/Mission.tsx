import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="section-animate py-20 md:py-24 text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-textPrimary leading-tight tracking-tight">
            Our Mission:
            <br />
            <span className="text-accent">Parity for the Mind</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            We believe mental health deserves the same clarity and importance as physical health. Our mission is to empower every individual with insights from precise diagnostics and the support of human expertise—delivered in days, not months. We're shifting the paradigm from reactive crisis management to proactive, guided self-care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
