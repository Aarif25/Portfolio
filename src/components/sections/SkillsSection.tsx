import { motion } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Three.js', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'Redis'],
  },
  {
    category: 'AI & ML',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'Linux', 'Figma', 'Vercel', 'AWS'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            What I work <span className="font-serif-italic text-primary">with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5 pb-3 border-b border-border/50">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.1 + si * 0.04 }}
                    whileHover={{ 
                      y: -2, 
                      borderColor: 'hsl(38 92% 60% / 0.5)',
                      color: 'hsl(38 92% 60%)',
                    }}
                    className="px-4 py-2 text-sm text-foreground border border-border rounded-full cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
