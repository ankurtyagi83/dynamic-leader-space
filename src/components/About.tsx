
import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
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
    <section id="about" className="section-padding py-20" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2 reveal-animation">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto reveal-animation"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal-animation">
            <div className="glass-card p-6 relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-primary/10 rounded-full"></div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">17+</span>
                  </div>
                  <h3 className="text-xl font-medium text-foreground">Years of Experience</h3>
                </div>
                <p className="text-foreground/80">
                  Based in Toronto, Canada, I bring extensive expertise in leading Agile teams and driving project success across global organizations.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-6 mt-6 relative">
              <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-primary/10 rounded-full"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-foreground mb-4">Contact Information</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Email:</span>
                    <a href="mailto:Ankurtyagi007@gmail.com" className="hover:text-primary transition-colors">
                      Ankurtyagi007@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Phone:</span>
                    <a href="tel:+14377791796" className="hover:text-primary transition-colors">
                      437-779-1796
                    </a>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium mr-2">Location:</span>
                    <span>Toronto, ON, Canada</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal-animation">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Experienced project management and Scrum Master professional with 17 years of expertise in Agile software project management and app development. Skilled in leading geographically distributed teams across the US, UK, Canada, and India.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Recognized for proficiency in client-facing interactions, vendor management, and building strong stakeholder relationships. Certified Scrum practitioner with hands-on experience leading Agile (Scrum and Kanban) teams and creating Agile frameworks for large-scale clients.
            </p>
            
            <p className="text-lg text-foreground/80 leading-relaxed">
              Proficient in project planning, app development lifecycle, data management, UAT, and OAT, while collaborating closely with Scrum teams using Lean Software Development methodologies.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-medium text-foreground mb-4">Seeking a challenging role where I can:</h3>
              <ul className="space-y-2 text-foreground/80 list-disc pl-5">
                <li>Utilize my extensive experience to drive project success</li>
                <li>Contribute to organizational goals effectively</li>
                <li>Lead and mentor Agile teams to achieve excellence</li>
                <li>Implement and optimize Agile methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
