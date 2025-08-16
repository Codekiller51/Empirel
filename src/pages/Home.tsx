import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import ServicesGrid from '../components/home/ServicesGrid';
import AboutSection from '../components/home/AboutSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import Button from '../components/common/Button';

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Hero />
      <ServicesGrid />
      <AboutSection />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Digital Legacy?
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help transform your business
            with our technology, marketing, and creative solutions.
          </p>
          <Button size="lg" to="/contact">
            Get in Touch
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;