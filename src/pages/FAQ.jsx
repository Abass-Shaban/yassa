import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What accounting services do you offer?',
      answer: 'We offer a comprehensive range of accounting services including tax preparation, bookkeeping, financial consulting, audit services, payroll processing, and business advisory services for both individuals and businesses.'
    },
    {
      question: 'How much do your services cost?',
      answer: 'Our pricing is customized based on the specific needs of each client. We offer competitive rates and provide transparent quotes after an initial consultation to understand your requirements.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes, we specialize in working with small to medium-sized businesses. We understand the unique challenges small businesses face and provide tailored solutions to help them grow and succeed.'
    },
    {
      question: 'What documents do I need for tax preparation?',
      answer: 'For individual tax preparation, we typically need W-2 forms, 1099 forms, investment statements, deduction receipts, and previous tax returns. For businesses, we require financial statements, expense records, payroll information, and relevant business documents.'
    },
    {
      question: 'How long does it take to complete tax returns?',
      answer: 'The timeline varies depending on the complexity of your tax situation. Simple individual returns can be completed within a few days, while complex business returns may take 1-2 weeks. We work efficiently to meet all filing deadlines.'
    },
    {
      question: 'Do you offer virtual or remote services?',
      answer: 'Yes, we offer both in-person and virtual services. We can securely handle your accounting needs through video calls, secure document sharing, and online collaboration tools, making it convenient for clients anywhere.'
    },
    {
      question: 'Are you certified and licensed?',
      answer: 'Yes, our firm is fully licensed and our accountants hold relevant professional certifications. We stay updated with the latest tax laws and accounting standards to provide you with accurate and compliant services.'
    },
    {
      question: 'Can you help with tax planning throughout the year?',
      answer: 'Absolutely! We provide year-round tax planning services to help you minimize tax liability and maximize savings. We recommend regular check-ins to optimize your financial strategy.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience working with various industries including retail, healthcare, technology, construction, professional services, and more. Our diverse expertise allows us to understand industry-specific accounting needs.'
    },
    {
      question: 'How do I get started with your services?',
      answer: 'Getting started is easy! Simply contact us through our website, email, or phone. We\'ll schedule an initial consultation to discuss your needs and provide a customized proposal for our services.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-secondary min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our accounting services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-purple-50 transition-colors"
              >
                <span className="font-semibold text-primary text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary flex-shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0 ml-4" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please reach out to our team directly.
          </p>
          <a
            href="mailto:abassshaban45@gmail.com"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-800 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
