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
    title: 'Sign Language Translator',
    description: 'Real-time sign language recognition and translation app using a custom-trained CNN model, WebSocket streaming, and a React frontend for seamless communication between deaf and hearing users.',
    tech: ['React', 'Python', 'TensorFlow', 'MediaPipe'],
    github: 'https://github.com/Aarif25/Sign-Language-translator',
    live: '#',
    number: '01',
  },
  {
    title: 'LocalEyes',
    description: 'LocalEyes is a crowdsourced obstacle-reporting app designed to help people navigate roads more safely and efficiently. Users can report obstacles like potholes, waterlogging, fallen trees, debris, or construction work by simply uploading a photo or entering a short description.',
    tech: ['React','Gemini','Node.js', 'Express', 'MongoDB', 'Vercel'],
    github: 'https://github.com/Aarif25/LocalEyes',
    live: '#',
    number: '02',
  },
  {
    title: 'College Technical and Academic Placement Assessment System',
    description: 'A comprehensive system for assessing and placing students in appropriate technical and academic programs based on their coding skills and interests.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB','Python', 'Vercel'],
    github: 'https://github.com/Aarif25/coding_analyst',
    live: '#',
    number: '03',
  },
  {
    title: 'Portfolio',
    description: 'Personal portfolio website showcasing projects, skills, and experience.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    github: 'https://github.com/Aarif25/luminous-canvas',
    live: '',
    number: '04',
  },
  {
    title: 'Simon Says',
    description: 'Simon Says is a web-based memory game that challenges players to remember and replicate increasingly complex sequences of colors and sounds.',
    tech: ['React'],
    github: 'https://github.com/Aarif25/Simon-says',
    live: '#',
    number: '05',
  },
  {
    title: 'Women Safety App',
    description: 'A web application designed to enhance the safety of women by providing features such as real-time location tracking, emergency SOS alerts, and a community reporting system for unsafe areas.',
    tech: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/Aarif25/Women-Safety-App',
    live: '#',
    number: '06',
  }

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
