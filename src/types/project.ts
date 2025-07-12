import { LucideIcon } from 'lucide-react';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export interface TechnicalDetails {
  architecture: string;
  database: string;
  deployment: string;
  monitoring?: string;
  testing?: string;
  security: string;
  reporting?: string;
}

export interface CaseStudy {
  available: boolean;
  problemStatement: string;
  solution: string;
  results: string;
}

export interface ProjectData {
  // Basic Information
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  
  // Metadata
  status: ProjectStatus;
  timeline: string;
  team: string;
  icon: LucideIcon;
  
  // Categorization
  tags: string[];
  technologies: string[];
  
  // Links
  github: string;
  demo: string;
  
  // Content
  features: string[];
  challenges: string[];
  outcomes: string[];
  images: string[];
  
  // Optional Detailed Information
  technicalDetails?: TechnicalDetails;
  caseStudy?: CaseStudy;
}

// Helper function to get status color
export const getStatusColor = (status: ProjectStatus): string => {
  switch (status) {
    case 'Completed': return 'bg-primary text-background';
    case 'In Progress': return 'bg-accent text-background';
    case 'Planned': return 'bg-muted text-muted-foreground';
    default: return 'bg-secondary text-secondary-foreground';
  }
};
