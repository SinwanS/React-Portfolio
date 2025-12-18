
import React from 'react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="relative border-l border-purple-800/50 ml-4 md:ml-0">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="mb-12 ml-6 relative group">
          {/* Dot */}
          <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-purple-600 border-4 border-slate-900 group-hover:bg-purple-400 transition-colors shadow-lg shadow-purple-500/20"></div>
          
          <div className="glass p-6 rounded-2xl transition-all hover:translate-x-1 duration-300">
            <span className="text-purple-400 font-mono text-sm mb-2 block">{exp.period}</span>
            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
            <h4 className="text-purple-300 font-medium mb-4">{exp.company}</h4>
            <ul className="space-y-3">
              {exp.description.map((bullet, i) => (
                <li key={i} className="text-slate-400 flex items-start">
                  <span className="text-purple-500 mr-2 mt-1.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
