import { motion } from 'framer-motion';
import MarketingHero from '../components/marketing/MarketingHero';
import MarketingServices from '../components/marketing/MarketingServices';
import MetricsDashboard from '../components/marketing/MetricsDashboard';
import CaseStudies from '../components/marketing/CaseStudies';
import Button from '../components/common/Button';

const Marketing = () => {
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
      <MarketingHero />
      <MarketingServices />
      <MetricsDashboard />
      <CaseStudies />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-marketing-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Get a complimentary marketing audit and discover untapped opportunities for your business.
          </p>
          <Button size="lg" colorScheme="marketing" to="/contact">
            Get Your Free Audit
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Marketing;