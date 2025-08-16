import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const categories = ['All', 'Web', 'Mobile', 'Cloud', 'AI'];

const projects = [
  {
    id: 1,
    title: 'Enterprise Cloud Migration',
    category: 'Cloud',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete cloud migration for a Fortune 500 company, resulting in 40% cost reduction and improved scalability.',
  },
  // {
  //   id: 2,
  //   title: 'FinTech Mobile Application',
  //   category: 'Mobile',
  //   image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'Secure, high-performance banking application with biometric authentication and real-time transaction processing.',
  // },
  // {
  //   id: 3,
  //   title: 'E-commerce Platform',
  //   category: 'Web',
  //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'Scalable e-commerce solution with advanced inventory management and personalized recommendation engine.',
  // },
  // {
  //   id: 4,
  //   title: 'Predictive Analytics Tool',
  //   category: 'AI',
  //   image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'AI-powered analytics platform that processes millions of data points to provide actionable business insights.',
  // },
  {
    id: 5,
    title: 'Healthcare Management System',
    category: 'Web',
    image: 'https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Integrated healthcare solution for patient management, scheduling, and secure medical record storage.',
  },
  // {
  //   id: 6,
  //   title: 'IoT Fleet Management',
  //   category: 'Cloud',
  //   image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   description: 'Real-time monitoring system for vehicle fleets using IoT sensors and cloud-based data processing.',
  // },
];

const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section>
      <SectionTitle
        title="Our Tech Projects"
        subtitle="Explore our portfolio of successful technology implementations across various industries."
        center
        accentColor="bg-mtech-accent"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'primary' : 'outline'}
            colorScheme="mtech"
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              layout
              className="group relative overflow-hidden rounded-lg shadow-soft cursor-pointer"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="aspect-w-16 aspect-h-9 bg-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm font-medium text-mtech-accent mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-neutral-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find(p => p.id === selectedProject) && (
                <div>
                  <img
                    src={projects.find(p => p.id === selectedProject)?.image}
                    alt={projects.find(p => p.id === selectedProject)?.title}
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  <span className="inline-block px-3 py-1 bg-mtech-light text-mtech-accent rounded-full text-sm mb-2">
                    {projects.find(p => p.id === selectedProject)?.category}
                  </span>
                  <h2 className="text-2xl font-bold text-primary-dark mb-4">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h2>
                  <p className="text-neutral-700 mb-6">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                  <p className="text-neutral-700 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus. Praesent euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus.
                  </p>
                  <div className="flex justify-end">
                    <Button
                      variant="primary"
                      colorScheme="mtech"
                      onClick={() => setSelectedProject(null)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default ProjectShowcase;