import { motion } from 'framer-motion';

const timeline = [
  { year: '2024', title: 'Full Stack Developer', org: 'Freelance & Open Source', desc: 'Building production-grade web apps and contributing to open-source ML tooling.' },
  { year: '2023', title: 'AI/ML Research', org: 'University Lab', desc: 'Developed neural network models for NLP tasks. Published findings on transformer optimization.' },
  { year: '2023', title: 'Backend Developer Intern', org: 'Tech Startup', desc: 'Designed microservices architecture handling 10K+ requests/min with Node.js and Redis.' },
  { year: '2022', title: 'Competitive Programming', org: 'CodeForces & LeetCode', desc: 'Solved 500+ problems. Specialized in graph algorithms and dynamic programming.' },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-4">Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            The <span className="font-serif-italic text-primary">journey</span> so far
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title + item.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid grid-cols-[60px_1fr] md:grid-cols-[100px_1fr] gap-4 md:gap-8 pb-12 mb-12 border-b border-border/30 last:border-0"
            >
              <div className="pt-1">
                <span className="font-mono text-xs text-primary tracking-wider">{item.year}</span>
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono mb-3">{item.org}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
