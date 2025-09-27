import React from 'react';
import { formHtmlContent } from './formPageContent';

// Icons for the process diagram
const ScienceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12v.01" />
        <path d="M19.071 4.929c-1.562 -1.562 -6.191 2.29 -10.142 6.241c-3.951 3.951 -3.421 8.835 -1.859 10.397c1.562 1.562 6.191 -2.29 10.142 -6.241c3.951 -3.951 3.421 -8.835 1.859 -10.397z" />
        <path d="M4.929 4.929c1.562 -1.562 6.191 2.29 10.142 6.241c3.951 3.951 3.421 8.835 1.859 10.397c-1.562 1.562 -6.191 -2.29 -10.142 -6.241c-3.951 -3.951 -3.421 -8.835 -1.859 -10.397z" />
    </svg>
);

const AIIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 21c-3.132 0 -5.352 -2.12 -6.216 -4.832c-.864 -2.712 .216 -5.328 1.944 -7.168c1.728 -1.84 3.996 -2.832 6.272 -2.832" />
        <path d="M12 21v-18" />
        <path d="M10 14h-1" />
        <path d="M10 11h-1" />
        <path d="M10 8h-2" />
        <path d="M10 17h-2" />
        <path d="M12 12h9" />
        <path d="M12 9h5" />
        <path d="M12 15h3" />
        <circle cx="16" cy="15" r="1" />
        <circle cx="18" cy="9" r="1" />
        <circle cx="22" cy="12" r="1" />
    </svg>
);

const HumanIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);

const steps = [
    { 
        icon: <ScienceIcon />, 
        title: "Scientific Assessment", 
        text: "A scientifically-validated assessment that adapts to your needs in real-time." 
    },
    { 
        icon: <AIIcon />, 
        title: "AI-Powered Blueprint", 
        text: "Instantly translate results with AI-powered interpretations." 
    },
    { 
        icon: <HumanIcon />, 
        title: "Expert-Guided Plan", 
        text: "Validate data-informed insights and build an actionable plan." 
    }
];


const Hero: React.FC = () => {
  const handleOpenForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const blob = new Blob([formHtmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

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

          {/* New Process Diagram */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.title}>
                  <div className="flex flex-col items-center text-center lg:w-1/3 px-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-surface rounded-full border border-slate-700 text-accent mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-textPrimary">{step.title}</h3>
                    <p className="mt-1 text-textSecondary">{step.text}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <>
                      {/* Desktop Connector */}
                      <div className="hidden lg:flex flex-1 items-center justify-center mx-4">
                        <div className="w-full border-t-2 border-dashed border-slate-700"></div>
                      </div>
                      {/* Mobile Connector */}
                      <div className="lg:hidden flex justify-center h-16 my-4">
                        <div className="w-px bg-slate-700"></div>
                      </div>
                    </>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <p className="mt-16 text-lg md:text-xl text-textSecondary max-w-3xl mx-auto">
             Our process combines science, AI, and human oversight to give you the clarity and ease of a physical check-up, saving you weeks of time and money on your mental wellness journey.
          </p>
          
          <p className="mt-8 text-sm md:text-base text-textSecondary/80 max-w-3xl mx-auto">
            We're now granting early access for a limited time to users who can help shape our product with their feedback.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a
              href="https://mental-wellness-report1-lwip.vercel.app/?submissionId=SUB-1756826816721-e552j2h"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-accent/10 border border-accent/50 text-accent font-bold py-4 px-8 rounded-full text-lg hover:bg-accent/20 transition-all duration-300 transform hover:scale-105"
            >
              View Sample Blueprint
            </a>
            <a
              href="#"
              onClick={handleOpenForm}
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