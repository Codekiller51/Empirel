import { motion } from 'framer-motion';
import Section from '../common/Section';

const LocationMap = () => {
  return (
    <Section bgColor="bg-neutral-100" paddingY="sm">
      <motion.div
        className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095205466!2d-74.00425907416549!3d40.74076453658702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1683656719284!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="EmpireL Office Location"
        ></iframe>
      </motion.div>
    </Section>
  );
};

export default LocationMap;