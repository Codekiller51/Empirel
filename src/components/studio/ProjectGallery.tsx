import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const categories = ['All', 'Branding', 'Web Design', 'Photography', 'Video'];

const projects = [
  {
    id: 1,
    title: 'Luxury Brand Identity',
    category: 'Branding',
    image: '/product-1.jpeg',
    height: 'medium',
  },
  // {
  //   id: 2,
  //   title: 'E-commerce Website Redesign',
  //   category: 'Web Design',
  //   image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   height: 'tall',
  // },
  {
    id: 3,
    title: 'Product Photography',
    category: 'Photography',
    image: '/product-2.jpeg',
    height: 'medium',
  },
  {
    id: 4,
    title: 'Corporate Brand Video',
    category: 'Video',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    height: 'medium',
  },
  {
    id: 5,
    title: 'Restaurant Brand Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    height: 'tall',
  },
  // {
  //   id: 6,
  //   title: 'Travel App Design',
  //   category: 'Web Design',
  //   image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //   height: 'tall',
  // },
  {
    id: 7,
    title: 'Fashion Lookbook',
    category: 'Photography',
    image: '/fashion-1.jpeg',
    height: 'medium',
  },
  {
    id: 8,
    title: 'PhotoShoot',
    category: 'Photography',
    image: '/shoot-1.jpeg',
    height: 'short',
  },
];

const heights = {
  short: 'h-64',
  medium: 'h-80',
  tall: 'h-96',
};

const ProjectGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<null | number>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <Section id="projects">
      <SectionTitle
        title="Our Creative Portfolio"
        subtitle="Explore our collection of creative projects showcasing our expertise in design, photography, and video production."
        center
        accentColor="bg-studio-accent"
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? 'primary' : 'outline'}
            colorScheme="studio"
            size="sm"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Masonry Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              layout
              className={`group relative overflow-hidden rounded-lg shadow-soft cursor-pointer ${heights[project.height]}`}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="absolute inset-0 bg-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm font-medium text-studio-accent mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold">{project.title}</h3>
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
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {projects.find(p => p.id === selectedProject) && (
                <div>
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={projects.find(p => p.id === selectedProject)?.image}
                      alt={projects.find(p => p.id === selectedProject)?.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-studio-light text-studio-accent rounded-full text-sm mb-2">
                      {projects.find(p => p.id === selectedProject)?.category}
                    </span>
                    <h2 className="text-2xl font-bold text-primary-dark mb-4">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h2>
                    <p className="text-neutral-700 mb-6">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus. Praesent euismod, nisl eget ultricies aliquam, quam libero elementum eros, vitae fringilla nunc nisl eget risus.
                    </p>
                    <div className="flex justify-end">
                      <Button
                        variant="primary"
                        colorScheme="studio"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </Button>
                    </div>
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

export default ProjectGallery;