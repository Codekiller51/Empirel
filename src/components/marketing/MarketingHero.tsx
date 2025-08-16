import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Target, PieChart } from 'lucide-react';
import Button from '../common/Button';

const MarketingHero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-marketing-light via-white to-marketing-light overflow-hidden">
      {/* Animated graph elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-marketing-accent"
            style={{
              width: '100%',
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scaleX: [0, 1, 0],
              x: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: 'linear',
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
              className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-marketing-accent mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TrendingUp size={20} className="mr-2" />
              <span className="font-semibold tracking-wide">Data-Driven Growth</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary-dark mb-8 leading-[1.1]">
              Amplify Your
              <span className="block text-marketing-accent mt-4 drop-shadow-sm">Market Impact</span>
            </h1>

            <p className="text-xl text-neutral-700 mb-10 max-w-lg leading-relaxed">
              Strategic marketing solutions that drive measurable results, enhance brand visibility, and accelerate business growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" colorScheme="marketing" to="/contact">
                Get Free Analysis
              </Button>
              <Button size="lg" variant="outline" colorScheme="marketing" href="#services">
                View Services
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
                  icon: <BarChart2 size={32} />,
                  title: 'Performance Marketing',
                  desc: 'ROI-focused campaigns',
                },
                {
                  icon: <Target size={32} />,
                  title: 'Targeted Advertising',
                  desc: 'Precision audience reach',
                },
                {
                  icon: <PieChart size={32} />,
                  title: 'Analytics & Insights',
                  desc: 'Data-driven decisions',
                },
                {
                  icon: <TrendingUp size={32} />,
                  title: 'Growth Strategy',
                  desc: 'Sustainable scaling',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-marketing-accent mb-4">{item.icon}</div>
                  <h3 className="font-bold text-primary-dark mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-neutral-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-marketing-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-primary-gold/10 rounded-full blur-2xl transform -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHero;