import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Initializing SYN Carpets Experience...",
    "Loading Luxury Flooring Gallery...",
    "Preparing Interactive Elements...",
    "Finalizing Professional Interface..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        
        const newStep = Math.floor((prev / 100) * steps.length);
        if (newStep !== currentStep && newStep < steps.length) {
          setCurrentStep(newStep);
        }
        
        return prev + 3; // Faster loading
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete, currentStep, steps.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-gray-900 via-black to-yellow-900 flex items-center justify-center"
      >
        {/* Simplified background */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10" />

        {/* Main Loading Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* SYN Carpet Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img 
                src="/SYN Carpet (1).png" 
                alt="SYN Carpets Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  console.log('Loading screen logo failed to load, using fallback');
                  // Fallback to gradient design if image fails
                  e.currentTarget.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center shadow-xl';
                  fallback.innerHTML = '<div class="w-10 h-10 bg-gradient-to-br from-yellow-800 to-amber-900 rounded-lg"></div>';
                  e.currentTarget.parentNode?.appendChild(fallback);
                }}
              />
              
              {/* Animated glow effect around logo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-amber-600/20 rounded-xl blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold text-white mb-2"
          >
            SYN Carpets
          </motion.h1>
          
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-yellow-300 mb-8 font-medium"
          >
            Luxury Flooring Redefined
          </motion.p>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
                className="h-full bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full"
              />
            </div>
            
            <div className="text-right mt-2">
              <span className="text-white/80 text-sm font-medium">{progress}%</span>
            </div>
          </div>

          {/* Loading Steps */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-white/70 text-sm"
          >
            {steps[currentStep]}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;