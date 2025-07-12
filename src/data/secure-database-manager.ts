import { Database } from 'lucide-react';

export const secureDatabaseManagerData = {
  // Basic Project Information
  title: 'Secure Database Manager',
  slug: 'secure-database-manager',
  description: 'Database security tool with encryption, access control, and audit logging for enterprise environments.',
  longDescription: 'Enterprise-grade database security solution providing comprehensive data protection through advanced encryption, granular access controls, and detailed audit trails. Designed for compliance with industry standards including SOX, HIPAA, and GDPR.',
  
  // Project Metadata
  status: 'Planned' as const,
  timeline: '8 months (planned)',
  team: 'Solo project',
  icon: Database,
  
  // Tags and Technologies
  tags: ['Database', 'Encryption', 'Access Control', 'Audit'],
  technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'React'],
  
  // Project Links
  github: 'https://github.com/yourusername/secure-database-manager',
  demo: '#', // Not available yet
  
  // Features
  features: [
    'AES-256 encryption',
    'Role-based access control',
    'Comprehensive audit trails',
    'Compliance reporting',
    'Multi-database support',
    'Real-time monitoring',
    'Automated backup encryption',
    'Data masking capabilities'
  ],
  
  // Challenges and Solutions
  challenges: [
    'Ensuring minimal performance impact from encryption while maintaining security',
    'Supporting multiple database types with unified security controls',
    'Meeting various compliance requirements (GDPR, HIPAA, SOX) simultaneously',
    'Creating intuitive admin interface for complex security configurations',
    'Balancing security with usability for end users'
  ],
  
  // Project Outcomes
  outcomes: [
    'Project in planning phase - requirements gathering complete',
    'Architecture design in progress with security review',
    'Stakeholder interviews completed for feature prioritization',
    'Proof of concept for encryption module successful',
    'Initial partnership discussions with compliance firms'
  ],
  
  // Image Gallery
  images: [
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center'
  ],
  
  // Technical Details
  technicalDetails: {
    architecture: 'Microservices with API gateway and service mesh',
    database: 'Multi-database support: PostgreSQL, MySQL, MongoDB, Oracle',
    deployment: 'Kubernetes with Helm charts for enterprise deployment',
    monitoring: 'ELK stack for logging, Prometheus for metrics',
    security: 'Zero-trust architecture, HSM integration for key management'
  },
  
  // Case Study Information
  caseStudy: {
    available: false,
    problemStatement: 'Enterprises need unified security controls across heterogeneous database environments.',
    solution: 'Developing a comprehensive platform that provides consistent security policies across all database types.',
    results: 'Project in planning - results to be determined.'
  }
};
