import { ShoppingBag, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import Logo from './Logo';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className="h-8 w-full bg-gold flex items-center justify-center text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
        Complementary Heritage Gift Box on All Orders Above ₹5,000
      </div>
      <nav className="sticky top-0 z-50 bg-white border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-900 hover:text-forest transition-colors p-2"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[11px] uppercase tracking-widest transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold font-bold'
                      : 'text-forest hover:text-gold font-medium'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 mt-2">
              <Link to="/">
                <img src="/logo.png" alt="JKV Logo" className="h-14 mt-1 object-contain" />
              </Link>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 lg:space-x-6">
              <button className="text-forest hover:text-gold transition-colors p-2 hidden sm:block">
                <Search className="h-5 w-5" />
              </button>
              <Link
                to="/cart"
                className="text-forest hover:text-gold transition-colors p-2 flex items-center"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-medium">0</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex lg:hidden"
          >
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
              className="relative flex-1 flex flex-col max-w-xs w-full bg-white shadow-xl"
            >
              <div className="p-6 flex justify-between items-center border-b border-gray-100">
                <span className="font-serif text-2xl font-bold text-forest tracking-tighter">
                  JKV
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 py-6 px-4 overflow-y-auto space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg uppercase tracking-widest text-gray-900 hover:text-forest"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
