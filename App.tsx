
import React, { useState, useEffect } from 'react';
import Section from './components/Section';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import ProjectGallery from './components/ProjectGallery';
import ChatWidget from './components/ChatWidget';
import { PORTFOLIO_DATA } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 px-6 py-4 ${scrolled ? 'glass py-3' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-black text-white tracking-tighter hover:text-purple-400 transition-colors">
            NOVA<span className="text-purple-600">.</span>
          </a>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium uppercase tracking-widest">
            {['About', 'Work', 'Skills', 'Projects'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="px-5 py-2 purple-gradient text-white rounded-full text-xs font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-900/20">
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Decor */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-purple-400 font-mono tracking-widest mb-4 animate-in fade-in slide-in-from-bottom-2 duration-700">HELLO WORLD, I AM</p>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            {PORTFOLIO_DATA.name.split(' ')[0]} <span className="text-gradient">{PORTFOLIO_DATA.name.split(' ')[1]}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            {PORTFOLIO_DATA.title} specializing in building exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <a href="#projects" className="px-10 py-4 purple-gradient text-white font-bold rounded-2xl hover:translate-y-[-2px] transition-all shadow-xl shadow-purple-900/40">
              Explore Projects
            </a>
            <a href="#about" className="px-10 py-4 glass text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
              About Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Scroll</span>
          <div className="w-0.5 h-12 bg-gradient-to-b from-purple-600 to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" subtitle="A brief introduction of my professional journey and what drives me.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-purple-600/20 rounded-[40px] blur-2xl"></div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden border border-purple-500/30">
              <img 
                src="https://picsum.photos/seed/developer/800/800" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl hidden md:block">
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-black text-white">8+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Years Exp</p>
                </div>
                <div>
                  <p className="text-3xl font-black text-white">40+</p>
                  <p className="text-xs text-slate-400 uppercase tracking-widest">Projects</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Crafting Code with <span className="text-purple-400 italic font-serif">Intent</span></h3>
            <p className="text-lg text-slate-400 leading-relaxed">
              {PORTFOLIO_DATA.about}
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new UI trends, writing technical articles, or experimenting with generative AI tools. I believe the best software is built at the intersection of powerful tech and human-centered design.
            </p>
            <div className="pt-4 flex gap-6">
              <div className="flex flex-col">
                <span className="text-purple-400 font-bold">Email</span>
                <span className="text-white">alex@nova.dev</span>
              </div>
              <div className="flex flex-col">
                <span className="text-purple-400 font-bold">Location</span>
                <span className="text-white">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="work" title="Experience" subtitle="Professional milestones and key contributions across various industries.">
        <ExperienceTimeline experiences={PORTFOLIO_DATA.experiences} />
      </Section>

      {/* Skills Section */}
      <div className="bg-slate-900/30">
        <Section id="skills" title="Expertise" subtitle="A breakdown of my technical toolkit and professional accolades.">
          <SkillsGrid skills={PORTFOLIO_DATA.skills} certifications={PORTFOLIO_DATA.certifications} />
        </Section>
      </div>

      {/* Projects Section */}
      <Section id="projects" title="Showcase" subtitle="Selected works that demonstrate my technical ability and design sensibility.">
        <ProjectGallery projects={PORTFOLIO_DATA.projects} />
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Connect" subtitle="Have a project in mind or just want to chat? Reach out!">
        <div className="glass p-12 rounded-[40px] border-purple-500/20 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-8">Let's create something <span className="text-gradient">remarkable</span> together.</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:hello@example.com" className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700">
              <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="font-bold text-white">Email Me</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700">
               <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span className="font-bold text-white">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-8 py-4 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-colors border border-slate-700">
               <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span className="font-bold text-white">LinkedIn</span>
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <a href="#" className="text-xl font-black text-white tracking-tighter">
              NOVA<span className="text-purple-600">.</span>
            </a>
            <p className="text-slate-500 text-sm mt-2">© 2024 Alex Sterling. All rights reserved.</p>
          </div>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Resume</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
