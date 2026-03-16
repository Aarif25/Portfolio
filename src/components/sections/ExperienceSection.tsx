import { motion } from 'framer-motion';

const timeline = [
  { year: '2024', title: 'Full Stack Developer', org: 'Freelance / Open Source', desc: 'Building production-grade web apps and contributing to open-source ML tooling.' },
  { year: '2023', title: 'AI/ML Research', org: 'University Lab', desc: 'Developed neural network models for NLP tasks. Published findings on transformer optimization.' },
  { year: '2023', title: 'Backend Developer Intern', org: 'Tech Startup', desc: 'Designed microservices architecture handling 10K+ requests/min with Node.js and Redis.' },
  { year: '2022', title: 'Competitive Programming', org: 'CodeForces / LeetCode', desc: 'Solved 500+ problems. Specialized in graph algorithms and dynamic programming.' },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">// EXPERIENCE</p>
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tighter mb-16">
            Learning <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-row`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 z-10"
                style={{ boxShadow: '0 0 15px hsl(195 90% 55% / 0.5)' }}
              />

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                <span className="font-mono text-xs text-primary tracking-widest">{item.year}</span>
                <h3 className="text-xl font-mono font-bold tracking-tighter mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-mono mb-2">{item.org}</p>
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
