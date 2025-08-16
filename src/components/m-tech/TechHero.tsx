import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu } from 'lucide-react';
import Button from '../common/Button';

const TechHero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Animated circuit board pattern */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400"
            style={{
              height: '1px',
              width: `${Math.random() * 100}px`,
              top: `${i * 5}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              width: [0, '100px', 0],
              left: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
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
              className="inline-flex items-center bg-cyan-400/20 backdrop-blur-sm px-4 py-2 rounded-full text-cyan-300 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Code size={20} className="mr-2" />
              <span className="font-semibold tracking-wide text-sm md:text-base">Innovative Tech Solutions</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-6 md:mb-8 leading-[1.1]">
              Transform Your
              <span className="block text-cyan-400 mt-2 md:mt-4 drop-shadow-sm">Digital Future</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 md:mb-10 max-w-lg leading-relaxed">
              Leverage cutting-edge technology solutions to optimize operations, enhance efficiency, and drive sustainable growth for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" colorScheme="mtech" to="/contact">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" colorScheme="mtech" href="#services" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                Explore Solutions
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
                  icon: <Cpu size={32} />,
                  title: 'Custom Development',
                  desc: 'Tailored software solutions',
                },
                {
                  icon: <Server size={32} />,
                  title: 'Cloud Solutions',
                  desc: 'Scalable infrastructure',
                },
                {
                  icon: <Database size={32} />,
                  title: 'Data Systems',
                  desc: 'Intelligent analytics',
                },
                {
                  icon: <Code size={32} />,
                  title: 'API Integration',
                  desc: 'Seamless connectivity',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 md:p-6 shadow-soft hover:shadow-hover hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-cyan-400 mb-3 md:mb-4">{item.icon}</div>
                  <h3 className="font-bold text-white mb-2 tracking-wide text-sm md:text-base">{item.title}</h3>
                  <p className="text-xs md:text-sm text-slate-300">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-48 md:w-72 h-48 md:h-72 bg-cyan-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute -z-10 bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-blue-500/20 rounded-full blur-2xl transform -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;