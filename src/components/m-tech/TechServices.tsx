import { Server, Database, Globe, Shield, Cpu, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to address your specific business challenges and optimize operations.',
    icon: <Cpu size={48} className="text-mtech-accent" />,
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure, and optimized cloud solutions to enhance performance and reduce operational costs.',
    icon: <Server size={48} className="text-mtech-accent" />,
  },
  {
    title: 'Data Management',
    description: 'Comprehensive data strategies, from architecture design to analytics and business intelligence.',
    icon: <Database size={48} className="text-mtech-accent" />,
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your digital assets from threats and ensure compliance.',
    icon: <Shield size={48} className="text-mtech-accent" />,
  },
  {
    title: 'Web & Mobile Development',
    description: 'Responsive, high-performance web and mobile applications for seamless user experiences.',
    icon: <Globe size={48} className="text-mtech-accent" />,
  },
  {
    title: 'Business Intelligence',
    description: 'Data-driven insights and visualization tools to inform strategic decision-making and growth.',
    icon: <BarChart size={48} className="text-mtech-accent" />,
  },
];

const TechServices = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <Section id="services">
      <SectionTitle
        title="Our Tech Services"
        subtitle="Leveraging cutting-edge technologies to deliver powerful, scalable solutions for businesses of all sizes."
        center
        accentColor="bg-mtech-accent"
      />

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Card className="p-8 h-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-4">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default TechServices;