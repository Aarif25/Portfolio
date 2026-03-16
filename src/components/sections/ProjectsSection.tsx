import { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  number: string;
}

const projects: Project[] = [
  {
    title: 'Neural Dashboard',
    description: 'Real-time ML model monitoring dashboard with WebSocket data streaming, interactive visualizations, and automated alerts for model drift detection.',
    tech: ['React', 'Python', 'TensorFlow', 'WebSocket'],
    github: '#',
    live: '#',
    number: '01',
  },
  {
    title: 'CloudSync API',
    description: 'Scalable REST API with microservices architecture, JWT authentication, rate limiting, and comprehensive test coverage for cloud file synchronization.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    github: '#',
    live: '#',
    number: '02',
  },
  {
    title: 'DevFlow',
    description: 'Full-stack project management platform with real-time collaboration, Kanban boards, sprint planning, and integrated CI/CD pipeline monitoring.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    github: '#',
    live: '#',
    number: '03',
  },
  {
    title: 'PixelForge',
    description: 'AI-powered image generation and editing tool using diffusion models, with a WebGL-based canvas for real-time style transfer and compositing.',
    tech: ['React', 'Three.js', 'Python', 'CUDA'],
    github: '#',
    live: '#',
    number: '04',
  },
];

const ProjectCard = ({ project, onClick }: { project: Project; onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mx = useSpring(x, { damping: 25, stiffness: 200 });
  const my = useSpring(y, { damping: 25, stiffness: 200 });
  const rotateX = useTransform(my, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(mx, [-0.5, 0.5], ['-5deg', '5deg']);

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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      onClick={onClick}
      className="group relative cursor-pointer py-8 md:py-12 border-b border-border/50 hover:border-primary/30 transition-colors"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
        <span className="font-mono text-xs text-muted-foreground">{project.number}</span>
        <h3 className="text-2xl md:text-4xl font-bold tracking-tight group-hover:text-primary transition-colors flex-1">
          {project.title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          {project.tech.slice(0, 3).map((t) => (
            <span key={t} className="text-[11px] font-mono text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <motion.span
          className="hidden md:block text-muted-foreground group-hover:text-primary transition-colors"
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
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
    <div className="absolute inset-0 bg-background/90 backdrop-blur-lg" />
    <motion.div
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.95, opacity: 0, y: 20 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      onClick={(e) => e.stopPropagation()}
      className="relative z-10 bg-card border border-border rounded-2xl p-8 md:p-12 max-w-2xl w-full"
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-muted-foreground hover:text-foreground text-sm font-mono">
        Close ×
      </button>
      <span className="font-mono text-xs text-primary mb-4 block">{project.number}</span>
      <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{project.title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-foreground border border-border rounded-full px-3 py-1">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        <a href={project.github} className="px-5 py-2 rounded-full border border-border hover:border-primary/50 text-sm transition-colors">
          GitHub
        </a>
        <a href={project.live} className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm hover:brightness-110 transition-all">
          Live Demo
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Selected <span className="font-serif-italic text-primary">work</span>
          </h2>
        </motion.div>

        <div className="border-t border-border/50">
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
