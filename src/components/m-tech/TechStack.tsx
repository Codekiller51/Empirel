import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const technologies = [
  { name: 'React', level: 95 },
  { name: 'Node.js', level: 90 },
  { name: 'AWS', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'TypeScript', level: 90 },
  { name: 'Docker', level: 85 },
  { name: 'Kubernetes', level: 80 },
  { name: 'TensorFlow', level: 75 },
];

const TechStack = () => {
  return (
    <Section bgColor="bg-neutral-100">
      <SectionTitle
        title="Our Technology Stack"
        subtitle="We leverage the latest technologies to build scalable, efficient, and future-proof solutions."
        accentColor="bg-mtech-accent"
      />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="space-y-6">
            {technologies.map((tech, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-primary-dark">{tech.name}</span>
                  <span className="text-mtech-accent">{tech.level}%</span>
                </div>
                <div className="h-2 bg-neutral-200 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-mtech-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-4">Why Our Tech Stack Matters</h3>
            <p className="text-neutral-700 mb-4">
              We carefully select the best technologies for each project to ensure optimal performance, scalability, and long-term maintainability. Our expertise spans across multiple platforms and frameworks, allowing us to build solutions that precisely match your business requirements.
            </p>
            <p className="text-neutral-700 mb-4">
              Our development team stays at the forefront of technological advancements, continuously incorporating new tools and methodologies to improve our delivery capabilities.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-mtech-accent">50+</span>
                <span className="text-neutral-600">Tech Certifications</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-mtech-accent">12+</span>
                <span className="text-neutral-600">Years Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default TechStack;