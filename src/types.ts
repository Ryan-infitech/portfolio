export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string;
}
