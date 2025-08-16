import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We begin by understanding your brand, vision, goals, and target audience to establish a solid foundation for the creative process.',
  },
  {
    number: '02',
    title: 'Concept Development',
    description: 'Our creative team develops multiple concepts, exploring different directions that align with your brand and project objectives.',
  },
  {
    number: '03',
    title: 'Production',
    description: 'Once a concept is approved, we move into the production phase, bringing the creative vision to life with precision and expertise.',
  },
  {
    number: '04',
    title: 'Refinement',
    description: 'We meticulously refine every detail through an iterative process to ensure the final deliverables exceed expectations.',
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'The completed work is delivered in all required formats, ready for immediate implementation across your marketing channels.',
  },
];

const CreativeProcess = () => {
  return (
    <Section bgColor="bg-primary-dark">
      <SectionTitle
        title="Our Creative Process"
        subtitle="We follow a structured creative process to ensure consistent, high-quality results for every project."
        color="light"
        accentColor="bg-studio-accent"
      />
      
      <div className="relative mt-20">
        {/* Connecting line */}
        <div className="absolute top-0 bottom-0 left-[42px] md:left-1/2 w-1 bg-studio-accent/30 -translate-x-1/2"></div>
        
        {/* Process steps */}
        {steps.map((step, index) => (
          <motion.div 
            key={index}
            className={`relative mb-16 last:mb-0 ${
              index % 2 === 0 ? 'md:pl-12 md:pr-0' : 'md:pr-12 md:pl-0'
            } pl-20`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`md:flex items-center ${index % 2 === 0 ? 'md:justify-end md:text-right' : ''}`}>
              {/* Step number circle */}
              <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 bg-studio-accent rounded-full flex items-center justify-center transform md:translate-x-[-50%]">
                <span className="text-white font-bold">{step.number}</span>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-lg">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-300">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default CreativeProcess;