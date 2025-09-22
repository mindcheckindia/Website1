import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/ProblemSolution';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Pillars from './components/WhyMindcheck';
import Footer from './components/Footer';
import StarryBackground from './components/StarryBackground';

const App: React.FC = () => {
  return (
    <div className="bg-transparent text-textPrimary antialiased relative">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Intro />
          <Mission />
          <HowItWorks />
          <Pillars />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;