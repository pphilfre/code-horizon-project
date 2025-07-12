import { motion } from 'framer-motion';
import { CleanCard } from '@/components/ui/clean-card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, Target, BookOpen } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: '2023',
      title: 'Started Cyber Security Journey',
      description: 'Began studying cybersecurity fundamentals and network security',
      status: 'completed'
    },
    {
      year: '2024',
      title: 'CCNA Studies',
      description: 'Currently pursuing Cisco Certified Network Associate certification',
      status: 'current'
    },
    {
      year: '2025',
      title: 'A-Level Completion',
      description: 'Planning to complete A-Levels with focus on Computer Science',
      status: 'planned'
    },
    {
      year: '2026',
      title: 'University & Advanced Certifications',
      description: 'Pursuing degree in Cybersecurity and additional industry certifications',
      status: 'planned'
    }
  ];

  const certifications = [
    { name: 'CCNA', status: 'In Progress', progress: 75 },
    { name: 'CompTIA Security+', status: 'Planned', progress: 0 },
    { name: 'CEH', status: 'Planned', progress: 0 },
    { name: 'CISSP', status: 'Long-term Goal', progress: 0 }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about cybersecurity, technology, and building secure digital infrastructures
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CleanCard>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">My Journey</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                I'm a dedicated cybersecurity student with a passion for protecting digital assets and understanding complex security frameworks. My journey began with a fascination for how systems work and evolved into a commitment to securing them.
              </p>
              <p className="text-muted-foreground mb-4">
                Currently building my knowledge through hands-on projects, certifications, and practical experience with enterprise-grade security tools and networking equipment.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-primary border-primary">Network Security</Badge>
                <Badge variant="outline" className="text-primary border-primary">Incident Response</Badge>
                <Badge variant="outline" className="text-primary border-primary">Risk Assessment</Badge>
                <Badge variant="outline" className="text-primary border-primary">Penetration Testing</Badge>
              </div>
            </CleanCard>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CleanCard>
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-accent" />
                <h2 className="text-2xl font-bold">Career Goals</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-primary mb-1">Short-term (1-2 years)</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete CCNA certification and gain practical experience with network security implementations
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-semibold text-accent mb-1">Medium-term (3-5 years)</h3>
                  <p className="text-muted-foreground text-sm">
                    Obtain Security+ and CEH certifications, work in SOC or incident response roles
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h3 className="font-semibold text-primary mb-1">Long-term (5+ years)</h3>
                  <p className="text-muted-foreground text-sm">
                    Achieve CISO position, leading cybersecurity strategy and risk management
                  </p>
                </div>
              </div>
            </CleanCard>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Education Timeline</h2>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    item.status === 'completed' ? 'bg-primary text-background' :
                    item.status === 'current' ? 'bg-accent text-background animate-pulse' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {item.year.slice(-2)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <CleanCard hoverable={false} className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <Badge variant={item.status === 'completed' ? 'default' : 
                                      item.status === 'current' ? 'secondary' : 'outline'}>
                          {item.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CleanCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-bold">Certifications & Progress</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                <CleanCard className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-lg">{cert.name}</h3>
                    <Badge variant={cert.progress > 0 ? 'default' : 'outline'}>
                      {cert.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${cert.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{cert.progress}% Complete</p>
                </CleanCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};