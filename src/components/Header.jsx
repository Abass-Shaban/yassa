import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary text-white shadow-lg sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-purple-300 transition-colors">
            Yassah Accounting Firm
          </Link>
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="hover:text-purple-300 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/faq"
              className="hover:text-purple-300 transition-colors font-medium"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="hover:text-purple-300 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  )
}

export default Header
