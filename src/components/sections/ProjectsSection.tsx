import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  color: string;
}

const projects: Project[] = [
  {
    title: 'Neural Dashboard',
    description: 'Real-time ML model monitoring dashboard with WebSocket data streaming, interactive visualizations, and automated alerts for model drift detection.',
    tech: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    github: '#',
    live: '#',
    color: 'hsl(195 90% 55%)',
  },
  {
    title: 'CloudSync API',
    description: 'Scalable REST API with microservices architecture, JWT authentication, rate limiting, and comprehensive test coverage for cloud file synchronization.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    github: '#',
    live: '#',
    color: 'hsl(270 60% 50%)',
  },
  {
    title: 'DevFlow',
    description: 'Full-stack project management platform with real-time collaboration, Kanban boards, sprint planning, and integrated CI/CD pipeline monitoring.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#',
    color: 'hsl(150 60% 45%)',
  },
  {
    title: 'PixelForge',
    description: 'AI-powered image generation and editing tool using diffusion models, with a WebGL-based canvas for real-time style transfer and compositing.',
    tech: ['React', 'Three.js', 'Python', 'CUDA'],
    github: '#',
    live: '#',
    color: 'hsl(30 90% 55%)',
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x, { damping: 20, stiffness: 300 });
  const my = useSpring(y, { damping: 20, stiffness: 300 });
  const rotateX = useTransform(my, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mx, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onClick={onClick}
      className="group relative rounded-2xl glass-surface overflow-hidden cursor-pointer h-[320px] md:h-[380px]"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{ background: `radial-gradient(circle at 50% 50%, ${project.color}15, transparent 60%)` }}
      />
      <div className="relative z-10 p-8 flex flex-col h-full justify-between" style={{ transform: 'translateZ(30px)' }}>
        <div>
          <div className="w-3 h-3 rounded-full mb-6" style={{ background: project.color, boxShadow: `0 0 20px ${project.color}` }} />
          <h3 className="text-2xl md:text-3xl font-mono font-bold tracking-tighter mb-3">{project.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-[0.15em] font-mono text-muted-foreground/70 border border-border/50 rounded-full px-2.5 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] flex items-center justify-center p-6"
    onClick={onClose}
  >
    <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      onClick={(e) => e.stopPropagation()}
      className="relative z-10 glass-surface rounded-2xl p-8 md:p-12 max-w-2xl w-full glow-border"
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground font-mono text-sm">
        [ESC]
      </button>
      <div className="w-4 h-4 rounded-full mb-6" style={{ background: project.color, boxShadow: `0 0 30px ${project.color}` }} />
      <h3 className="text-3xl md:text-4xl font-mono font-bold tracking-tighter mb-4">{project.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono uppercase tracking-widest text-primary border border-primary/20 rounded-full px-3 py-1 bg-primary/5">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="px-6 py-2.5 rounded-lg border border-border hover:border-primary/50 font-mono text-sm uppercase tracking-widest transition-colors">
          GitHub
        </a>
        <a href={project.live} className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-opacity">
          Live Demo
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// PROJECTS</p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tighter mb-16">
            Selected <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
