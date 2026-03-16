import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Built', value: '15+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Avg LCP', value: '0.12s' },
  { label: 'Uptime', value: '99.9%' },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// ABOUT</p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tighter mb-8">
            Building the <span className="gradient-text">future</span> of the web
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm a Computer Science student passionate about crafting high-performance web applications 
              and exploring the intersection of AI and software engineering.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Specializing in the MERN stack, I build full-stack applications with a focus on 
              system design, scalability, and exceptional user experience. When I'm not coding, 
              you'll find me solving competitive programming challenges or training ML models.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              {['MERN Stack', 'AI/ML', 'System Design', 'Competitive Programming'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-mono uppercase tracking-wider text-primary border border-primary/20 rounded-full bg-primary/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="glass-surface rounded-xl p-6 glow-border">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring' }}
                >
                  <p className="text-3xl font-mono font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-2">{stat.label}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
