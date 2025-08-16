import { motion } from 'framer-motion';
import Section from '../common/Section';
import SectionTitle from '../common/SectionTitle';

const MetricsDashboard = () => {
  const metrics = [
    { label: 'Average Traffic Increase', value: '250%', color: 'bg-marketing-accent' },
    { label: 'Conversion Rate Improvement', value: '120%', color: 'bg-marketing-accent' },
    { label: 'Client Retention Rate', value: '95%', color: 'bg-primary-gold' },
    { label: 'ROI on Ad Spend', value: '380%', color: 'bg-primary-gold' },
  ];

  const campaignResults = [
    { month: 'Jan', organic: 20, paid: 40 },
    { month: 'Feb', organic: 30, paid: 45 },
    { month: 'Mar', organic: 40, paid: 55 },
    { month: 'Apr', organic: 50, paid: 60 },
    { month: 'May', organic: 70, paid: 65 },
    { month: 'Jun', organic: 85, paid: 75 },
    { month: 'Jul', organic: 100, paid: 85 },
  ];

  return (
    <Section bgColor="bg-neutral-100">
      <SectionTitle
        title="Our Marketing Impact"
        subtitle="We deliver measurable results that drive real business growth. Here's a snapshot of our marketing performance."
        accentColor="bg-marketing-accent"
      />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-soft p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className={`text-3xl md:text-4xl font-bold ${metric.color === 'bg-marketing-accent' ? 'text-marketing-accent' : 'text-primary-gold'} mb-2`}>
              {metric.value}
            </div>
            <div className="text-sm text-neutral-600">{metric.label}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="bg-white rounded-lg shadow-soft p-6 md:p-8">
        <h3 className="text-2xl font-bold text-primary-dark mb-6">Campaign Performance</h3>
        
        <div className="relative h-64">
          <div className="absolute left-0 bottom-0 h-full flex items-end">
            {campaignResults.map((result, index) => (
              <div key={index} className="flex flex-col items-center mx-2 md:mx-4">
                {/* Bars */}
                <div className="relative w-14 md:w-20">
                  {/* Paid bar */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-marketing-accent rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${result.paid * 2}px` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Organic bar */}
                  <motion.div
                    className="absolute bottom-0 left-2 right-2 bg-primary-gold rounded-t"
                    initial={{ height: 0 }}
                    whileInView={{ height: `${result.organic * 2}px` }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                {/* Month label */}
                <div className="text-xs md:text-sm text-neutral-600 mt-2">
                  {result.month}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center items-center mt-4 space-x-8">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-marketing-accent rounded-sm mr-2"></div>
            <span className="text-sm text-neutral-600">Paid Traffic</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-primary-gold rounded-sm mr-2"></div>
            <span className="text-sm text-neutral-600">Organic Traffic</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MetricsDashboard;