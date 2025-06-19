import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Home, Briefcase, Camera, Star, MessageCircle, ChevronRight, MapPin, Clock, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { 
      id: 'hero-section', 
      label: 'Home', 
      icon: Home, 
      description: 'Welcome & Overview',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      id: 'services', 
      label: 'Services', 
      icon: Briefcase, 
      description: 'Our Expertise',
      color: 'from-indigo-500 to-purple-600'
    },
    { 
      id: 'gallery', 
      label: 'Gallery', 
      icon: Camera, 
      description: 'Project Portfolio',
      color: 'from-purple-500 to-pink-600'
    },
    { 
      id: 'reviews', 
      label: 'Reviews', 
      icon: Star, 
      description: 'Customer Feedback',
      color: 'from-pink-500 to-purple-600'
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: MessageCircle, 
      description: 'Get In Touch',
      color: 'from-purple-600 to-indigo-500'
    }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* INCREASED HEIGHT FOR BETTER SPACING */}
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-800 to-indigo-900 rounded"></div>
              </div>
              <span className="text-white font-bold text-lg">SYN Carpets</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {menuItems.map((item) => (
                <motion.button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)} 
                  className="text-white/80 hover:text-white transition-colors relative group"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 group-hover:w-full transition-all duration-300"></div>
                </motion.button>
              ))}
            </nav>

            {/* Desktop WhatsApp Button */}
            <motion.a 
              href="https://wa.me/447949087460"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              <span>WhatsApp</span>
            </motion.a>

            {/* Mobile Menu Button - IMPROVED VISIBILITY */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all z-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU - FIXED Z-INDEX AND POSITIONING */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop - HIGHER Z-INDEX */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel - HIGHEST Z-INDEX */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30,
                opacity: { duration: 0.2 }
              }}
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-br from-gray-900/95 via-black/95 to-purple-900/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl z-[60] overflow-hidden"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ 
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                    opacity: [0.15, 0.05, 0.15]
                  }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"
                />
              </div>

              {/* Header Section */}
              <div className="relative z-10 p-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg"></div>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">SYN Carpets</h3>
                      <p className="text-purple-300 text-sm">Luxury Redefined</p>
                    </div>
                  </motion.div>
                  
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <X size={16} />
                  </motion.button>
                </div>

                {/* Quick Stats */}
                <motion.div 
                  className="grid grid-cols-3 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 text-center">
                    <Award className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                    <p className="text-white text-xs font-semibold">16+ Years</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 text-center">
                    <MapPin className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                    <p className="text-white text-xs font-semibold">100 Miles</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-2 text-center">
                    <Star className="w-4 h-4 text-yellow-400 mx-auto mb-1" fill="currentColor" />
                    <p className="text-white text-xs font-semibold">Premium</p>
                  </div>
                </motion.div>
              </div>

              {/* Navigation Menu */}
              <div className="relative z-10 flex-1 p-6 overflow-y-auto">
                <motion.div 
                  className="space-y-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="group w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 text-left overflow-hidden relative"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Gradient Background on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold text-base group-hover:text-purple-300 transition-colors">
                              {item.label}
                            </h4>
                            <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        <motion.div
                          className="text-white/40 group-hover:text-white/80 transition-colors"
                          whileHover={{ x: 4 }}
                        >
                          <ChevronRight size={18} />
                        </motion.div>
                      </div>

                      {/* Animated Border */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-600 group-hover:w-full transition-all duration-500" />
                    </motion.button>
                  ))}
                </motion.div>
              </div>

              {/* Contact Section */}
              <div className="relative z-10 p-6 border-t border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  {/* Contact Info */}
                  <div className="mb-4 space-y-3">
                    <div className="flex items-center space-x-3 text-white/80">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Birmingham & West Midlands</p>
                        <p className="text-xs text-white/60">100 Mile Coverage</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-white/80">
                      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-4 h-4 text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">9 AM - 6 PM</p>
                        <p className="text-xs text-white/60">All Days Available</p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp CTA */}
                  <motion.a 
                    href="https://wa.me/447949087460"
                    className="group w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <Phone className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Contact on WhatsApp</span>
                    
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 right-4 w-1 h-16 bg-gradient-to-b from-purple-500/30 via-indigo-500/30 to-purple-500/30 rounded-full" />
              <div className="absolute bottom-20 left-4 w-1 h-12 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-indigo-500/30 rounded-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;