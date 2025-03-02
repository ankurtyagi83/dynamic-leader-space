
import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "USCIS Case Tracker App",
    description: "A mobile application that allows users to track their immigration case status with USCIS, providing real-time updates and notifications.",
    link: "https://agileworldtechnologies.com/uscis-case-tracker-app/",
  },
  {
    title: "Your Immigration Expert",
    description: "A comprehensive platform providing immigration services and guidance for people navigating the complex immigration process.",
    link: "https://agileworldtechnologies.com/yourimmigrationexpert/",
  },
  {
    title: "ADT Corporation Digital Transformation",
    description: "Led the transition from waterfall to Agile methodology, resulting in 30% increased team velocity and delivered projects six weeks ahead of schedule.",
    link: "#",
  },
  {
    title: "JCPenney E-commerce Enhancement",
    description: "Implemented Agile Scrum methodology and end-to-end automation, improving project delivery and reducing time to market.",
    link: "#",
  },
];

const Projects: React.FC = () => {
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
    <section id="projects" className="section-padding py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-navy mb-2 reveal-animation">Projects</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto reveal-animation"></div>
          <p className="mt-6 max-w-2xl mx-auto text-brand-gray reveal-animation">
            A selection of projects I've led and delivered, showcasing my expertise in project management and Agile methodologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 reveal-animation">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="glass-card p-6 h-full transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-brand-gray group-hover:text-brand-blue transition-colors" size={20} />
                </div>
                <p className="text-brand-gray">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
