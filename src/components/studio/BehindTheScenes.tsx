import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const BehindTheScenes = () => {
  const images = [
    'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  ];

  return (
    <Section bgColor="bg-neutral-100">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle
            title="Behind The Scenes"
            subtitle="Get a glimpse into our creative studio and the passionate team behind our stunning work."
            accentColor="bg-studio-accent"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-neutral-700 mb-6">
              Our studio is a hub of creativity where talented designers, photographers, videographers, and content creators collaborate to produce exceptional work. We believe in a hands-on approach, attention to detail, and pushing creative boundaries.
            </p>
            
            <p className="text-neutral-700 mb-6">
              Every project benefits from our collaborative environment, state-of-the-art equipment, and the diverse perspectives of our multidisciplinary team. We're passionate about what we do, and it shows in the quality of our work.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-studio-accent mb-2">15+</div>
                <div className="text-sm text-neutral-700">Creative Professionals</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-studio-accent mb-2">200+</div>
                <div className="text-sm text-neutral-700">Projects Completed</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-studio-accent mb-2">10+</div>
                <div className="text-sm text-neutral-700">Design Awards</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-soft">
                <div className="text-3xl font-bold text-studio-accent mb-2">8</div>
                <div className="text-sm text-neutral-700">Years of Excellence</div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              className="overflow-hidden rounded-lg shadow-soft"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image}
                alt={`Studio behind the scenes ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default BehindTheScenes;