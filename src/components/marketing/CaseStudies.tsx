import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const caseStudies = [
  {
    id: 1,
    title: 'E-commerce Revenue Growth',
    industry: 'Retail',
    challenge: 'A leading fashion retailer was struggling with low online conversion rates and high cart abandonment.',
    solution: 'Implemented a holistic digital strategy including SEO optimization, targeted PPC campaigns, and email marketing automation.',
    results: ['185% increase in organic traffic', '98% improvement in conversion rate', '156% growth in revenue', '43% reduction in cart abandonment'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'B2B Lead Generation Campaign',
    industry: 'Software',
    challenge: 'A SaaS company needed to increase qualified leads while reducing cost per acquisition.',
    solution: 'Developed a content marketing strategy with targeted lead magnets, account-based marketing, and LinkedIn advertising.',
    results: ['320% increase in qualified leads', '45% reduction in cost per acquisition', '78% improvement in lead quality', '4.2x ROI on marketing spend'],
    image: '/1.jpeg',
  },
  {
    id: 3,
    title: 'Local Business Expansion',
    industry: 'Healthcare',
    challenge: 'A medical practice wanted to expand their patient base in a competitive local market.',
    solution: 'Created a local SEO strategy, reputation management system, and targeted social media advertising campaigns.',
    results: ['215% increase in new patient inquiries', '175% growth in Google Business Profile views', '35 new positive reviews in first month', '125% increase in appointment bookings'],
    image: '/3.jpg',
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <Section>
      <SectionTitle
        title="Client Success Stories"
        subtitle="Discover how our marketing strategies have transformed businesses and driven measurable results."
        center
        accentColor="bg-marketing-accent"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {caseStudies.map((study) => (
          <motion.div
            key={study.id}
            className={`rounded-lg overflow-hidden shadow-soft cursor-pointer transform transition-all duration-300 hover:-translate-y-2 ${
              activeCase.id === study.id
                ? 'ring-2 ring-marketing-accent scale-105'
                : ''
            }`}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveCase(study)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="text-sm text-marketing-accent mb-1">
                  {study.industry}
                </div>
                <h3 className="text-lg font-bold">{study.title}</h3>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-neutral-700 text-sm line-clamp-2 mb-4">
                {study.challenge}
              </p>
              <Button
                variant="text"
                colorScheme="marketing"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveCase(study);
                  setShowModal(true);
                }}
              >
                Read Case Study
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-white p-6 md:p-8 rounded-lg shadow-soft">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-marketing-light text-marketing-accent rounded-full text-sm mb-2">
              {activeCase.industry}
            </div>
            <h3 className="text-2xl font-bold text-primary-dark mb-4">
              {activeCase.title}
            </h3>
            
            <div className="mb-4">
              <h4 className="font-semibold text-primary-dark mb-2">The Challenge</h4>
              <p className="text-neutral-700">{activeCase.challenge}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-semibold text-primary-dark mb-2">Our Solution</h4>
              <p className="text-neutral-700">{activeCase.solution}</p>
            </div>
            
            <Button
              colorScheme="marketing"
              onClick={() => setShowModal(true)}
            >
              View Detailed Case Study
            </Button>
          </div>
          
          <div>
            <div className="bg-marketing-light p-6 rounded-lg">
              <h4 className="font-bold text-primary-dark mb-4">Results Achieved</h4>
              <ul className="space-y-3">
                {activeCase.results.map((result, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <svg
                      className="text-marketing-accent mt-1 mr-2 flex-shrink-0"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-neutral-700">{result}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6">
                <img
                  src={activeCase.image}
                  alt={activeCase.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="inline-block px-3 py-1 bg-marketing-light text-marketing-accent rounded-full text-sm mb-2">
                {activeCase.industry}
              </div>
              
              <h2 className="text-2xl font-bold text-primary-dark mb-4">
                {activeCase.title}
              </h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-dark mb-2">The Challenge</h3>
                <p className="text-neutral-700">{activeCase.challenge}</p>
                <p className="text-neutral-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus. Praesent euismod, nisl eget ultricies aliquam.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-dark mb-2">Our Solution</h3>
                <p className="text-neutral-700">{activeCase.solution}</p>
                <p className="text-neutral-700 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus. Praesent euismod, nisl eget ultricies aliquam.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary-dark mb-2">Results</h3>
                <ul className="space-y-2 mb-4">
                  {activeCase.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="text-marketing-accent mt-1 mr-2 flex-shrink-0"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17L4 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="text-neutral-700">{result}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus.
                </p>
              </div>
              
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  colorScheme="marketing"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default CaseStudies;