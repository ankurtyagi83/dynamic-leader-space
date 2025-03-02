
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.classList.add('active');
    }
    
    // Staggered animation for children
    const children = heroRef.current?.querySelectorAll('.animate-stagger');
    children?.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add('active');
      }, 300 + (index * 150));
    });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white pt-16"
      ref={heroRef}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl z-10">
        <div className="text-center space-y-8">
          <div className="animate-stagger reveal-animation">
            <p className="text-brand-blue font-medium mb-4">Project Manager & Scrum Master</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-brand-navy mb-6 leading-tight">
              Ankur Tyagi
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto animate-stagger reveal-animation">
            <p className="text-xl text-brand-gray">
              An energetic, process-focused, task-oriented technical leader with 17 years of expertise in Agile software project management.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-stagger reveal-animation">
            <a 
              href="#experience" 
              className="px-8 py-3 bg-brand-blue text-white rounded-lg hover:bg-brand-blue/90 transition-all shadow-md hover:shadow-lg font-medium"
            >
              View Experience
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-white text-brand-navy border border-brand-gray/20 rounded-lg hover:bg-gray-50 transition-all shadow-sm hover:shadow font-medium"
            >
              See Projects
            </a>
          </div>
          
          <div className="flex justify-center pt-20 animate-stagger reveal-animation">
            <a 
              href="#about" 
              className="text-brand-gray hover:text-brand-blue transition-colors inline-flex flex-col items-center"
            >
              <span className="text-sm mb-2">Scroll to learn more</span>
              <ArrowDown className="animate-bounce" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
