import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calculator, FileText, TrendingUp, Shield } from 'lucide-react'

const Home = () => {
  const services = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: 'Tax Preparation',
      description: 'Providing accurate and timely tax preparation services for individuals, businesses, and organizations. I assist clients in complying with tax regulations, maximizing eligible deductions, minimizing tax liabilities, and ensuring all tax returns are filed correctly and on schedule.',
      image: '/pics/yas1.jpeg'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Bookkeeping',
      description: 'Offering reliable bookkeeping services that help businesses maintain accurate financial records. Services include recording daily transactions, managing accounts payable and receivable, bank reconciliations, payroll support, and preparing financial reports to support informed business decisions.',
      image: '/pics/yas2.webp'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Financial Consulting',
      description: 'Delivering strategic financial advisory services to help individuals and businesses achieve their financial goals. I provide guidance on budgeting, cash flow management, financial planning, investment evaluation, cost reduction strategies, and business growth initiatives.',
      image: '/pics/yas3.webp'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Audit Services',
      description: 'Conducting thorough and independent audits to evaluate the accuracy, integrity, and compliance of financial records and internal controls. Audit services help organizations identify risks, improve operational efficiency, ensure regulatory compliance, and enhance stakeholder confidence.',
      image: '/pics/yas4.webp'
    }
  ]

  return (
    <div className="bg-secondary">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/pics/yas2.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Yassah Accounting Firm
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Your Trusted Partner for Professional Accounting Services
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              to="/faq"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-primary"
          >
            Our Services
          </motion.h2>
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                <div className="w-full md:w-1/2">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="overflow-hidden rounded-2xl shadow-xl"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-3xl font-bold mb-4 text-primary">{service.title}</h3>
                  <p className="text-gray-600 text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 px-4 relative"
        style={{
          backgroundImage: 'url(/pics/yas5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/70" />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-purple-200 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how we can help with your accounting needs.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition-colors inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
