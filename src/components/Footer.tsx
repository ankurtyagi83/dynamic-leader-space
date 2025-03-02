
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t border-gray-100 text-brand-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold text-brand-navy">Ankur Tyagi</h3>
            <p className="text-sm mt-1">Scrum Master & Project Manager</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <nav className="flex gap-6">
              <a href="#home" className="text-sm hover:text-brand-blue transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-brand-blue transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-brand-blue transition-colors">Experience</a>
              <a href="#projects" className="text-sm hover:text-brand-blue transition-colors">Projects</a>
            </nav>
            
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/ankurtyagi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-brand-blue transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:Ankurtyagi007@gmail.com" 
                className="text-sm hover:text-brand-blue transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 mt-8 pt-8 text-center md:text-left">
          <p className="text-xs">
            © {currentYear} Ankur Tyagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
