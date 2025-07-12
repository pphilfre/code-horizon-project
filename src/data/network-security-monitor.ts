import { Network } from 'lucide-react';

export const networkSecurityMonitorData = {
  // Basic Project Information
  title: 'Network Security Monitor',
  slug: 'network-security-monitor',
  description: 'Real-time network monitoring system with intrusion detection capabilities built using Python and Wireshark.',
  longDescription: 'A comprehensive network security monitoring solution that provides real-time analysis of network traffic, detects potential threats, and alerts administrators to suspicious activities. The system leverages advanced machine learning algorithms for anomaly detection and integrates with existing security infrastructure.',
  
  // Project Metadata
  status: 'Completed' as const, // 'Completed' | 'In Progress' | 'Planned'
  timeline: '6 months',
  team: 'Solo project',
  icon: Network,
  
  // Tags and Technologies
  tags: ['Python', 'Wireshark', 'Network Security', 'IDS'],
  technologies: ['Python 3.9+', 'Wireshark', 'TShark', 'Scapy', 'SQLite', 'Flask', 'Chart.js'],
  
  // Project Links
  github: 'https://github.com/yourusername/network-security-monitor',
  demo: 'https://demo.network-security-monitor.com',
  
  // Features
  features: [
    'Real-time packet analysis',
    'Anomaly detection algorithms',
    'Alert system with notifications',
    'Traffic pattern visualization',
    'Machine learning-based threat detection',
    'Integration with existing security tools',
    'Customizable monitoring rules',
    'Comprehensive reporting dashboard'
  ],
  
  // Challenges and Solutions
  challenges: [
    'Processing high-volume network traffic in real-time without performance degradation',
    'Reducing false positive rates in anomaly detection while maintaining security',
    'Creating an intuitive dashboard for complex network data visualization',
    'Scaling the system to handle enterprise-level traffic volumes',
    'Ensuring compatibility with various network infrastructures'
  ],
  
  // Project Outcomes
  outcomes: [
    'Successfully detected 95% of known attack patterns in testing',
    'Reduced incident response time by 40% compared to manual monitoring',
    'Implemented in 3 production environments with positive feedback',
    'Achieved 99.2% uptime during 6-month pilot program',
    'Generated 30% fewer false positives than competing solutions'
  ],
  
  // Image Gallery
  images: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1551808525-51a94da548ce?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=400&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop&crop=center'
  ],
  
  // Technical Details (Optional)
  technicalDetails: {
    architecture: 'Microservices-based architecture with containerized components',
    database: 'SQLite for local data storage, Redis for caching',
    deployment: 'Docker containers with Kubernetes orchestration',
    monitoring: 'Prometheus and Grafana for system monitoring',
    security: 'End-to-end encryption, role-based access control'
  },
  
  // Case Study Information (Optional)
  caseStudy: {
    available: true,
    problemStatement: 'Enterprise networks needed real-time threat detection without overwhelming security teams with false positives.',
    solution: 'Developed an ML-powered monitoring system that learns network patterns and identifies genuine threats.',
    results: 'Achieved 95% accuracy in threat detection while reducing false positives by 70%.'
  }
};
