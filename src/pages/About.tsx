import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const teamMembers = [
    {
      name: 'Albert A. Ngapemba',
      role: 'Founder & Managing Director',
      image: '/Team/ALBERT_A_NGAPEMBA.jpeg',
      bio: 'Visionary leader with 8+ years in digital marketing and business development. Albert founded EmpireL with a mission to transform how Tanzanian businesses engage with digital technology and marketing.',
    },
    {
      name: 'Godwin S. Baltazary',
      role: 'Creative Lead',
      image: '/Team/GODWIN_S_BALTAZARY.jpeg',
      bio: 'Award-winning creative director specializing in brand identity and visual storytelling. Godwin has led creative campaigns for over 100 brands across East Africa.',
    },
    {
      name: 'Veronica A. Mkela',
      role: 'Accounts & Finance',
      image: '/Team/VERONICA_A_MKELA.jpeg',
      bio: 'CPA with expertise in financial planning and business operations. Veronica ensures our projects are delivered on time and within budget while maintaining profitability.',
    },
    {
      name: 'Ebenezer E. Mashambo',
      role: 'H.O.D Outreach & Research',
      image: '/Team/EBENEZER_E_MASHAMBO.jpeg',
      bio: 'Market research specialist and business development expert. Ebenezer identifies new opportunities and ensures our services meet evolving market demands.',
    },
    {
      name: 'Jackline M. John',
      role: 'H.O.D Public Relations',
      image: '/Team/JACKLINE_M_JOHN.jpeg',
      bio: 'Communications expert with a background in journalism and public relations. Jackline manages our brand reputation and media relationships across Tanzania.',
    },
    {
      name: 'Hadson D. Rajab',
      role: 'Head IT Department',
      image: '/Team/Rajab__.jpeg',
      bio: 'Senior software engineer with expertise in full-stack development and cloud architecture. Hadson leads our technical team in delivering cutting-edge solutions.',
    },
    {
      name: 'Anderson M. Malando',
      role: 'Vice IT Department',
      image: '/Team/Anderson.png',
      bio: 'Full-stack developer and digital marketing specialist. Anderson bridges the gap between technical implementation and marketing strategy.',
    },  
];

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries and embracing new technologies to deliver cutting-edge solutions.',
  },
  {
    title: 'Excellence',
    description: 'Maintaining the highest standards in everything we do, from code to creative design.',
  },
  {
    title: 'Collaboration',
    description: 'Working together across disciplines to create integrated, powerful solutions.',
  },
  {
    title: 'Integrity',
    description: 'Building trust through transparency, honesty, and ethical business practices.',
  },
];

const About = () => {
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
      {/* Hero Section */}
      <Section bgColor="bg-primary-dark" paddingY="xl">
        <div className="text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Building Digital Legacies
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Since 2020, we've been helping businesses transform their digital presence and create lasting impact in the digital world.
          </motion.p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Our Mission"
              subtitle="To empower Tanzanian and international businesses with innovative digital solutions that drive sustainable growth and create lasting impact in the digital economy."
            />
            <p className="text-neutral-700 dark:text-neutral-300">
              Since 2020, EmpireL has been at the forefront of Tanzania's digital transformation. We combine cutting-edge technology, data-driven marketing strategies, and creative excellence to help businesses of all sizes establish a powerful digital presence. Our integrated approach ensures that every aspect of your digital journey is carefully planned and expertly executed.
            </p>
          </div>
          <div>
            <SectionTitle
              title="Our Vision"
              subtitle="To be East Africa's premier digital agency, recognized for transforming businesses through innovative technology and creative solutions."
            />
            <p className="text-neutral-700 dark:text-neutral-300">
              We envision a future where every Tanzanian business, from local startups to established enterprises, has access to world-class digital solutions. Our goal is to bridge the digital divide and position Tanzania as a leader in the African digital economy while serving clients globally.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section bgColor="bg-neutral-100">
        <SectionTitle
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center h-full">
                <h3 className="text-xl font-bold text-primary-dark mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <SectionTitle
          title="Meet Our Team"
          subtitle="The passionate professionals behind our success"
          center
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-1">{member.name}</h3>
                  <p className="text-primary-gold font-medium mb-3">{member.role}</p>
                  <p className="text-neutral-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section bgColor="bg-primary-dark" paddingY="lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '80+', label: 'Clients Served' },
            { number: '150+', label: 'Projects Completed' },
            { number: '12', label: 'Countries Reached' },
            { number: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-primary-gold mb-2">{stat.number}</div>
              <div className="text-white">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default About;