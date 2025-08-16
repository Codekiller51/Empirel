import { motion } from 'framer-motion';
import MarketingHero from '../components/marketing/MarketingHero';
import MarketingServices from '../components/marketing/MarketingServices';
import MetricsDashboard from '../components/marketing/MetricsDashboard';
import CaseStudies from '../components/marketing/CaseStudies';
import InstagramFeed from '../components/common/InstagramFeed';
import Button from '../components/common/Button';

// Sample Instagram posts for Marketing
const marketingInstagramPosts = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Digital marketing campaign results',
    likes: 456,
    comments: 23,
    permalink: 'https://instagram.com/p/marketing1'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'SEO strategy workshop',
    likes: 312,
    comments: 18,
    permalink: 'https://instagram.com/p/marketing2'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'E-commerce growth analytics',
    likes: 389,
    comments: 21,
    permalink: 'https://instagram.com/p/marketing3'
  },
  {
    id: '4',
    image: '/1.jpeg',
    caption: 'B2B lead generation success',
    likes: 267,
    comments: 14,
    permalink: 'https://instagram.com/p/marketing4'
  },
  {
    id: '5',
    image: '/3.jpg',
    caption: 'Local business marketing',
    likes: 198,
    comments: 12,
    permalink: 'https://instagram.com/p/marketing5'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Website redesign project',
    likes: 345,
    comments: 19,
    permalink: 'https://instagram.com/p/marketing6'
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Social media strategy',
    likes: 423,
    comments: 25,
    permalink: 'https://instagram.com/p/marketing7'
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2',
    caption: 'Brand video production',
    likes: 512,
    comments: 31,
    permalink: 'https://instagram.com/p/marketing8'
  }
];

const Marketing = () => {
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
      <MarketingHero />
      <MarketingServices />
      <MetricsDashboard />
      <CaseStudies />
      
      {/* Instagram Feed */}
      <InstagramFeed 
        posts={marketingInstagramPosts}
        title="Latest from EmpireL Marketing"
        accentColor="marketing-accent"
        department="marketing"
      />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-marketing-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
            Get a complimentary marketing audit and discover untapped opportunities for your business.
          </p>
          <Button size="lg" colorScheme="marketing" to="/contact">
            Get Your Free Audit
          </Button>
        </div>
      </section>
    </motion.div>
  );
};

export default Marketing;