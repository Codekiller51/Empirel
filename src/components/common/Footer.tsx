import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <Logo />
            <p className="mt-4 text-neutral-300 text-sm">
              Building digital legacies through innovative technology, strategic marketing, and creative studio solutions.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com/empirel_marketing/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-primary-gold transition-colors">
                <Linkedin size={20} />
              </a> */}
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
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

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-gold mr-2 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Dar es salaam<br />Tanzania</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-gold mr-2 flex-shrink-0" />
                <span className="text-neutral-300">+255 767 719 743</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-gold mr-2 flex-shrink-0" />
                <span className="text-neutral-300">m-tech@empirel.co.tz</span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-neutral-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-neutral-800 border border-neutral-700 rounded px-4 py-2 focus:outline-none focus:border-primary-gold"
              />
              <button type="submit" className="bg-primary-gold text-primary-dark font-medium py-2 px-4 rounded hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EmpireL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;