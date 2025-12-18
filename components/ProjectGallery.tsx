
import React from 'react';
import { Project } from '../types';

interface ProjectGalleryProps {
  projects: Project[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(project => (
        <div 
          key={project.id} 
          className="group glass rounded-3xl overflow-hidden flex flex-col hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2"
        >
          <div className="relative h-56 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-purple-600 text-white rounded-md backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-6 flex-grow">{project.description}</p>
            <a 
              href={project.link} 
              className="mt-auto inline-flex items-center text-purple-400 font-semibold hover:text-purple-300 transition-colors"
            >
              View Project 
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectGallery;
