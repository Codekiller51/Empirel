import { motion } from 'framer-motion';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
}) => {
  const hoverClasses = hoverEffect
    ? 'transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover'
    : '';

  return (
    <motion.div
      className={`bg-white dark:bg-neutral-800 rounded-lg shadow-soft overflow-hidden ${hoverClasses} ${className}`}
      onClick={onClick}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default Card;