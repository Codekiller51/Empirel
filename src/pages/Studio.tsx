import { motion } from 'framer-motion';
import StudioHero from '../components/studio/StudioHero';
import ProjectGallery from '../components/studio/ProjectGallery';
import CreativeProcess from '../components/studio/CreativeProcess';
import BehindTheScenes from '../components/studio/BehindTheScenes';
import Button from '../components/common/Button';

const Studio = () => {
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
      <StudioHero />
      <ProjectGallery />
      <CreativeProcess />
      <BehindTheScenes />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-studio-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Creative Vision to Life?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Let our studio team help you create stunning visuals and content that elevate your brand.
          </p>
          <Button size="lg" colorScheme="studio" to="/contact">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Studio;