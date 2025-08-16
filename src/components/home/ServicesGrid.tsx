import { Code, TrendingUp, PaintBucket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const services = [
  {
    title: 'M-Tech',
    description: 'Cutting-edge technology solutions including software development, system integration, and digital infrastructure.',
    icon: <Code size={48} className="text-mtech-accent" />,
    bgClass: 'bg-mtech-light',
    link: '/m-tech',
    accentColor: 'bg-mtech-accent',
  },
  {
    title: 'Marketing',
    description: 'Strategic marketing services that drive growth through digital campaigns, brand strategy, and optimization.',
    icon: <TrendingUp size={48} className="text-marketing-accent" />,
    bgClass: 'bg-marketing-light',
    link: '/marketing',
    accentColor: 'bg-marketing-accent',
  },
  {
    title: 'Studio',
    description: 'Creative studio solutions including design, content production, and multimedia development.',
    icon: <PaintBucket size={48} className="text-studio-accent" />,
    bgClass: 'bg-studio-light',
    link: '/studio',
    accentColor: 'bg-studio-accent',
  },
];

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Section>
      <SectionTitle
        title="Our Services"
        subtitle="Explore our three distinct service divisions, each designed to help your business thrive in the digital landscape."
        center
      />

      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className={`${service.bgClass} rounded-lg p-8 shadow-soft transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover group`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-primary-dark mb-4">{service.title}</h3>
              <div className={`w-16 h-1 ${service.accentColor} mb-4 transition-all duration-300 group-hover:w-24`}></div>
              <p className="text-neutral-700 mb-6">{service.description}</p>
              <Link 
                to={service.link}
                className="font-medium text-primary-dark hover:underline inline-flex items-center"
              >
                Learn More
                <svg 
                  className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default ServicesGrid;