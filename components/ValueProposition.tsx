import React from 'react';

const benefits = [
  {
    title: "Accelerate Clarity",
    description: "Our process condenses weeks of discovery into a single, efficient assessment and review session, saving you valuable time and money on your path to wellness."
  },
  {
    title: "Science & Synergy",
    description: "AI accelerates the analysis of your scientific assessment for objective insights. A trained professional provides the empathy and guidance to turn those insights into a meaningful plan."
  },
  {
    title: "A Data-Driven Approach",
    description: "Walk into your session with a professional already empowered by a clear, scientific blueprint of your mental well-being. This data-driven approach leads to more focused and effective guidance."
  }
];

const BenefitRow: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({ number, title, children }) => (
  <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-8 items-start">
    <span className="text-6xl md:text-7xl font-bold text-accent/30 leading-none pt-1">{number}</span>
    <div>
      <h3 className="text-2xl font-bold text-textPrimary">{title}</h3>
      <p className="mt-2 text-textSecondary leading-relaxed">{children}</p>
    </div>
  </div>
);


const ValueProposition: React.FC = () => {
  return (
    <section className="section-animate py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            A Smarter Path to Mental Wellness
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            We bridge the gap between impersonal technology and traditional therapy, offering a more efficient, insightful, and supportive start to your journey.
          </p>
        </div>
        
        <div className="mt-20 max-w-4xl mx-auto space-y-16">
          {benefits.map((benefit, index) => (
            <BenefitRow key={benefit.title} number={`0${index + 1}`} title={benefit.title}>
              {benefit.description}
            </BenefitRow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;