import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { resumeData } from '@/data/resumeData';

const Experience: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className={`transition-opacity duration-1000 ease-out ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="section-headline text-gradient">My Experience</h2>
          
          <div className="timeline-container mb-16">
            {resumeData.experience.map((exp, index) => {
              const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ 
                delay: index * 300,
                threshold: 0.2
              });
              
              const isOdd = index % 2 === 0;
              
              return (
                <div 
                  key={`${exp.company}-${exp.title}`}
                  className="timeline-item"
                  ref={elementRef}
                >
                  <div 
                    className={`md:flex ${isOdd ? '' : 'flex-row-reverse'} items-center ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-1000`}
                  >
                    <div className={`md:w-1/2 ${isOdd ? 'md:pr-12' : 'md:pl-12'} p-6 mb-6 md:mb-0`}>
                      <div className={`md:text-${isOdd ? 'right' : 'left'}`}>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-portfolio-purple/10 text-portfolio-purple mb-2">
                          {exp.startDate} - {exp.endDate}
                        </span>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <h4 className="text-lg text-gray-700 mb-2">{exp.company} | {exp.location}</h4>
                        <p className="text-gray-600 mb-4">{exp.description}</p>
                        
                        {exp.achievements && (
                          <ul className="list-disc list-inside text-gray-700 space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm">{achievement}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <div className={`glass-card p-6 rounded-lg shadow-lg ${
                          isVisible 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-10'
                        } transition-all duration-1000 ease-out delay-200`}
                      >
                        <div className="aspect-w-16 aspect-h-9 bg-portfolio-purple/5 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-4xl font-bold text-portfolio-purple/20">{exp.company.slice(0, 2).toUpperCase()}</div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple/10 mr-3">
                            <svg className="w-5 h-5 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <h5 className="font-medium">{exp.title}</h5>
                        </div>
                        
                        <div className="flex items-center">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-portfolio-purple/10 mr-3">
                            <svg className="w-5 h-5 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <h3 className="text-2xl font-semibold mb-6 text-center">Education</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.education.map((edu, index) => {
              const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
                delay: index * 200
              });
              
              return (
                <div 
                  key={`${edu.institution}-${edu.degree}`}
                  ref={elementRef}
                  className={`glass-card p-6 rounded-lg transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-portfolio-blue/10 mr-4">
                      <svg className="w-6 h-6 text-portfolio-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-medium text-gray-500">
                        {edu.startDate} - {edu.endDate}
                      </span>
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <h4 className="text-gray-700">{edu.institution}</h4>
                      <p className="text-sm text-gray-600 mt-1">{edu.location}</p>
                      
                      {edu.description && (
                        <p className="text-sm text-gray-600 mt-2">{edu.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
