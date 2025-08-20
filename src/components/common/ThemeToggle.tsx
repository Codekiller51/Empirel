import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 bg-neutral-300 dark:bg-neutral-600 rounded-full p-1 transition-colors duration-300"
      whileTap={{ scale: 0.95 }}
      title={theme === 'light' ? t('theme.dark') : t('theme.light')}
    >
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: theme === 'dark' ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {theme === 'light' ? (
          <Sun size={12} className="text-yellow-500" />
        ) : (
          <Moon size={12} className="text-blue-400" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;