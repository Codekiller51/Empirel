import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';

const testimonials = [
  {
    name: 'Dr. Amina Hassan',
    company: 'Kilimanjaro Medical Centre',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'EmpireL developed our patient management system that now serves over 500 patients daily. Their understanding of the Tanzanian healthcare landscape and technical expertise made them the perfect partner for our digital transformation.',
    rating: 5,
  },
  {
    name: 'James Mwalimu',
    company: 'Serengeti Safaris Ltd',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Working with EmpireL\'s marketing team increased our direct bookings by 280% in just six months. They understand both the local market and international tourism trends, which was exactly what we needed.',
    rating: 5,
  },
  {
    name: 'Grace Mbwana',
    company: 'Kanga Couture',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'EmpireL\'s creative team helped us modernize our traditional fashion brand while respecting our cultural heritage. Their photography and branding work opened doors to international markets we never thought possible.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? 'text-primary-gold' : 'text-neutral-300'}
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ));
  };

  return (
    <Section bgColor="bg-primary-dark">
      <SectionTitle
        title="Client Testimonials"
        subtitle="Don't just take our word for it. Here's what our clients have to say about working with EmpireL."
        center
        color="light"
      />

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6">
            <div className="flex flex-col h-full">
              <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
              
              <blockquote className="text-neutral-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-primary-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;