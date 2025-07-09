import { useState } from 'react';
import { motion } from 'framer-motion';
import { CleanCard } from '@/components/ui/clean-card';
import { CleanButton } from '@/components/ui/clean-button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  Terminal, 
  User, 
  MessageSquare 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/freddie',
      color: 'hover:text-primary'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/freddie',
      color: 'hover:text-accent'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:hello@freddie.dev',
      color: 'hover:text-primary'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss cybersecurity, technology, or potential collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CleanCard className="p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <User className="w-4 h-4" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, question, or just say hello..."
                    rows={6}
                    required
                    className="bg-background/50 border-border focus:border-primary transition-colors resize-none"
                  />
                </div>

                <CleanButton type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </CleanButton>
              </form>

              {/* Terminal-style footer */}
              <div className="mt-8 p-4 bg-muted/20 rounded-lg border border-border/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span className="text-xs text-muted-foreground ml-2">secure-contact.sh</span>
                </div>
                <div className="font-mono text-sm text-primary">
                  <p>$ <span className="text-foreground">All messages are encrypted and secure</span></p>
                  <p>$ <span className="text-foreground">Response time: &lt; 24 hours</span></p>
                  <p className="text-primary">Connection established... <span className="animate-pulse">|</span></p>
                </div>
              </div>
            </CleanCard>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Social Links */}
            <CleanCard className="p-8">
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/40 transition-all duration-300 ${link.color} group`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    <span className="font-medium">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </CleanCard>

            {/* Availability */}
            <CleanCard className="p-8">
              <h2 className="text-2xl font-bold mb-6">Availability</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">Available for cybersecurity discussions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-sm">Open to project collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm">Seeking mentorship opportunities</span>
                </div>
              </div>
            </CleanCard>

            {/* Quick Contact */}
            <CleanCard className="p-8">
              <h2 className="text-2xl font-bold mb-6">Quick Contact</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  For urgent matters or quick questions, feel free to reach out directly:
                </p>
                <div className="flex flex-col gap-3">
                  <CleanButton
                    variant="outline"
                    className="justify-start"
                    onClick={() => window.open('mailto:hello@freddie.dev', '_blank')}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    hello@freddie.dev
                  </CleanButton>
                  <CleanButton
                    variant="outline"
                    className="justify-start"
                    onClick={() => window.open('https://linkedin.com/in/freddie', '_blank')}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn DM
                  </CleanButton>
                </div>
              </div>
            </CleanCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
};