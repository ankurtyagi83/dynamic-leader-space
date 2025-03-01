
import React, { useEffect, useRef } from 'react';

interface ExperienceItem {
  company: string;
  period: string;
  location: string;
  title: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Mesons Technologies Inc",
    period: "Aug to Dec 2024",
    location: "",
    title: "",
    responsibilities: []
  },
  {
    company: "Publicis Sapient",
    period: "2010 - Aug 2024",
    location: "",
    title: "",
    responsibilities: []
  },
  {
    company: "ADT Corporation",
    period: "2021 - 2024",
    location: "Toronto, Canada & Dallas, USA",
    title: "Project Manager & Scrum Master",
    responsibilities: [
      "Effectively led the transition of the project delivery model from the traditional waterfall methodology to Agile, providing mentorship and coaching to project teams for a smooth transition to SCRUM practices.",
      "Managed multiple SCRUM teams throughout project lifecycles, ensuring successful project delivery while adhering to Agile principles and methodologies.",
      "Spearheaded the implementation of Agile methodologies, resulting in a 30% increase in development team velocity, thereby enhancing productivity and efficiency.",
      "Demonstrated exceptional project management skills by delivering projects six weeks ahead of schedule, focusing on quality, continuous delivery, and effective prioritization across various stakeholders.",
      "Orchestrated essential Agile ceremonies, including inception, scoping, backlog grooming, retrospectives, and sprint planning meetings on a bi-weekly basis, ensuring alignment and progress within the teams.",
      "Engaged in extensive planning activities, including establishing monthly forecasting, demand planning, and prioritizing refresh initiatives to address departmental needs and meet enterprise objectives.",
      "Successfully addressed a three-month backlog within the first year of the initiative, showcasing proactive management and strategic prioritization capabilities.",
      "Facilitated communication and collaboration among cross-functional teams, stakeholders, and leadership to ensure transparency, alignment, and successful project outcomes.",
      "Identified and resolved project impediments and dependencies in a timely manner, fostering an environment conducive to continuous improvement and innovation.",
      "Acted as a servant leader within SCRUM teams, empowering team members, removing obstacles, and promoting self-organization and accountability.",
      "Conducted regular performance assessments and provided constructive feedback to team members, fostering a culture of learning, growth, and excellence."
    ]
  },
  {
    company: "JCPenney Corporation",
    period: "2017 - 2021",
    location: "Texas, USA",
    title: "Scrum Master Project Manager & A/B Test Analyst",
    responsibilities: [
      "Implemented Agile Scrum Methodology and established end-to-end automation throughout JCPenney, which improved the project delivery process, ensured quality, reduced time to market, and improved communications between Engineering, Product Management, and Business.",
      "Project planning, estimation, work scheduling, prioritization, task allocation, delivery, and scope management.",
      "Oversee communication between the client, Sapient onshore and offshore teams, and project execution.",
      "Review project status with Sapient teams and the client, develop staffing plans, distribute resources, and identify skill set requirements.",
      "Manage compliance and quality process-related activities.",
      "Created and managed the Project Plan, Project delivery strategy, Estimation, and Resource allocation plan.",
      "Reviewed milestones, KPIs, and deliverables to ensure they are clearly defined and driving the team toward effectively achieving the objectives.",
      "Created and managed reports for the client leadership team by periodically reviewing project progress. Held checkpoint meetings with all stakeholders and aligned them towards common goals."
    ]
  },
  {
    company: "Ralph Lauren",
    period: "2015 - 2017",
    location: "New York, NY, USA",
    title: "Integration Lead / Program Manager",
    responsibilities: [
      "Led a team and a group of vendors, Manhattan Infosys and Sapient who are part of the Agile team",
      "Proactively identified and addressed project impediments and dependencies, fostering an environment conducive to continuous improvement and innovation.",
      "Demonstrated servant leadership within SCRUM teams, empowering members, removing obstacles, and promoting self-organization and accountability.",
      "Effectively managed project scope to ensure delivery aligned with scope commitments.",
      "Oversaw the Integration QA Team across geographical locations in India and the US.",
      "Developed comprehensive integration strategies and plans.",
      "Facilitated Program Triage calls to address and prioritize project issues and concerns.",
      "Held accountability for IST and SIT test management for program releases, ensuring adherence to quality standards and requirements.",
      "Coordinated UAT activities and assisted business users in system validation processes.",
      "Managed and ensured the testing of all applications and interfaces according to project requirements.",
      "Implemented and maintained necessary processes and procedures to uphold testing standards and compliance.",
      "Oversaw day-to-day management of the IST and SIT team, ensuring efficient operation and performance.",
      "Coordinated stakeholder and working group activities related to project initiatives."
    ]
  },
  {
    company: "Marks and Spencer (MCFP)",
    period: "2011 - 2014",
    location: "London, UK",
    title: "Program Manager & Reporting Manager",
    responsibilities: [
      "Successfully managed client expectations in terms of requirements, releases and delivery prioritization.",
      "Tracked, measured, and reviewed project progress. This included adjusting plans, and communicating changes to keep the project on track.",
      "Managed communications related to the project - to and from the client as well as internally - with all stakeholders including weekly status reports and status update calls with clients.",
      "Expertise in Risk management (identification, assessment, and prioritization) and resolution, including escalating risks to stakeholders as appropriate.",
      "Ensured quick resolution and communication of all issues, risks and action items.",
      "Worked with senior management to identify the resources required to successfully deliver on the project requirements.",
      "To ensure that all the necessary processes and procedures are maintained.",
      "Responsible for the day-to-day management of the IST and SIT team.",
      "Managing co-ordination of the Stakeholders and working groups engaged in project work.",
      "Managing conflicts with another programme sharing the SIT test environment",
      "Providing status reports to the Release Manager, Leadership team and all stakeholders.",
      "Defect & Incident management for the programme",
      "Third party /vendor Management"
    ]
  }
];

