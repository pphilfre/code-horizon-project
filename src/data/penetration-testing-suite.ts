import { Terminal } from 'lucide-react';

export const penetrationTestingSuiteData = {
  // Basic Project Information
  title: 'Penetration Testing Suite',
  slug: 'penetration-testing-suite',
  description: 'Collection of custom penetration testing tools and scripts for ethical hacking and security assessments.',
  longDescription: 'A comprehensive penetration testing framework designed for ethical hackers and security professionals. Includes automated reconnaissance tools, custom exploit modules, payload generators, and detailed reporting capabilities.',
  
  // Project Metadata
  status: 'In Progress' as const,
  timeline: '5 months (ongoing)',
  team: 'Solo project',
  icon: Terminal,
  
  // Tags and Technologies
  tags: ['Penetration Testing', 'Ethical Hacking', 'Security Tools', 'Bash'],
  technologies: ['Python', 'Bash', 'Metasploit', 'Nmap', 'Burp Suite', 'SQLMap', 'Docker'],
  
  // Project Links
  github: 'https://github.com/yourusername/penetration-testing-suite',
  demo: '#', // Demo not appropriate for security tools
  
  // Features
  features: [
    'Custom exploit frameworks',
    'Automated reconnaissance',
    'Payload generation',
    'Report generation',
    'Vulnerability scanning',
    'Network enumeration',
    'Web application testing',
    'Social engineering modules'
  ],
  
  // Challenges and Solutions
  challenges: [
    'Ensuring tools are used only for ethical purposes with proper authorization',
    'Creating modular and extensible framework for different testing scenarios',
    'Generating professional penetration test reports that meet industry standards',
    'Balancing automation with manual testing requirements',
    'Maintaining tool effectiveness against evolving security measures'
  ],
  
  // Project Outcomes
  outcomes: [
    'Successfully used in 5+ authorized penetration tests',
    'Discovered 20+ previously unknown vulnerabilities',
    'Reduced testing time by 30% compared to manual methods',
    'Received positive feedback from security consultants',
    'Contributed to improved security posture for client organizations'
  ],
  
  // Image Gallery
  images: [
    'https://images.unsplash.com/photo-1509390144022-ba161ad7e4bf?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop&crop=center'
  ],
  
  // Technical Details
  technicalDetails: {
    architecture: 'Modular plugin-based architecture',
    database: 'SQLite for local storage, JSON for configuration',
    deployment: 'Portable Docker containers for consistent environments',
    reporting: 'LaTeX and HTML report generation',
    security: 'Encrypted payload storage, secure communication channels'
  },
  
  // Case Study Information
  caseStudy: {
    available: true,
    problemStatement: 'Security consultants needed efficient tools for comprehensive penetration testing.',
    solution: 'Developed an integrated suite that automates routine tasks while maintaining flexibility for custom tests.',
    results: 'Improved testing efficiency by 30% while maintaining thoroughness and accuracy.'
  }
};
