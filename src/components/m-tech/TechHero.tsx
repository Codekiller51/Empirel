import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu } from 'lucide-react';
import Button from '../common/Button';

const TechHero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-mtech-light via-white to-mtech-light overflow-hidden">
      {/* Animated circuit board pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-mtech-accent"
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

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-mtech-accent mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Code size={20} className="mr-2" />
              <span className="font-semibold tracking-wide">Innovative Tech Solutions</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-primary-dark mb-8 leading-[1.1]">
              Transform Your
              <span className="block text-mtech-accent mt-4 drop-shadow-sm">Digital Future</span>
            </h1>

            <p className="text-xl text-neutral-700 mb-10 max-w-lg leading-relaxed">
              Leverage cutting-edge technology solutions to optimize operations, enhance efficiency, and drive sustainable growth for your business.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" colorScheme="mtech" to="/contact">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" colorScheme="mtech" href="#services">
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
            <div className="grid grid-cols-2 gap-6">
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
                  className="bg-white rounded-xl p-6 shadow-soft hover:shadow-hover transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-mtech-accent mb-4">{item.icon}</div>
                  <h3 className="font-bold text-primary-dark mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-sm text-neutral-700">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 right-0 w-72 h-72 bg-mtech-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute -z-10 bottom-0 left-0 w-48 h-48 bg-primary-gold/10 rounded-full blur-2xl transform -translate-x-1/2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechHero;