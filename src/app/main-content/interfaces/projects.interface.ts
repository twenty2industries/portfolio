export interface SingleProject {
  id: number;
  title: string;
  duration: string;
  description: string;
  technologies: {
    iconPath: string;
    altText: string;
  }[];
  bulletPoints: {
    title: string;
    content: string;
  }[];
  url: string;
  image:string;
}

export type ProjectData = SingleProject[];