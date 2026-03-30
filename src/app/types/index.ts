export interface Skill {
  title: string;
  imageSrc: string;
}

export interface Project {
  title: string;
  imageSrc: string;
  description: string;
  skills: string[];
  demo: string;
  source: string;
}

export interface ProjectWithImages extends Project {
  skillImages: Record<string, string>;
}
