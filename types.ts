
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  category: 'Languages' | 'Tools' | 'Soft Skills' | 'Frameworks';
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string;
  experiences: Experience[];
  projects: Project[];
  skills: Skill[];
  certifications: Certification[];
}
