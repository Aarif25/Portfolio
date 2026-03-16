import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-16">
          {/* Left col — large serif quote */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-7"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary mb-8">About</p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
              I care about <span className="font-serif-italic text-primary">craft</span>, 
              {' '}performance, and making things that{' '}
              <span className="font-serif-italic text-primary">feel</span> right.
            </h2>
            <div className="space-y-5 max-w-lg">
              <p className="text-muted-foreground leading-relaxed">
                I'm a CS student who fell in love with building for the web. 
                I obsess over the details — from pixel-perfect interfaces to the architecture underneath.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Right now I'm deep into the MERN stack, exploring how AI can augment 
                developer workflows, and solving problems on Codeforces when I need a break.
              </p>
            </div>
          </motion.div>

          {/* Right col — personal details */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5 md:pt-24"
          >
            <div className="space-y-6">
              {[
                { label: 'Currently', value: 'CS Student & Freelancer' },
                { label: 'Focus', value: 'Full Stack · AI/ML · Systems' },
                { label: 'Tools', value: 'React · Node · Python · MongoDB' },
                { label: 'Fun fact', value: '500+ CP problems solved' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex flex-col gap-1 pb-4 border-b border-border/50"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</span>
                  <span className="text-foreground text-sm">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
