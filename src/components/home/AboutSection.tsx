import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const AboutSection = () => {
  return (
    <Section bgColor="bg-neutral-100">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle
            title="Who We Are"
            subtitle="EmpireL is a premium digital agency dedicated to helping businesses build their digital legacy through innovative solutions."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-700 mb-6">
              Founded in 2020, we've rapidly established ourselves as industry leaders through our commitment to excellence and our unique three-division approach that allows us to provide comprehensive solutions tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-primary-gold mb-2">100+</div>
                <div className="text-sm text-neutral-700">Projects Completed</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-primary-gold mb-2">50+</div>
                <div className="text-sm text-neutral-700">Happy Clients</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-primary-gold mb-2">24/7</div>
                <div className="text-sm text-neutral-700">Customer Support</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-primary-gold mb-2">15+</div>
                <div className="text-sm text-neutral-700">Industry Awards</div>
              </div>
            </div>
            
            <Button to="/contact" size="lg">
              Work With Us
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/2.webp" 
              alt="EmpireL Team" 
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-gold rounded-lg -z-10"></div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;