
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          <span className="text-purple-500 mr-2">/</span>{title}
        </h2>
        {subtitle && <p className="text-slate-400 text-lg max-w-3xl">{subtitle}</p>}
        <div className="h-1 w-20 bg-purple-600 mt-4 rounded-full"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;
