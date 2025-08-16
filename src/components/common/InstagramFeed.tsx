import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';

interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  permalink: string;
}

interface InstagramFeedProps {
  posts: InstagramPost[];
  title: string;
  accentColor: string;
  department: 'mtech' | 'marketing' | 'studio';
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({ 
  posts, 
  title, 
  accentColor,
  department 
}) => {
  const getColorClasses = () => {
    switch (department) {
      case 'mtech':
        return {
          accent: 'text-mtech-accent',
          bg: 'bg-mtech-accent',
          light: 'bg-mtech-light',
          hover: 'hover:bg-mtech-accent/10'
        };
      case 'marketing':
        return {
          accent: 'text-marketing-accent',
          bg: 'bg-marketing-accent',
          light: 'bg-marketing-light',
          hover: 'hover:bg-marketing-accent/10'
        };
      case 'studio':
        return {
          accent: 'text-studio-accent',
          bg: 'bg-studio-accent',
          light: 'bg-studio-light',
          hover: 'hover:bg-studio-accent/10'
        };
      default:
        return {
          accent: 'text-primary-gold',
          bg: 'bg-primary-gold',
          light: 'bg-neutral-100',
          hover: 'hover:bg-primary-gold/10'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={`inline-flex items-center ${colors.light} px-4 py-2 rounded-full ${colors.accent} mb-4`}>
            <Instagram size={20} className="mr-2" />
            <span className="font-semibold">Follow Us on Instagram</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-4">
            {title}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Stay updated with our latest work, behind-the-scenes content, and industry insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-soft cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => window.open(post.permalink, '_blank')}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <ExternalLink size={24} className="mx-auto mb-2" />
                  <p className="text-sm font-medium">View on Instagram</p>
                </div>
              </div>

              {/* Instagram icon overlay */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`${colors.bg} p-2 rounded-full`}>
                  <Instagram size={16} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://instagram.com/empirel_marketing/"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-6 py-3 ${colors.bg} text-white rounded-lg font-medium ${colors.hover} transition-colors`}
          >
            <Instagram size={20} className="mr-2" />
            Follow @empirel_marketing
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default InstagramFeed;