import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to progressive web apps and beyond.',
    author: 'EmpireL Tech Team',
    date: '2024-12-15',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Digital Marketing Strategies That Actually Work in 2025',
    excerpt: 'Discover proven digital marketing tactics that drive real results and ROI for businesses of all sizes.',
    author: 'EmpireL Marketing Team',
    date: '2024-12-12',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Behind the Lens: Creating Compelling Visual Content',
    excerpt: 'Learn the secrets of professional photography and videography that captivate audiences and tell powerful stories.',
    author: 'EmpireL Studio Team',
    date: '2024-12-10',
    category: 'Creative',
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Cloud Migration: A Complete Guide for Businesses',
    excerpt: 'Everything you need to know about migrating your business to the cloud, from planning to execution.',
    author: 'EmpireL Tech Team',
    date: '2024-12-08',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Building Brand Identity Through Visual Storytelling',
    excerpt: 'How to create a cohesive brand identity that resonates with your audience through powerful visual narratives.',
    author: 'EmpireL Studio Team',
    date: '2024-12-05',
    category: 'Creative',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'SEO in 2025: What You Need to Know',
    excerpt: 'Stay ahead of the curve with the latest SEO strategies and algorithm updates that will impact your rankings.',
    author: 'EmpireL Marketing Team',
    date: '2024-12-03',
    category: 'Marketing',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    readTime: '6 min read',
  },
];

const categories = ['All', 'Technology', 'Marketing', 'Creative'];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology':
        return 'bg-mtech-accent text-white';
      case 'Marketing':
        return 'bg-marketing-accent text-white';
      case 'Creative':
        return 'bg-studio-accent text-white';
      default:
        return 'bg-neutral-200 text-neutral-700';
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Blog
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Insights, tips, and stories from our experts in technology, marketing, and creative design.
          </motion.p>
        </div>
      </Section>

      {/* Search and Filter Section */}
      <Section paddingY="md">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-between mb-8">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-neutral-500 mb-3">
                    <User size={16} className="mr-2" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary-dark mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary-gold hover:text-yellow-600 transition-colors cursor-pointer">
                    <span className="font-medium">Read More</span>
                    <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">No articles found matching your criteria.</p>
          </div>
        )}
      </Section>

      {/* Newsletter Subscription */}
      <Section bgColor="bg-neutral-100">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle
            title="Stay Updated"
            subtitle="Subscribe to our newsletter to get the latest insights and updates from our team."
            center
          />
          
          <motion.form 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-gold"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </motion.form>
        </div>
      </Section>
    </motion.div>
  );
};

export default Blog;