export interface Project {
    id: string;
    title: string;
    description: string;
    category: 'Mobile' | 'Web' | 'IoT' | 'Other';
    technologies: string[]; 
    imageUrl?: string; 
    githubUrl?: string;
    demoUrl?: string;
}