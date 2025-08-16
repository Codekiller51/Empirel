import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  color?: 'light' | 'dark';
  accentColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = false,
  color = 'dark',
  accentColor = 'bg-primary-gold',
}) => {
  const textColorClass = color === 'light' ? 'text-white' : 'text-primary-dark';
  const subtitleColorClass = color === 'light' ? 'text-neutral-300' : 'text-neutral-600';
  const alignment = center ? 'text-center mx-auto' : '';
  
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "40px",
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <div className={`mb-12 ${alignment}`}>
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold ${textColorClass}`}
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>
      
      <motion.div 
        className={`h-1 ${accentColor} mt-4 mb-6 ${center ? 'mx-auto' : ''}`}
        variants={lineVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      />
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${subtitleColorClass} max-w-2xl ${center ? 'mx-auto' : ''}`}
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;