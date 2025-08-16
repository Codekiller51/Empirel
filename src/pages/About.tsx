import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';

const teamMembers = [
    {
      name: 'Albert A. Ngapemba',
      role: 'Founder & Managing Director',
      image: '/Team/ALBERT_A_NGAPEMBA.jpeg',
      bio: 'Leading our company\'s vision and strategic direction with innovative marketing solutions.',
    },
    {
      name: 'Godwin S. Baltazary',
      role: 'Creative Lead',
      image: '/Team/GODWIN_S_BALTAZARY.jpeg',
      bio: 'Bringing creative excellence and innovative design solutions to every project.',
    },
    {
      name: 'Veronica A. Mkela',
      role: 'Accounts & Finance',
      image: '/Team/VERONICA_A_MKELA.jpeg',
      bio: 'Managing our financial operations and ensuring sustainable growth.',
    },
    {
      name: 'Ebenezer E. Mashambo',
      role: 'H.O.D Outreach & Research',
      image: '/Team/EBENEZER_E_MASHAMBO.jpeg',
      bio: 'Leading our research initiatives and expanding our market presence.',
    },
    {
      name: 'Jackline M. John',
      role: 'H.O.D Public Relations',
      image: '/Team/JACKLINE_M_JOHN.jpeg',
      bio: 'Managing our public relations and building strong media relationships.',
    },
    {
      name: 'Hadson D. Rajab',
      role: 'Head IT Department',
      image: '/Team/Rajab__.jpeg',
      bio: 'Leads our IT team and oversees all digital operations.',
    },
    {
      name: 'Anderson M. Malando',
      role: 'Vice IT Department',
      image: '/Team/Anderson.png',
      bio: 'Supports IT operations and manages digital outreach.',
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
              subtitle="To empower businesses with innovative digital solutions that drive growth and create lasting impact."
            />
            <p className="text-neutral-700">
              We combine technology, marketing expertise, and creative excellence to help businesses thrive in the digital age. Our integrated approach ensures comprehensive solutions that address all aspects of digital presence.
            </p>
          </div>
          <div>
            <SectionTitle
              title="Our Vision"
              subtitle="To be the leading force in digital transformation, setting new standards for excellence and innovation."
            />
            <p className="text-neutral-700">
              We envision a future where every business, regardless of size, has access to enterprise-level digital solutions that drive growth and success in an increasingly connected world.
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
            { number: '100+', label: 'Clients Served' },
            { number: '250+', label: 'Projects Completed' },
            { number: '15+', label: 'Industry Awards' },
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