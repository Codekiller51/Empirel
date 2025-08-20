import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const caseStudies = [
  {
    id: 1,
    title: 'Tanzanian Fashion Brand Digital Transformation',
    industry: 'Fashion Retail',
    challenge: 'Kanga Couture, a traditional Tanzanian fashion brand, was struggling to reach younger demographics and expand beyond local markets. Their online presence was minimal, with only 2% of sales coming from digital channels.',
    solution: 'We developed a comprehensive digital strategy including: modern e-commerce website with mobile-first design, Instagram and TikTok marketing campaigns showcasing traditional meets modern fashion, influencer partnerships with East African fashion bloggers, and targeted Google Ads for both local and diaspora markets.',
    results: ['285% increase in online sales within 6 months', '150% growth in social media following', '45% of new customers from digital channels', '35% increase in average order value', 'Expanded to 3 new international markets'],
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    title: 'Dar es Salaam Tech Startup Growth',
    industry: 'FinTech',
    challenge: 'PaySafe Tanzania, a mobile payment startup, needed to build trust and acquire users in a competitive market dominated by established players. They had a great product but struggled with user acquisition and brand awareness.',
    solution: 'Created a multi-channel growth strategy: educational content marketing about digital payments, strategic partnerships with local businesses, community engagement programs, targeted Facebook and Google campaigns, and a referral program leveraging Tanzania\'s strong word-of-mouth culture.',
    results: ['400% increase in app downloads', '250% growth in active users', '60% reduction in customer acquisition cost', '4.8/5 app store rating', 'Featured in 3 major Tanzanian tech publications'],
    image: '/1.jpeg',
  },
  {
    id: 3,
    title: 'Arusha Tourism Company Digital Expansion',
    industry: 'Tourism & Hospitality',
    challenge: 'Kilimanjaro Adventures, a local tour operator, was heavily dependent on international tour agencies and wanted to attract direct bookings. The COVID-19 pandemic had severely impacted their traditional marketing channels.',
    solution: 'Built a comprehensive digital presence: stunning website with virtual tour experiences, SEO optimization for safari and Kilimanjaro climbing keywords, social media campaigns featuring authentic Tanzanian experiences, email marketing to past clients, and partnerships with travel bloggers and influencers.',
    results: ['320% increase in direct bookings', '180% growth in website traffic', '90% of inquiries now come from digital channels', '25% increase in average booking value', 'Expanded client base to 15 new countries'],
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