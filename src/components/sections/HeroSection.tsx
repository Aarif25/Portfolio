import { motion } from 'framer-motion';
import NeuralLattice from '../canvas/NeuralLattice';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden pb-12 md:pb-20">
      <NeuralLattice />

      <div className="relative z-10 container mx-auto px-6">
        {/* Top tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="absolute top-8 md:top-12 left-6 right-6 flex justify-between items-start"
        >
          <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase">
        
          </p>
          <p className="font-mono text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase hidden md:block">
            Based in Bhopal
          </p>
        </motion.div>

        {/* Main name — editorial asymmetric layout */}
        <div className="mb-12 md:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-huge font-bold tracking-tighter"
          >
            <span className="block text-foreground">Aarif</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-huge font-bold tracking-tighter md:text-right"
          >
            <span className="gradient-text-warm">Mansoori</span>
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-md">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              Full-stack developer & AI enthusiast building 
              <span className="text-foreground"> thoughtful digital experiences</span> — 
              one commit at a time.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all"
            >
              See my work
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-2.5 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary/50 transition-colors"
            >
              Say hello
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ height: ['0%', '100%'] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
          className="w-px bg-primary/40 origin-top"
          style={{ height: 40 }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
