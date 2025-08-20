import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Code, PaintBucket } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Button from '../common/Button';

const slides = [
  {
    id: 1,
    titleKey: "hero.title",
    subtitleKey: "hero.subtitle", 
    descriptionKey: "hero.description",
    bgGradient: "from-primary-dark via-primary-dark to-black",
    accentColor: "text-primary-gold",
    buttonColor: "default",
    icon: null,
  },
  {
    id: 2,
    titleKey: "nav.mtech",
    subtitleKey: "mtech.title",
    descriptionKey: "mtech.description",
    bgGradient: "from-mtech-light via-white to-mtech-light",
    accentColor: "text-mtech-accent",
    buttonColor: "mtech",
    icon: <Code size={48} className="text-mtech-accent mb-6" />,
  },
  {
    id: 3,
    titleKey: "nav.marketing",
    subtitleKey: "marketing.title",
    descriptionKey: "marketing.description",
    bgGradient: "from-marketing-light via-white to-marketing-light",
    accentColor: "text-marketing-accent",
    buttonColor: "marketing",
    icon: <TrendingUp size={48} className="text-marketing-accent mb-6" />,
  },
  {
    id: 4,
    titleKey: "nav.studio",
    subtitleKey: "studio.title",
    descriptionKey: "studio.description",
    bgGradient: "from-studio-light via-white to-studio-light",
    accentColor: "text-studio-accent",
    buttonColor: "studio",
    icon: <PaintBucket size={48} className="text-studio-accent mb-6" />,
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div 
      className="relative min-h-screen flex items-center overflow-hidden dark:bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgGradient}`}
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 0.5 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute h-px ${currentSlide === 0 ? 'bg-primary-gold/20' : `${slides[currentSlide].accentColor}/10`}`}
                style={{
                  width: '100%',
                  left: 0,
                  top: `${15 + i * 20}%`,
                }}
                animate={{
                  x: ['-100%', '100%'],
                }}
                transition={{
                  duration: 20 + i * 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container relative mx-auto px-4 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            {slides[currentSlide].icon}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${currentSlide === 0 ? 'text-white dark:text-neutral-100' : 'text-primary-dark dark:text-white'} mb-6`}>
              <span className="block">{t(slides[currentSlide].titleKey)}</span>
              <span className={slides[currentSlide].accentColor}>{t(slides[currentSlide].subtitleKey)}</span>
            </h1>

            <p className={`text-xl ${currentSlide === 0 ? 'text-neutral-200 dark:text-neutral-300' : 'text-neutral-700 dark:text-neutral-300'} mb-8 max-w-xl`}>
              {t(slides[currentSlide].descriptionKey)}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                colorScheme={slides[currentSlide].buttonColor}
                to={currentSlide === 0 ? "/contact" : `/${currentSlide === 1 ? 'm-tech' : currentSlide === 2 ? 'marketing' : 'studio'}`}
              >
                {currentSlide === 0 ? t('hero.getStarted') : "Learn More"}
              </Button>
              {currentSlide === 0 && (
                <Button size="lg" variant="outline" to="/m-tech">
                  {t('hero.exploreServices')}
                </Button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? `bg-${index === 0 ? 'primary-gold' : index === 1 ? 'mtech-accent' : index === 2 ? 'marketing-accent' : 'studio-accent'} scale-125` 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 text-white"
          aria-label="Previous slide"
        >
          <motion.div
            animate={{ x: [-5, 0, -5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ←
          </motion.div>
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 dark:bg-black/20 dark:hover:bg-black/40 flex items-center justify-center backdrop-blur-sm transition-all duration-300 text-white"
          aria-label="Next slide"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </button>
      </div>
    </div>
  );
};

export default Hero;