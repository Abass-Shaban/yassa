import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Yassah Accounting Firm</h3>
            <p className="text-purple-200">Professional Accounting Services</p>
          </div>
          
          <div className="flex space-x-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <MessageCircle size={24} />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Facebook size={24} />
            </motion.a>
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <Instagram size={24} />
            </motion.a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-6 pt-6 text-center text-purple-200">
          <p>&copy; 2024 Yassah Accounting Firm. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
