import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 1.5, times: [0, 0.2, 0.8, 1] }}
          className="font-mono text-sm text-primary tracking-[0.3em] glow-text-cyan"
        >
          INITIALIZING SYSTEM...
        </motion.p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '12rem' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="h-px bg-primary mt-4 mx-auto"
          style={{ boxShadow: '0 0 10px hsl(195 90% 55%)' }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
