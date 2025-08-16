import { motion } from 'framer-motion';
import { TrendingUp, BarChart2, Target, PieChart } from 'lucide-react';
import Button from '../common/Button';

const MarketingHero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-red-900 via-pink-900 to-red-800 overflow-hidden">
      {/* Animated graph elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-pink-400"
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

      {/* Floating marketing elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <div className="w-3 h-3 bg-pink-400/30 rounded-full" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-pink-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-pink-300 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TrendingUp size={20} className="mr-2" />
              <span className="font-semibold tracking-wide text-sm md:text-base">Data-Driven Growth</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]">
              Amplify Your
              <span className="block text-pink-400 mt-2 md:mt-4 drop-shadow-sm">Market Impact</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Strategic marketing solutions that drive measurable results, enhance brand visibility, and accelerate business growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" colorScheme="marketing" to="/contact">
                Get Free Analysis
              </Button>
              <Button size="lg" variant="outline" colorScheme="marketing" href="#services" className="border-pink-400 text-pink-400 hover:bg-pink-400/10">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
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
                  className="bg-white/10 backdrop-blur-sm border border-pink-400/20 rounded-xl p-4 md:p-6 shadow-soft hover:shadow-hover hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-pink-400 mb-3 md:mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white mb-2 tracking-wide text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-48 md:w-72 h-48 md:h-72 bg-pink-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute -z-10 bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-red-500/20 rounded-full blur-2xl transform -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHero;