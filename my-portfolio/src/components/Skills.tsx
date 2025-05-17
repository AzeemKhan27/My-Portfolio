import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { resumeData } from '@/data/resumeData';

const Skills: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className={`transition-opacity duration-1000 ease-out ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="section-headline text-gradient">My Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resumeData.skills.map((skillCategory, index) => {
              const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ 
                delay: index * 200
              });
              
              return (
                <div 
                  key={skillCategory.category}
                  ref={elementRef}
                  className={`glass-card p-6 rounded-lg transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">{skillCategory.category}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-portfolio-purple/10 text-portfolio-purple"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          {resumeData.certifications && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {resumeData.certifications.map((cert, index) => {
                  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({
                    delay: 200 + index * 200
                  });
                  
                  return (
                    <div 
                      key={cert.title}
                      ref={elementRef}
                      className={`glass-card p-6 rounded-lg text-center transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple/10">
                          <svg className="w-6 h-6 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-1">{cert.title}</h4>
                      <p className="text-gray-500 text-sm">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
                      
                      {cert.url && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-portfolio-blue hover:underline text-sm inline-block mt-2"
                        >
                          View Certificate
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
