import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 1] }}
        transition={{ duration: 1.2, times: [0, 0.2, 0.7, 1] }}
        className="text-center"
      >
        <p className="text-2xl font-semibold tracking-tight">
          <span className="text-primary">A</span>
          <span className="text-muted-foreground">M</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
