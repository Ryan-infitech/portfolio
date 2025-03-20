import { Project, Experience, Skill } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Map Informasi Bencana",
    description:
      "An interactive web application that provides real-time information about natural disasters in Indonesia, utilizing React, Leaflet.js, and AWS for scalable cloud deployment.",
    technologies: [
      "React",
      "Leaflet.js",
      "AWS",
      "Docker",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://map-informasi-bencana.example.com",
    github: "https://github.com/Ryan-infitech/Map-Informasi-Bencana",
  },
  {
    id: 2,
    title: "Sistem Absensi dengan Face Recognition",
    description:
      "A face recognition-based attendance system integrated with AWS DynamoDB for cloud storage, developed using Python and OpenCV.",
    technologies: [
      "Python",
      "OpenCV",
      "AWS DynamoDB",
      "Docker",
      "TensorFlow",
    ],
    image:
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    link: "https://sistem-absensi.example.com",
    github: "https://github.com/Ryan-infitech/Sistem-Absensi-Dengan-Face-Recognition",
  },
  {
    id: 3,
    title: "Antrian Cerdas",
    description:
      "An efficient queue management web application using QR codes and real-time status monitoring, built with React and Supabase.",
    technologies: [
      "React",
      "Supabase",
      "QR Code",
      "Next.js",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    github: "https://github.com/Ryan-infitech/Antrian-Cerdas",
  },
];


export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovations Inc.",
    position: "Senior Frontend Developer",
    duration: "January 2022 - Present",
    description: [
      "Led a cross-functional team of 5 developers in building a high-traffic customer portal that serves over 50,000 daily active users",
      "Architected and implemented a component library with 40+ reusable components, reducing development time by 35% across projects",
      "Implemented automated CI/CD pipelines that reduced deployment time from 45 minutes to 12 minutes and eliminated 90% of deployment-related issues",
      "Optimized application performance resulting in a 40% improvement in load times and 25% reduction in bounce rates",
      "Mentored 3 junior developers through paired programming sessions and code reviews, accelerating their skill development",
    ],
  },
  {
    id: 2,
    company: "Digital Solutions Ltd.",
    position: "Full Stack Developer",
    duration: "March 2019 - December 2021",
    description: [
      "Developed and maintained 6 web applications serving a combined user base of 100,000+ monthly active users",
      "Refactored database queries that improved application response time by 30% and reduced server load by 45%",
      "Implemented responsive designs ensuring consistent user experience across devices, increasing mobile conversions by 22%",
      "Integrated third-party APIs including payment gateways, social media platforms, and mapping services",
      "Collaborated closely with UX designers to transform wireframes into pixel-perfect implementations with accessibility compliance",
      "Participated in agile development cycles with daily stand-ups, sprint planning, and retrospective meetings",
    ],
  },
  {
    id: 3,
    company: "WebCraft Agency",
    position: "Frontend Developer",
    duration: "June 2017 - February 2019",
    description: [
      "Built interactive web applications for 12+ clients across e-commerce, finance, and healthcare industries",
      "Developed and maintained responsive websites ensuring cross-browser compatibility and WCAG 2.1 accessibility standards",
      "Created interactive data visualizations that improved client understanding of complex datasets by 40%",
      "Implemented A/B testing frameworks that helped identify optimal user flows, resulting in a 15% increase in conversion rates",
      "Participated in weekly code reviews and provided mentorship to junior developers",
      "Collaborated with marketing teams to implement SEO best practices, improving organic search rankings by an average of 30%",
    ],
  },
  {
    id: 4,
    company: "TechStart Innovations",
    position: "Junior Web Developer",
    duration: "September 2015 - May 2017",
    description: [
      "Developed and maintained client websites using HTML, CSS, JavaScript, and various CMS platforms",
      "Collaborated with designers to implement responsive layouts and interactive elements",
      "Optimized website performance by implementing best practices for image optimization and code minification",
      "Assisted in troubleshooting and resolving cross-browser compatibility issues",
      "Participated in client meetings to gather requirements and provide technical input",
    ],
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", icon: "react", category: "frontend" },
  { id: 2, name: "TypeScript", icon: "code", category: "frontend" },
  { id: 3, name: "JavaScript", icon: "code", category: "frontend" },
  { id: 4, name: "HTML5", icon: "code", category: "frontend" },
  { id: 5, name: "CSS3", icon: "palette", category: "frontend" },
  { id: 6, name: "Tailwind CSS", icon: "palette", category: "frontend" },
  { id: 7, name: "Redux", icon: "code", category: "frontend" },
  { id: 8, name: "Next.js", icon: "react", category: "frontend" },
  { id: 9, name: "React Native", icon: "smartphone", category: "frontend" },
  { id: 10, name: "Vue.js", icon: "code", category: "frontend" },
  { id: 11, name: "SASS/SCSS", icon: "palette", category: "frontend" },
  { id: 12, name: "Angular", icon: "code", category: "frontend" },

  // Backend
  { id: 13, name: "Node.js", icon: "server", category: "backend" },
  { id: 14, name: "Express", icon: "server", category: "backend" },
  { id: 15, name: "AWS", icon: "database", category: "backend" },
  { id: 16, name: "PostgreSQL", icon: "database", category: "backend" },
  { id: 17, name: "Supabase", icon: "database", category:"backend" },
  { id: 18, name: "REST API", icon: "server", category: "backend" },
  { id: 19, name: "Python", icon: "code", category: "backend" },
  { id: 20, name: "Django", icon: "server", category: "backend" },
  { id: 21, name: "Firebase", icon: "database", category: "backend" },
  { id: 22, name: "SQL", icon: "database", category: "backend" },

  // Tools
  { id: 23, name: "Git", icon: "git-branch", category: "tools" },
  { id: 24, name: "Docker", icon: "box", category: "tools" },
  { id: 25, name: "AWS", icon: "cloud", category: "tools" },
  { id: 26, name: "Jest", icon: "test-tube", category: "tools" },
  { id: 27, name: "Figma", icon: "figma", category: "tools" },
  { id: 28, name: "Webpack", icon: "package", category: "tools" },
  { id: 29, name: "CI/CD", icon: "git-branch", category: "tools" },
  { id: 30, name: "VS Code", icon: "code", category: "tools" },

  // Other
  { id: 31, name: "Agile/Scrum", icon: "users", category: "other" },
  { id: 32, name: "UX/UI Design", icon: "figma", category: "other" },
  { id: 33, name: "SEO", icon: "search", category: "other" },
  { id: 34, name: "Performance Optimization", icon: "zap", category: "other" },
  { id: 35, name: "Responsive Design", icon: "smartphone", category: "other" },
];

export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Informatic Engineering Education",
    institution: "Padang State University",
    duration: "2023 - 2027",
    description: 
    "Specialized in web development with expertise in React for building dynamic user interfaces and Laravel for developing robust backend systems. Passionate about integrating machine learning applications into web platforms to enhance functionality and user experience.",
  },  
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2022",
    link: "https://aws.amazon.com/certification/certified-developer-associate/",
  },
  {
    id: 2,
    name: "Professional Frontend Developer",
    issuer: "Meta (Facebook)",
    date: "2021",
    link: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
  },
  {
    id: 3,
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2020",
    link: "https://university.mongodb.com/certification",
  },
  {
    id: 4,
    name: "Certified Scrum Master",
    issuer: "Scrum Alliance",
    date: "2019",
    link: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster",
  },
];
