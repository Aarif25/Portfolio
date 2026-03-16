import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 80 },
  { name: 'Express', level: 82 },
  { name: 'Python', level: 78 },
  { name: 'Machine Learning', level: 70 },
  { name: 'Three.js', level: 65 },
  { name: 'TypeScript', level: 85 },
  { name: 'Git', level: 88 },
  { name: 'Docker', level: 60 },
  { name: 'System Design', level: 72 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// SKILLS</p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tighter mb-16">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="skill-item glass-surface rounded-xl p-5 group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(195 90% 55%), hsl(270 60% 50%))`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
