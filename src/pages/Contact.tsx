import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('https://empirel.co.tz/api/api/send_email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.subject,
          message: data.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('Message sent successfully!');
      } else {
        alert(result.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <Section bgColor="bg-primary-dark" paddingY="lg">
        <div className="text-center text-white">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's Connect
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            We're here to help transform your digital presence. Reach out to discuss how we can work together.
          </motion.p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title="Get in Touch"
              subtitle="We typically respond within 24 hours"
            />
            
            <div className="space-y-6 mt-8">
              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <MapPin className="text-primary-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-dark">Visit Us</h3>
                  <p className="text-neutral-600">
                    Dar es salaam,<br />
                    Tanzania
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Mail className="text-primary-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-dark">Email Us</h3>
                  <p className="text-neutral-600">
                    m-tech@empirel.co.tz<br />
                    marketing@empirel.co.tz<br />
                    studios@empirel.co.tz
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Phone className="text-primary-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-dark">Call Us</h3>
                  <p className="text-neutral-600">
                  +255 767 719 743<br />
                    Mon-Fri, 9:00 AM - 6:00 PM EAT
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Clock className="text-primary-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-primary-dark">Business Hours</h3>
                  <p className="text-neutral-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-soft p-8"
          >
            <h2 className="text-2xl font-bold text-primary-dark mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.name ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold"
                  {...register('phone')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.subject ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" fullWidth>
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      {/* Map Section */}
<Section bgColor="bg-neutral-100" paddingY="lg">
  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15847.808317291096!2d39.22707211931151!3d-6.775687388167188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2tz!4v1746167769557!5m2!1sen!2tz"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Company Location"
    ></iframe>
  </div>
</Section>

    </motion.div>
  );
};

export default Contact;