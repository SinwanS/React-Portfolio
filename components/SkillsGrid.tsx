
import React from 'react';
import { Skill, Certification } from '../types';

interface SkillsGridProps {
  skills: Skill[];
  certifications: Certification[];
}

const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, certifications }) => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map(cat => (
            <div key={cat} className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-purple-400 mb-4 border-b border-purple-900/50 pb-2">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.filter(s => s.category === cat).map(skill => (
                  <span 
                    key={skill.name} 
                    className="px-3 py-1 bg-purple-900/30 text-purple-200 border border-purple-800/30 rounded-lg text-sm hover:bg-purple-800/50 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
        {certifications.map(cert => (
          <div key={cert.name} className="flex gap-4 items-center glass p-4 rounded-xl border-l-4 border-l-purple-600">
            <div>
              <p className="text-white font-semibold">{cert.name}</p>
              <p className="text-slate-400 text-sm">{cert.issuer} • {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;
