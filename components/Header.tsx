import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-xl border-b border-slate-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" aria-label="Mind Path Lab homepage">
          <Logo />
        </a>
      </div>
    </header>
  );
};

export default Header;