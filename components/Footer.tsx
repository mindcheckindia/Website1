import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-6 text-center text-textSecondary">
        <p>&copy; {new Date().getFullYear()} Mind Path Lab. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;