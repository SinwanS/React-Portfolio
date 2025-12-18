
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Alex Sterling",
  title: "Senior Full-Stack Engineer & Architect",
  about: "I am a passionate software engineer with over 8 years of experience building scalable web applications. My expertise lies in crafting intuitive user interfaces and robust backend architectures. I love exploring the intersection of AI and modern web technologies to solve complex problems.",
  experiences: [
    {
      id: "1",
      role: "Lead Frontend Engineer",
      company: "TechNova Systems",
      period: "2021 - Present",
      description: [
        "Architected a high-performance React dashboard reducing load times by 40%.",
        "Mentored a team of 5 junior developers and implemented standardized code review processes.",
        "Collaborated with UX designers to create a comprehensive design system."
      ]
    },
    {
      id: "2",
      role: "Senior Software Developer",
      company: "CloudBound Inc.",
      period: "2018 - 2021",
      description: [
        "Migrated legacy monolithic applications to a microservices architecture using Node.js and AWS.",
        "Improved system reliability by implementing robust CI/CD pipelines and unit testing suites.",
        "Managed database optimization for PostgreSQL instances handling 100k+ daily requests."
      ]
    },
    {
      id: "3",
      role: "Full Stack Developer",
      company: "StartUp Hub",
      period: "2016 - 2018",
      description: [
        "Built the MVP for a fintech platform that secured $5M in Series A funding.",
        "Developed real-time notification systems using WebSockets and Redis.",
        "Optimized mobile responsiveness for cross-platform compatibility."
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "AI Market Analyzer",
      description: "A real-time financial sentiment analysis tool using Gemini API to process news and predict stock trends.",
      tags: ["React", "Python", "Gemini AI", "Tailwind"],
      image: "https://picsum.photos/seed/market/600/400",
      link: "#"
    },
    {
      id: "p2",
      title: "ZenFlow Project Manager",
      description: "A minimalist Kanban-style project management tool with built-in focus timers and team collaboration features.",
      tags: ["TypeScript", "Firebase", "Drag-n-Drop"],
      image: "https://picsum.photos/seed/zen/600/400",
      link: "#"
    },
    {
      id: "p3",
      title: "EtherPulse Dashboard",
      description: "An interactive crypto-tracking dashboard with D3.js visualizations and multi-wallet support.",
      tags: ["Next.js", "D3.js", "Web3", "Node.js"],
      image: "https://picsum.photos/seed/crypto/600/400",
      link: "#"
    }
  ],
  skills: [
    { name: "React / Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Framer Motion", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Backend" },
    { name: "AWS", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Gemini API", category: "Tools" }
  ],
  certifications: [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2023" },
    { name: "Google Cloud Professional Developer", issuer: "Google Cloud", year: "2022" },
    { name: "Meta Front-End Developer Professional", issuer: "Coursera", year: "2021" }
  ]
};
