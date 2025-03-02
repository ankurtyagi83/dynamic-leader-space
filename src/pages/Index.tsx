
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  // Set up intersection observer for animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealElements = document.querySelectorAll('.reveal-animation');
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Add class to the document body on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
