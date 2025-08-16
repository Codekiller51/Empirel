import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1 - About */}
          <div>
            <Logo />
            <p className="mt-4 text-neutral-300 text-sm leading-relaxed">
              Building digital legacies through innovative technology, strategic marketing, and creative studio solutions.
            </p>
            <div className="flex mt-6 space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/empirel_marketing/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-primary-gold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/m-tech" className="text-neutral-300 hover:text-primary-gold transition-colors">M-Tech</Link>
              </li>
              <li>
                <Link to="/marketing" className="text-neutral-300 hover:text-primary-gold transition-colors">Marketing</Link>
              </li>
              <li>
                <Link to="/studio" className="text-neutral-300 hover:text-primary-gold transition-colors">Studio</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - M-Tech Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-mtech-accent">EmpireL Technology</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="text-mtech-accent mr-2 flex-shrink-0" />
                <span className="text-neutral-300">+255 767 719 743</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-mtech-accent mr-2 flex-shrink-0" />
                <span className="text-neutral-300">m-tech@empirel.co.tz</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Marketing Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-marketing-accent">EmpireL Marketing</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="text-marketing-accent mr-2 flex-shrink-0" />
                <span className="text-neutral-300">+255 767 719 743</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-marketing-accent mr-2 flex-shrink-0" />
                <span className="text-neutral-300">marketing@empirel.co.tz</span>
              </li>
            </ul>
          </div>

          {/* Column 5 - Studio Contact */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 text-studio-accent">EmpireL Studio</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="text-studio-accent mr-2 flex-shrink-0" />
                <span className="text-neutral-300">+255 767 719 743</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="text-studio-accent mr-2 flex-shrink-0" />
                <span className="text-neutral-300">studios@empirel.co.tz</span>
              </li>
            </ul>
            <div className="mt-4">
              <div className="flex items-start">
                <MapPin size={16} className="text-primary-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-300 text-sm">Dar es Salaam<br />Tanzania</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-neutral-400 text-xs md:text-sm">
          <p>&copy; {new Date().getFullYear()} EmpireL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;