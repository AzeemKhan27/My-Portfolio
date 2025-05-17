import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { resumeData } from '@/data/resumeData';

const Projects: React.FC = () => {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLDivElement>();
  const [filter, setFilter] = useState<string | null>(null);
  
  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(resumeData.projects.flatMap(project => project.tags))
  );
  
  // Filter projects based on selected tag
  const filteredProjects = filter
    ? resumeData.projects.filter(project => project.tags.includes(filter))
    : resumeData.projects;
  
  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef} 
          className={`transition-opacity duration-1000 ease-out ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h2 className="section-headline text-gradient">My Projects</h2>
          
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <Button 
              variant={filter === null ? "default" : "outline"} 
              size="sm" 
              onClick={() => setFilter(null)}
              className={filter === null ? "bg-portfolio-purple hover:bg-portfolio-purple/90" : ""}
            >
              All
            </Button>
            
            {allTags.map(tag => (
              <Button 
                key={tag} 
                variant={filter === tag ? "default" : "outline"} 
                size="sm" 
                onClick={() => setFilter(tag)}
                className={filter === tag ? "bg-portfolio-purple hover:bg-portfolio-purple/90" : ""}
              >
                {tag}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>({ 
                delay: index * 150
              });
              
              return (
                <div 
                  key={project.title}
                  ref={elementRef}
                  className={`group glass-card overflow-hidden rounded-lg transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                    <img 
                      src={project.imageUrl || "https://images.unsplash.com/photo-1498050108023-c5249f4df085"} 
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    {project.featured && (
                      <div className="absolute top-2 right-2 bg-portfolio-purple text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-portfolio-purple transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span 
                          key={`${project.title}-${tag}`}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-portfolio-purple/10 text-portfolio-purple"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      {project.demoUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          Live Demo
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" className="flex-1">
                          GitHub
                        </Button>
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

export default Projects;
