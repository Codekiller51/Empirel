import { Search, AtSign, Award, BarChart2, Users, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const services = [
  {
    title: 'Search Engine Optimization',
    description: 'Comprehensive SEO strategies to improve visibility, rankings, and organic traffic to your website.',
    icon: <Search size={48} className="text-marketing-accent" />,
  },
  {
    title: 'Email Marketing',
    description: 'Targeted email campaigns that nurture leads, engage customers, and drive conversions.',
    icon: <AtSign size={48} className="text-marketing-accent" />,
  },
  {
    title: 'Brand Strategy',
    description: 'Distinctive brand positioning and messaging to elevate your market presence and build loyalty.',
    icon: <Award size={48} className="text-marketing-accent" />,
  },
  {
    title: 'Performance Marketing',
    description: 'Data-driven paid campaigns across multiple channels to maximize ROI and acquisition.',
    icon: <BarChart2 size={48} className="text-marketing-accent" />,
  },
  {
    title: 'Social Media Management',
    description: 'Strategic content creation and community engagement to build your brand across social platforms.',
    icon: <Users size={48} className="text-marketing-accent" />,
  },
  {
    title: 'Content Marketing',
    description: 'Compelling content strategies that educate, engage, and convert your target audience.',
    icon: <Megaphone size={48} className="text-marketing-accent" />,
  },
];

const MarketingServices = () => {
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
        title="Our Marketing Services"
        subtitle="Strategic marketing solutions designed to elevate your brand, engage your audience, and drive measurable business results."
        center
        accentColor="bg-marketing-accent"
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

export default MarketingServices;