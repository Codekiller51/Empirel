import { motion } from 'framer-motion';
import { PaintBucket, Camera, Film, Image } from 'lucide-react';
import Button from '../common/Button';

const StudioHero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-studio-light via-white to-studio-light overflow-hidden">
      {/* Animated creative elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-studio-accent/30"
            style={{
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-studio-accent mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <PaintBucket size={20} className="mr-2" />
              <span className="font-semibold tracking-wide">Creative Excellence</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary-dark mb-8 leading-[1.1]">
              Bring Ideas To
              <span className="block text-studio-accent mt-4 drop-shadow-sm">Life</span>
            </h1>

            <p className="text-xl text-neutral-700 mb-10 max-w-lg leading-relaxed">
              Transform your vision into captivating visual experiences through innovative design, photography, and video production.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" colorScheme="studio" to="/contact">
                Start Creating
              </Button>
              <Button size="lg" variant="outline" colorScheme="studio" href="#projects">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Camera size={32} />,
                  title: 'Photography',
                  desc: 'Professional shoots',
                },
                {
                  icon: <Film size={32} />,
                  title: 'Video Production',
                  desc: 'Engaging content',
                },
                {
                  icon: <PaintBucket size={32} />,
                  title: 'Design Services',
                  desc: 'Creative solutions',
                },
                {
                  icon: <Image size={32} />,
                  title: 'Visual Identity',
                  desc: 'Brand aesthetics',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-studio-accent mb-4">{item.icon}</div>
                  <h3 className="font-bold text-primary-dark mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-neutral-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-studio-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-primary-gold/10 rounded-full blur-2xl transform -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudioHero;