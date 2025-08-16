import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  bgColor?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'none';
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({
  id,
  className = '',
  children,
  fullHeight = false,
  bgColor = 'bg-white',
  maxWidth = 'xl',
  paddingY = 'lg',
}) => {
  const heightClass = fullHeight ? 'min-h-screen' : '';
  
  const paddingClasses = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };
  
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
    none: '',
  };
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id={id}
      className={`${bgColor} ${paddingClasses[paddingY]} ${heightClass} ${className}`}
    >
      <motion.div 
        className={`container mx-auto px-4 ${maxWidth !== 'none' ? maxWidthClasses[maxWidth] : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;