import { motion } from 'framer-motion';
import NeuralLattice from '../canvas/NeuralLattice';

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralLattice />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-6 glow-text-cyan"
        >
          [SYSTEM_INIT] // PORTFOLIO_v2.0
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-display font-mono font-bold tracking-tighter mb-4"
        >
          <span className="gradient-text">AARIF</span>
          <br />
          <span className="text-foreground">MANSOORI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-mono text-sm md:text-base text-muted-foreground max-w-xl mx-auto mb-10 tracking-wide"
        >
          Full Stack Developer // AI & ML Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-mono text-sm uppercase tracking-widest hover:opacity-90 transition-opacity glow-border"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-8 py-3 rounded-lg border border-border hover:border-primary/50 text-foreground font-mono text-sm uppercase tracking-widest transition-colors"
          >
            Contact
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
