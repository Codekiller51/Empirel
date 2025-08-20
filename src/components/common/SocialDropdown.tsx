import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface SocialDropdownProps {
  icon: React.ReactNode;
  platform: string;
  baseUrl: string;
}

const SocialDropdown: React.FC<SocialDropdownProps> = ({ icon, platform, baseUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const departments = [
    { 
      name: t('social.mtech'), 
      path: '/m-tech', 
      color: 'text-mtech-accent hover:bg-mtech-light',
      url: `${baseUrl}/mtech`
    },
    { 
      name: t('social.marketing'), 
      path: '/marketing', 
      color: 'text-marketing-accent hover:bg-marketing-light',
      url: `${baseUrl}/marketing`
    },
    { 
      name: t('social.studio'), 
      path: '/studio', 
      color: 'text-studio-accent hover:bg-studio-light',
      url: `${baseUrl}/studio`
    },
  ];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="text-white/80 hover:text-primary-gold transition-colors cursor-pointer">
        {icon}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 min-w-[200px] z-50"
          >
            <div className="p-2">
              <div className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 px-3 py-2 border-b border-neutral-200 dark:border-neutral-700">
                {platform} - Choose Department
              </div>
              {departments.map((dept, index) => (
                <div key={index} className="flex">
                  <Link
                    to={dept.path}
                    className={`flex-1 px-3 py-2 text-sm font-medium rounded-l transition-colors ${dept.color}`}
                  >
                    {dept.name}
                  </Link>
                  <a
                    href={dept.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm text-neutral-500 hover:text-primary-gold transition-colors border-l border-neutral-200 dark:border-neutral-700"
                    title={`Visit ${platform}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialDropdown;