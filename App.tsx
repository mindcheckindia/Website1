import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/ProblemSolution';
import Mission from './components/Mission';
import HowItWorks from './components/HowItWorks';
import Pillars from './components/WhyMindcheck';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-textPrimary antialiased">
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
  );
};

export default App;