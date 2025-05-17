import React from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { resumeData } from '@/data/resumeData';

const About: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>({ delay: 300 });
  const { elementRef: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>({ delay: 600 });
  
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className={`transition-opacity duration-1000 ease-out ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="section-headline text-gradient">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div 
              ref={imageRef} 
              className={`transition-all duration-1000 ease-out ${
                imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-portfolio-purple to-portfolio-blue p-1 rounded-lg shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="Portrait"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-portfolio-pink/20 backdrop-blur-sm"></div>
                <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-portfolio-blue/20 backdrop-blur-sm"></div>
              </div>
            </div>
            
            <div 
              ref={textRef} 
              className={`transition-all duration-1000 ease-out ${
                textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-4">
                I'm <span className="text-portfolio-purple">{resumeData.name}</span>, a {resumeData.title}
              </h3>
              
              <p className="text-gray-700 mb-6">
                {resumeData.about}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple/10 mr-4">
                    <svg className="w-6 h-6 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Location</h4>
                    <p className="font-medium">{resumeData.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple/10 mr-4">
                    <svg className="w-6 h-6 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Email</h4>
                    <p className="font-medium">{resumeData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple/10 mr-4">
                    <svg className="w-6 h-6 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Phone</h4>
                    <p className="font-medium">{resumeData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-portfolio-purple/10 mr-4">
                    <svg className="w-6 h-6 text-portfolio-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500">Experience</h4>
                    <p className="font-medium">5+ Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
