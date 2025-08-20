import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import Section from '../components/common/Section';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { useTranslation } from 'react-i18next';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch(import.meta.env.VITE_EMAIL_API_URL, {
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
        setSubmitStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
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
            <h1>{t('contact.title')}</h1>
          </motion.h1>
          <motion.p 
            className="text-xl text-neutral-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <SectionTitle
              title={t('contact.title')}
              subtitle="We typically respond within 24 hours. Reach out to discuss your project needs."
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
                    {t('footer.location')}<br />
                    Kinondoni, Dar es Salaam<br />
                    Tanzania, East Africa
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
                    <a href="mailto:m-tech@empirel.co.tz" className="hover:text-primary-gold transition-colors">m-tech@empirel.co.tz</a><br />
                    <a href="mailto:marketing@empirel.co.tz" className="hover:text-primary-gold transition-colors">marketing@empirel.co.tz</a><br />
                    <a href="mailto:studios@empirel.co.tz" className="hover:text-primary-gold transition-colors">studios@empirel.co.tz</a>
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
                    <a href="tel:+255767719743" className="hover:text-primary-gold transition-colors">+255 767 719 743</a><br />
                    <a href="tel:+255767719744" className="hover:text-primary-gold transition-colors">+255 767 719 744</a><br />
                    Mon-Fri, 8:00 AM - 6:00 PM EAT
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
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
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
            <h2 className="text-2xl font-bold text-primary-dark mb-6">{t('contact.form.title', 'Send Us a Message')}</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
              >
                <CheckCircle className="text-green-600 mr-3" size={20} />
                <span className="text-green-800">{t('contact.form.success')}</span>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
              >
                <AlertCircle className="text-red-600 mr-3" size={20} />
                <span className="text-red-800">{t('contact.form.error')}</span>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  {t('contact.form.name')} *
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.name ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('name', { required: t('contact.form.required') })}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  {t('contact.form.email')} *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.email ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('email', {
                    required: t('contact.form.required'),
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
                  {t('contact.form.phone')}
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
                  {t('contact.form.subject')} *
                </label>
                <input
                  id="subject"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.subject ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('subject', { required: t('contact.form.required') })}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  {t('contact.form.message')} *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-gold ${
                    errors.message ? 'border-red-500' : 'border-neutral-300'
                  }`}
                  {...register('message', { required: t('contact.form.required') })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                size="lg" 
                fullWidth
                disabled={isSubmitting}
              >
                <Send size={20} className="mr-2" />
                {isSubmitting ? 'Sending...' : t('contact.form.send')}
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Map Section */}
      <Section bgColor="bg-neutral-100" paddingY="lg">
        <SectionTitle
          title="Find Us in Dar es Salaam"
          subtitle="Visit our office in the heart of Tanzania's business district"
          center
        />
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.6956939513!2d39.20176931477!3d-6.8160964950234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c9c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sKinondoni%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="EmpireL Office Location - Kinondoni, Dar es Salaam"
          ></iframe>
        </div>
      </Section>

    </motion.div>
  );
};

export default Contact;