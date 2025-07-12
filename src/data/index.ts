import { ProjectData } from '@/types/project';
import { networkSecurityMonitorData } from './network-security-monitor';
import { vulnerabilityAssessmentToolData } from './vulnerability-assessment-tool';
import { secureDatabaseManagerData } from './secure-database-manager';
import { penetrationTestingSuiteData } from './penetration-testing-suite';

// Export all project data in a single object for easy access
export const projectsData: Record<string, ProjectData> = {
  'network-security-monitor': networkSecurityMonitorData,
  'vulnerability-assessment-tool': vulnerabilityAssessmentToolData,
  'secure-database-manager': secureDatabaseManagerData,
  'penetration-testing-suite': penetrationTestingSuiteData,
};

// Export individual projects for direct import
export {
  networkSecurityMonitorData,
  vulnerabilityAssessmentToolData,
  secureDatabaseManagerData,
  penetrationTestingSuiteData,
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData[slug];
};

// Get all projects as an array
export const getAllProjects = (): ProjectData[] => {
  return Object.values(projectsData);
};

// Get all unique tags across all projects
export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  Object.values(projectsData).forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};
