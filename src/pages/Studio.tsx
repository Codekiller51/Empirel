import { motion } from 'framer-motion';
import StudioHero from '../components/studio/StudioHero';
import ProjectGallery from '../components/studio/ProjectGallery';
import CreativeProcess from '../components/studio/CreativeProcess';
import BehindTheScenes from '../components/studio/BehindTheScenes';
import InstagramFeed from '../components/common/InstagramFeed';
import Button from '../components/common/Button';

// Sample Instagram posts for Studio
const studioInstagramPosts = [
  {
    id: '1',
    image: '/product-1.jpeg',
    caption: 'Luxury brand photoshoot',
    likes: 678,
    comments: 34,
    permalink: 'https://instagram.com/p/studio1'
  },
  {
    id: '2',
    image: '/product-2.jpeg',
    caption: 'Product photography session',
    likes: 543,
    comments: 28,
    permalink: 'https://instagram.com/p/studio2'
  },
  {
    id: '3',
    image: '/fashion-1.jpeg',
    caption: 'Fashion lookbook creation',
    likes: 789,
    comments: 42,
    permalink: 'https://instagram.com/p/studio3'
  },
  {
    id: '4',
    image: '/shoot-1.jpeg',
    caption: 'Behind the scenes magic',
    likes: 456,
    comments: 23,
    permalink: 'https://instagram.com/p/studio4'
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Restaurant brand identity',
    likes: 612,
    comments: 31,
    permalink: 'https://instagram.com/p/studio5'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Studio setup for video',
    likes: 398,
    comments: 19,
    permalink: 'https://instagram.com/p/studio6'
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Creative team brainstorming',
    likes: 523,
    comments: 26,
    permalink: 'https://instagram.com/p/studio7'
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/7147720/pexels-photo-7147720.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Equipment and lighting setup',
    likes: 445,
    comments: 22,
    permalink: 'https://instagram.com/p/studio8'
  }
];

const Studio = () => {
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
      <StudioHero />
      <ProjectGallery />
      <CreativeProcess />
      <BehindTheScenes />
      
      {/* Instagram Feed */}
      <InstagramFeed 
        posts={studioInstagramPosts}
        title="Latest from EmpireL Studio"
        accentColor="studio-accent"
        department="studio"
      />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-studio-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Bring Your Creative Vision to Life?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Let our studio team help you create stunning visuals and content that elevate your brand.
          </p>
          <Button size="lg" colorScheme="studio" to="/contact">
            Start Your Project
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Studio;