const Experience: React.FC = () => {
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
    <section id="experience" className="section-padding bg-brand-lightGray py-20" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-navy mb-2 reveal-animation">Experience & Projects</h2>
          <div className="w-20 h-1 bg-brand-blue mx-auto reveal-animation"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative pl-0 md:pl-10 reveal-animation ${index % 2 === 0 ? 'md:animate-fade-in-left' : 'md:animate-fade-in-right'}`}
              >
                {/* Timeline Marker */}
                <div className="hidden md:block absolute -left-1.5 top-0 w-3 h-3 bg-brand-blue rounded-full"></div>
                
                <div className="glass-card p-6 transition-all hover:shadow-lg">
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-brand-navy">{exp.company}</h3>
                      <span className="text-brand-blue text-sm font-medium px-3 py-1 bg-brand-blue/10 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    {exp.location && (
                      <p className="text-brand-gray text-sm mb-1">{exp.location}</p>
                    )}
                    
                    {exp.title && (
                      <p className="text-lg font-medium text-brand-navy">{exp.title}</p>
                    )}
                  </div>
                  
                  {exp.responsibilities.length > 0 && (
                    <div>
                      <h4 className="text-md font-medium text-brand-navy mb-2">Key Role Responsibilities</h4>
                      <ul className="space-y-2 text-brand-gray text-sm">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex">
                            <span className="mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            <div className="relative pl-0 md:pl-10 reveal-animation">
              <div className="hidden md:block absolute -left-1.5 top-0 w-3 h-3 bg-brand-blue rounded-full"></div>
              
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold text-brand-navy mb-2">Additional Experience</h3>
                <ul className="space-y-2 text-brand-gray">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Magna InfoTech as SE working in sapient as a contractor (Jan 2010 to Sep 2010)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>SNAPON BUSINESS SOLUTION as Software Test Engineer (Jan 2008 Oct 2009)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>N-ablers Infotech as a software engineer (July 2005 to JAN 2008)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
