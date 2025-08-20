import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import SocialDropdown from './SocialDropdown';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.mtech'), path: '/m-tech' },
    { name: t('nav.marketing'), path: '/marketing' },
    { name: t('nav.studio'), path: '/studio' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark/95 dark:bg-black/95 backdrop-blur-sm shadow-lg">
      <div className="hidden md:block bg-primary-dark/80 dark:bg-black/80 py-2 border-b border-primary-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6 text-white/80 text-sm">
              <a href="tel:+255767719743" className="flex items-center hover:text-primary-gold transition-colors">
                <Phone size={16} className="mr-2" />
                +255 767 719 743
              </a>
              <a href="mailto:m-tech@empirel.co.tz" className="flex items-center hover:text-primary-gold transition-colors">
                <Mail size={16} className="mr-2" />
                m-tech@empirel.co.tz
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <SocialDropdown 
                icon={<Facebook size={18} />} 
                platform="Facebook" 
                baseUrl="https://facebook.com/empirel" 
              />
              <SocialDropdown 
                icon={<Twitter size={18} />} 
                platform="Twitter" 
                baseUrl="https://twitter.com/empirel" 
              />
              <SocialDropdown 
                icon={<Instagram size={18} />} 
                platform="Instagram" 
                baseUrl="https://instagram.com/empirel_marketing" 
              />
              <SocialDropdown 
                icon={<Linkedin size={18} />} 
                platform="LinkedIn" 
                baseUrl="https://linkedin.com/company/empirel" 
              />
              <div className="border-l border-white/20 pl-4 ml-4">
                <div className="flex items-center space-x-3">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14 md:h-16">
          <Link to="/" className="z-50">
            <Logo />
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-white dark:text-neutral-200 hover:text-primary-gold transition-colors font-medium text-xs lg:text-sm uppercase tracking-wider relative ${
                        isActive ? 'text-primary-gold' : ''
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="https://empirel.co.tz/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-gold text-primary-dark px-4 py-2 rounded font-medium text-xs lg:text-sm hover:bg-yellow-400 transition-colors"
                >
                  {t('nav.login')}
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Theme and Language Toggle */}
          <div className="flex items-center space-x-3 md:hidden mr-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          <button
            className="z-50 md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-primary-dark dark:bg-black flex flex-col justify-center items-center z-40 md:hidden"
          >
            <nav className="w-full">
              <ul className="flex flex-col space-y-6 items-center">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-white dark:text-neutral-200 hover:text-primary-gold transition-colors font-medium text-lg ${
                          isActive ? 'text-primary-gold' : ''
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
                <li className="mt-4">
                  <a
                    href="https://empirel.co.tz/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-gold text-primary-dark px-6 py-3 rounded font-medium text-lg hover:bg-yellow-400 transition-colors"
                  >
                    {t('nav.login')}
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;