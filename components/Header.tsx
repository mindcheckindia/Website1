import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" aria-label="Mind Path Lab homepage">
          <Logo />
        </a>
        <nav>
          <a
            href="form.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent font-semibold py-2 px-5 rounded-full border border-accent/50 bg-accent/10 hover:bg-accent/20 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(45,212,191,0.2)] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
          >
            Get Early Access
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;