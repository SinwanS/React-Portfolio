
import { PortfolioData } from './types';

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Sinwan Saeed",
  title: "Aspiring Software/Security Engineer",
  about: "I studied and got my Bachelors in Computer Science at the University of Maryland College Park. Dedicated and persistent. I am constantly learning and working to further my knowledge and expertise. I am fluent with HTML/CSS, JavaScript, Python, C#, and C++. Familiar with GIT/Source control. I also have some experience with MySQL and MongoDB.",
  experiences: [
    {
      id: "1",
      role: "System Analyst",
      company: "Oxford Risk Management Group",
      period: "Sep 2025 - Present",
      description: [
        "Wrote Python scripts to automate data migration from Excel to Salesforce, decreasing project time to weeks from months",
        "Implemented Salesforce features and enhancements to streamline policy, endorsements, and claims tracking",
        "Wrote SOPs and documented common tasks to create a knowledge base to decrease new hire training time"
      ]
    },
    {
      id: "2",
      role: "Help Desk Analyst",
      company: "T Rowe Price",
      period: "Jun 2024 - Sep 2025",
      description: [
        "Assisted end users with technical incidents in infrastructure operations using ServiceNow, ensuring effective communication to non-technical users, resulting in improved user satisfaction",
        "Managed incident data collection and ticket documentation using ServiceNow instances based on the ITIL framework, enhancing the efficiency of enterprise technology services",
        "Supported applications including Salesforce, Amazon Connect, Concur, Microsoft Office 365 Suite, and Citrix Workspace, contributing to seamless software operations"
      ]
    },
    {
      id: "3",
      role: "Desktop Governance & Compliance Intern",
      company: "Navy Federal Credit Union ",
      period: "May 2023 - Aug 2023",
      description: [
        "Tested monthly software patches for corporate applications, ensuring compatibility and security compliance",
        "Tracked admin access during quarterly audits to ensure least privilege access, enhancing security protocols",
        "Fulfilled and managed software requests using ServiceNow and Remote Desktop"
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "Cloud Resume Website",
      description: "My old website with just bare HTML/CSS and a splash of JavaScript. Was deployed using S3 and AWS CloudFront with GitHub actions to automatically update any front-end changes I push to the site repository.",
      tags: ["HTML", "CSS", "JavaScript", "AWS", "Github Actions"],
      image: "/images/02.png",
      link: "https://github.com/SinwanS/cloud-resume-challenge"
    },
    {
      id: "p2",
      title: "Soc Analyst Lab",
      description: "Integrated a Security Information and Event Management (SIEM) tool with a Security, Orchestration, Automation, and Response (SOAR) tool. Set up automatic detection and lock out response for malware like mimikatz",
      tags: ["Wazuh", "TheHive", "Shuffle", "Virtual Box"],
      image: "/images/01.png",
      link: "https://github.com/SinwanS/SOC-Automation"
    },
    {
      id: "p3",
      title: "Chip8",
      description: "A simple Chip8 emulator",
      tags: ["C"],
      image: "/images/wip.jpg",
      link: "https://github.com/SinwanS/chip8_emulator"
    }
  ],
  skills: [
    { name: "Python", category: "Languages" },
    { name: "C/C++/C#", category: "Languages" },
    { name: "HTML/CSS", category: "Languages" },
    { name: "Java", category: "Languages" },
    { name: "JavaScript", category: "Languages" },
    { name: "React", category: "Frameworks" },
    { name: "Node.js", category: "Frameworks" },
    { name: "AWS", category: "Tools" },
    { name: "Azure", category: "Tools" },
    { name: "Docker", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Gemini API", category: "Tools" }
  ],
  certifications: [
    { name: "Network+", issuer: "CompTIA", year: "2025" },
    { name: "Security+", issuer: "CompTIA", year: "2025" }
  ]
};
