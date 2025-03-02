
import React, { useEffect, useRef } from 'react';

interface Certification {
  name: string;
  logo?: string;
}

interface Education {
  degree: string;
  institution: string;
  year?: string;
}

const certifications: Certification[] = [
  { name: "SAFe Agilist" },
  { name: "SAFe Advanced Scrum Master" },
  { name: "SAFe Lean Portfolio Manager (LPM)" },
  { name: "SAFe POPM" },
  { name: "SAFe DevOps Practitioner" },
  { name: "ISTQB Certified Tester Foundation Level" },
  { name: "ISTQB Certified Tester Advance Level - TEST MANAGER" },
  { name: "MS AZURE Foundation" },
];

const education: Education[] = [
  { degree: "Master of Business Administration", institution: "Sikkim Manipal University" },
  { degree: "Bachelor of Commerce", institution: "University of Delhi" },
  { degree: "DNIIT", institution: "NIIT LTD", year: "2 years computer course" },
  { degree: "Advanced Computer Course", institution: "NIIT", year: "1 year" },
  { degree: "Advanced Software Testing Course", institution: "DUCAT", year: "3 months" },
];

const Certifications: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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
    
    const revealElements = sectionRef.current?.querySelectorAll('.reveal-animation');
    revealElements?.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="certifications" className="section-padding py-20" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2 reveal-animation">Education & Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto reveal-animation"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="reveal-animation">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Professional Certifications</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="glass-card p-5 flex flex-col items-center text-center transition-all hover:shadow-md"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-foreground">{cert.name}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="reveal-animation">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="glass-card p-5 transition-all hover:shadow-md">
                  <h4 className="text-lg font-medium text-foreground">{edu.degree}</h4>
                  <p className="text-foreground/80">{edu.institution}</p>
                  {edu.year && <p className="text-sm text-foreground/70">{edu.year}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
