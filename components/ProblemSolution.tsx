import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="section-animate py-20 md:py-24 text-center bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold text-textPrimary leading-tight tracking-tight">
            Your mind shouldn't be
            <br />
            a <span className="text-accent">mystery</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
            For too long, understanding our own mental state has been a guessing game. We delay seeking clarity—often because we don't recognize the symptoms or simply don't know where to start. Research shows this delay leads to more severe challenges and a harder path to recovery. It’s time to break the cycle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;