
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border/20 text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-serif font-medium text-foreground">Ankur Tyagi</h3>
            <p className="text-sm mt-1 font-light">Scrum Master & Project Manager</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <nav className="flex gap-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors elegant-underline">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors elegant-underline">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors elegant-underline">Experience</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors elegant-underline">Projects</a>
            </nav>
            
            <div className="flex gap-6">
              <a 
                href="https://www.linkedin.com/in/ankurtyagi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm hover:text-primary transition-colors elegant-underline"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:Ankurtyagi007@gmail.com" 
                className="text-sm hover:text-primary transition-colors elegant-underline"
              >
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center md:text-left">
          <p className="text-xs font-light">
            © {currentYear} Ankur Tyagi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
