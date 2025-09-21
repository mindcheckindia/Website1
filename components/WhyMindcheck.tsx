import React from 'react';

const ScienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18.75 0h1.5m-16.5 0h.008v.008h-.008v-.008zm3.75 0h.008v.008h-.008v-.008zm3.75 0h.008v.008h-.008v-.008z" />
    </svg>
);

const LockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
);

const BulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);

const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M23 21v-2a4 4 0 00-3-3.87" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 3.13a4 4 0 010 7.75" />
    </svg>
);


const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-surface p-6 rounded-xl border border-slate-700/80 transform transition-transform duration-300 hover:-translate-y-2">
    <div className="text-accent mb-4">
        {icon}
    </div>
    <h3 className="text-xl font-bold text-textPrimary">{title}</h3>
    <p className="mt-2 text-textSecondary">{children}</p>
  </div>
);

const Pillars: React.FC = () => {
  return (
    <section className="section-animate py-20 md:py-24 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-textPrimary">
            Built On a Foundation of Trust
          </h2>
          <p className="mt-4 text-lg text-textSecondary">
            Mind Path Lab is designed around four core principles to ensure you receive trustworthy, confidential, and effective guidance.
          </p>
        </div>
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard icon={<ScienceIcon />} title="Scientific Precision">
            Our methodology is grounded in peer-reviewed science and validated against established clinical frameworks like DSM-5 and PROMIS®. This ensures your blueprint has the depth and precision of a scientific instrument.
          </FeatureCard>
          <FeatureCard icon={<LockIcon />} title="Absolute Confidentiality">
            Your privacy is paramount. Your data is encrypted, anonymized, and never shared. Your blueprint is for your eyes only.
          </FeatureCard>
          <FeatureCard icon={<BulbIcon />} title="Actionable Clarity">
            We demystify your mental wellness. Our blueprint translates complex data into a simple report, helping you interpret the signs and empowering you with clear, actionable next steps.
          </FeatureCard>
          <FeatureCard icon={<UsersIcon />} title="Fostering Normalcy">
            By providing an accessible, private first step, we combat the stigma and educational gaps that prevent so many from seeking help. Proactive awareness is key to better recovery, and it starts here.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Pillars;