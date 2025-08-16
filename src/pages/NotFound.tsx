import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-neutral-100 p-4"
    >
      <div className="max-w-md w-full text-center">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-8xl font-bold text-primary-dark mb-4"
        >
          404
        </motion.h1>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 0.6 }}
          className="h-1 bg-primary-gold mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Page Not Found</h2>
        <p className="text-neutral-600 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button to="/" size="lg">
          Return to Homepage
        </Button>
      </div>
    </motion.div>
  );
};

export default NotFound;