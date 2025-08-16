import { motion } from 'framer-motion';
import TechHero from '../components/m-tech/TechHero';
import TechServices from '../components/m-tech/TechServices';
import TechStack from '../components/m-tech/TechStack';
import ProjectShowcase from '../components/m-tech/ProjectShowcase';
import Button from '../components/common/Button';

const MTech = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <TechHero />
      <TechServices />
      <TechStack />
      <ProjectShowcase />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-mtech-accent/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Our tech solutions are designed to optimize your operations, improve efficiency, and drive growth.
          </p>
          <Button size="lg" colorScheme="mtech" to="/contact">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default MTech;