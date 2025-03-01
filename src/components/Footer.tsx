
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-navy py-8 text-white/80 border-t border-white/10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {currentYear} Ankur Tyagi. All rights reserved.
        </p>
        <p className="text-xs mt-2 opacity-70">
          Scrum Master & Project Manager
        </p>
      </div>
    </footer>
  );
};

export default Footer;
