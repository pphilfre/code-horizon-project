import { motion } from 'framer-motion';
import { CleanCard } from '@/components/ui/clean-card';
import { CleanButton } from '@/components/ui/clean-button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Shield, Network, Database, Terminal } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Network Security Monitor',
      description: 'Real-time network monitoring system with intrusion detection capabilities built using Python and Wireshark.',
      tags: ['Python', 'Wireshark', 'Network Security', 'IDS'],
      icon: Network,
      status: 'Completed',
      github: '#',
      demo: '#',
      features: [
        'Real-time packet analysis',
        'Anomaly detection algorithms',
        'Alert system with notifications',
        'Traffic pattern visualization'
      ]
    },
    {
      id: 2,
      title: 'Vulnerability Assessment Tool',
      description: 'Automated vulnerability scanner for web applications with comprehensive reporting and remediation suggestions.',
      tags: ['Python', 'Security', 'Web Security', 'Automation'],
      icon: Shield,
      status: 'In Progress',
      github: '#',
      demo: '#',
      features: [
        'OWASP Top 10 coverage',
        'Automated scanning',
        'Detailed vulnerability reports',
        'Remediation recommendations'
      ]
    },
    {
      id: 3,
      title: 'Secure Database Manager',
      description: 'Database security tool with encryption, access control, and audit logging for enterprise environments.',
      tags: ['Database', 'Encryption', 'Access Control', 'Audit'],
      icon: Database,
      status: 'Planned',
      github: '#',
      demo: '#',
      features: [
        'AES-256 encryption',
        'Role-based access control',
        'Comprehensive audit trails',
        'Compliance reporting'
      ]
    },
    {
      id: 4,
      title: 'Penetration Testing Suite',
      description: 'Collection of custom penetration testing tools and scripts for ethical hacking and security assessments.',
      tags: ['Penetration Testing', 'Ethical Hacking', 'Security Tools', 'Bash'],
      icon: Terminal,
      status: 'In Progress',
      github: '#',
      demo: '#',
      features: [
        'Custom exploit frameworks',
        'Automated reconnaissance',
        'Payload generation',
        'Report generation'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-primary text-background';
      case 'In Progress': return 'bg-accent text-background';
      case 'Planned': return 'bg-muted text-muted-foreground';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of cybersecurity projects, tools, and research implementations
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <CleanCard className="h-full p-6 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <CleanButton
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </CleanButton>
                  <CleanButton
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </CleanButton>
                </div>
              </CleanCard>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <CleanCard className="p-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">More Projects Coming Soon</h2>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new cybersecurity projects and tools. 
                Check back regularly for updates, or follow my GitHub for the latest developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CleanButton
                onClick={() => window.open('https://github.com/freddie', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Follow on GitHub
              </CleanButton>
              <CleanButton variant="outline">
                <ExternalLink className="w-4 h-4 mr-2" />
                View All Projects
              </CleanButton>
              </div>
            </div>
          </CleanCard>
        </motion.div>
      </div>
    </div>
  );
};