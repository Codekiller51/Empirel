import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Check, Mail, Phone, MapPin } from 'lucide-react';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
          service: data.service,
          message: data.message
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.message || 'Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <SectionTitle
            title="Get in Touch"
            subtitle="Ready to start your next project? Contact us today to discuss how we can help your business thrive."
            accentColor="bg-primary-gold"
          />
          
          <motion.div
            className="mt-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start">
              <MapPin className="text-primary-gold mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark">Our Office</h3>
                <p className="text-neutral-600">123 Empire Avenue, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail className="text-primary-gold mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark">Email Us</h3>
                <p className="text-neutral-600">info@empirel.com<br />support@empirel.com</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone className="text-primary-gold mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark">Call Us</h3>
                <p className="text-neutral-600">(123) 456-7890<br />(123) 456-7891</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-primary-dark mb-4">Office Hours</h3>
            <div className="space-y-2 text-neutral-600">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="bg-white rounded-lg shadow-soft p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {isSubmitted ? (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <Check className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-dark mb-2">Message Sent!</h3>
              <p className="text-neutral-600 mb-6">
                Thank you for reaching out. We'll get back to you shortly.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Send Another Message
              </Button>
            </motion.div>
          ) : (
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    {...register('email', { required: 'Email is required', pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }})}
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
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                  Service Interested In *
                </label>
                <select
                  id="service"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.service ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('service', { required: 'Please select a service' })}
                >
                  <option value="">Select a service</option>
                  <option value="m-tech">M-Tech</option>
                  <option value="marketing">Marketing</option>
                  <option value="studio">Studio</option>
                  <option value="multiple">Multiple Services</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
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
                Send Message
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default ContactForm;