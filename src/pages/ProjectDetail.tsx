import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { CleanCard } from '@/components/ui/clean-card';
import { CleanButton } from '@/components/ui/clean-button';
import { Badge } from '@/components/ui/badge';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { getProjectBySlug } from '@/data';
import { getStatusColor } from '@/types/project';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft,
  Calendar,
  Users,
  Code,
  Play
} from 'lucide-react';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Get project data from external file
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <CleanButton onClick={() => navigate('/projects')} className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </CleanButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <CleanButton
            variant="outline"
            onClick={() => navigate('/projects')}
            className="mb-4 flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </CleanButton>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-lg bg-primary/10">
              <project.icon className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
          </div>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <CleanCard className="p-6 text-center">
            <Calendar className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Timeline</h3>
            <p className="text-muted-foreground">{project.timeline}</p>
          </CleanCard>
          <CleanCard className="p-6 text-center">
            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Team</h3>
            <p className="text-muted-foreground">{project.team}</p>
          </CleanCard>
          <CleanCard className="p-6 text-center">
            <Code className="w-6 h-6 text-primary mx-auto mb-2" />
            <h3 className="font-semibold mb-1">Technologies</h3>
            <p className="text-muted-foreground">{project.technologies.length} used</p>
          </CleanCard>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CleanCard className="p-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </CleanCard>
            </motion.div>

            {/* Project Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <ProjectCarousel projectSlug={slug || ''} />
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CleanCard className="p-6">
                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CleanCard>
            </motion.div>

            {/* Challenges & Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <CleanCard className="p-6">
                <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CleanCard>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CleanCard className="p-6">
                <h2 className="text-2xl font-bold mb-4">Outcomes & Impact</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </CleanCard>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CleanCard className="p-6">
                <h3 className="font-bold mb-4">Project Links</h3>
                <div className="space-y-3">
                  <CleanButton
                    className="w-full flex items-center justify-center"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </CleanButton>
                  <CleanButton
                    variant="outline"
                    className="w-full flex items-center justify-center"
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </CleanButton>
                  {project.status === 'Completed' && (
                    <CleanButton
                      variant="outline"
                      className="w-full flex items-center justify-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Case Study
                    </CleanButton>
                  )}
                </div>
              </CleanCard>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CleanCard className="p-6">
                <h3 className="font-bold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CleanCard>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <CleanCard className="p-6">
                <h3 className="font-bold mb-4">Project Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CleanCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
