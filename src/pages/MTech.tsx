import { motion } from 'framer-motion';
import TechHero from '../components/m-tech/TechHero';
import TechServices from '../components/m-tech/TechServices';
import TechStack from '../components/m-tech/TechStack';
import ProjectShowcase from '../components/m-tech/ProjectShowcase';
import InstagramFeed from '../components/common/InstagramFeed';
import Button from '../components/common/Button';

// Sample Instagram posts for M-Tech
const mtechInstagramPosts = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Latest cloud infrastructure deployment',
    likes: 245,
    comments: 12,
    permalink: 'https://instagram.com/p/example1'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'AI development in progress',
    likes: 189,
    comments: 8,
    permalink: 'https://instagram.com/p/example2'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'E-commerce platform launch',
    likes: 312,
    comments: 15,
    permalink: 'https://instagram.com/p/example3'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Healthcare system integration',
    likes: 156,
    comments: 6,
    permalink: 'https://instagram.com/p/example4'
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Team collaboration session',
    likes: 203,
    comments: 9,
    permalink: 'https://instagram.com/p/example5'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'IoT fleet management demo',
    likes: 278,
    comments: 11,
    permalink: 'https://instagram.com/p/example6'
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Mobile app development',
    likes: 167,
    comments: 7,
    permalink: 'https://instagram.com/p/example7'
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'UI/UX design process',
    likes: 234,
    comments: 13,
    permalink: 'https://instagram.com/p/example8'
  }
];

const MTech = () => {
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
      <TechHero />
      <TechServices />
      <TechStack />
      <ProjectShowcase />
      
      {/* Instagram Feed */}
      <InstagramFeed 
        posts={mtechInstagramPosts}
        title="Latest from EmpireL Technology"
        accentColor="mtech-accent"
        department="mtech"
      />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-mtech-accent/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Our tech solutions are designed to optimize your operations, improve efficiency, and drive growth.
          </p>
          <Button size="lg" colorScheme="mtech" to="/contact">
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default MTech;