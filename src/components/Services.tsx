import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, ArrowRight, Star, Award, CheckCircle, Hammer } from 'lucide-react';

// EXACT SERVICES MATCHING PROVIDED MENU NAMES - REMOVED CARPETS
const services = [
  {
    icon: Hammer,
    title: 'Stairs',
    description: 'Professional staircase carpeting and flooring solutions with premium materials and expert installation.',
    features: ['Professional Installation', 'Premium Materials', 'Safety Focused', 'Custom Fitting'],
    image: '/Combi stairs.jpg',
    gradient: 'from-purple-500 to-indigo-600',
    subtitle: 'Professional Installation',
    iconBg: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    icon: Layers,
    title: 'Laminate Flooring',
    description: 'Premium laminate flooring including Torros color collection with authentic wood effects and superior durability.',
    features: ['Wood Effect Finish', 'Durable Surface', 'Easy Maintenance', 'Professional Install'],
    image: '/Laminate colour torros.jpg',
    gradient: 'from-emerald-500 to-teal-600',
    subtitle: 'Premium Wood Effect',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    icon: Palette,
    title: 'Vinyl Flooring',
    description: 'Luxury vinyl flooring including herringbone patterns and premium vinyl collections for modern spaces.',
    features: ['Pattern Designs', 'Water Resistant', 'Luxury Finish', 'Contemporary Style'],
    image: '/Herringbone pattern vinyl.jpg',
    gradient: 'from-amber-500 to-orange-600',
    subtitle: 'Luxury Patterns',
    iconBg: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30'
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.05, 0.1],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
            <span className="text-white/90 font-semibold text-sm sm:text-base">Our Services</span>
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium flooring solutions: Stairs, Laminate, and Vinyl
          </p>
        </motion.div>

        {/* Service Tabs - SWAPPED LAYOUT */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Enhanced Active Service Content - NOW ON LEFT */}
          <div className="lg:w-2/3 order-2 lg:order-1">
            <motion.div 
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
              key={activeService}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Dynamic border glow */}
              <motion.div 
                className={`absolute inset-0 rounded-3xl opacity-30 transition-all duration-1000 p-[1px]`}
                animate={{
                  background: `linear-gradient(135deg, ${services[activeService].gradient.includes('purple') ? '#8B5CF6' : services[activeService].gradient.includes('emerald') ? '#10B981' : '#F59E0B'}40, transparent, ${services[activeService].gradient.includes('purple') ? '#8B5CF6' : services[activeService].gradient.includes('emerald') ? '#10B981' : '#F59E0B'}30)`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 rounded-3xl" />
              </motion.div>

              <div className="relative z-10">
                <div className="relative h-64 sm:h-80 overflow-hidden rounded-t-3xl">
                  <motion.img 
                    src={services[activeService].image} 
                    alt={services[activeService].title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    onError={(e) => {
                      console.log(`Failed to load image: ${services[activeService].image}`);
                      e.currentTarget.src = '/Luxury blue carpet.jpg'; // Fallback to a known working image
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Quality Badge */}
                  <motion.div 
                    className="absolute top-6 left-6"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1 border border-white/20">
                      <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                      <span className="text-white text-xs font-semibold">Premium Quality</span>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-8 sm:p-10">
                  <motion.h3 
                    className="text-2xl sm:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {services[activeService].title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-white/70 text-lg mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {services[activeService].description}
                  </motion.p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {services[activeService].features.map((feature, index) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${services[activeService].gradient}`}></div>
                        <span className="text-white/80 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.a 
                    href="http://wa.me/+447949087460?text=I'm interested in your flooring services"
                    className={`inline-flex items-center space-x-3 bg-gradient-to-r ${services[activeService].gradient} text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-2xl relative overflow-hidden group`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Get Quote for {services[activeService].title}</span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Tab Navigation - NOW ON RIGHT */}
          <div className="lg:w-1/3 space-y-4 order-1 lg:order-2">
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveService(index)}
                className={`group relative w-full text-left p-6 sm:p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.gradient}/20 ${service.borderColor} text-white shadow-2xl`
                    : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02, 
                  x: -4,
                  boxShadow: activeService === index 
                    ? "0 25px 50px rgba(139, 92, 246, 0.3)" 
                    : "0 15px 30px rgba(255, 255, 255, 0.1)"
                }}
              >
                {/* Background Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Active Service Indicator - NOW ON RIGHT */}
                {activeService === index && (
                  <motion.div
                    className={`absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b ${service.gradient} rounded-l-full`}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      {/* Enhanced Icon Container */}
                      <motion.div 
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                          activeService === index
                            ? `bg-gradient-to-r ${service.gradient} shadow-xl`
                            : `bg-gradient-to-r ${service.iconBg} backdrop-blur-sm border border-white/20`
                        }`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)"
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <service.icon className={`w-7 h-7 transition-colors duration-300 ${
                          activeService === index ? 'text-white' : 'text-purple-300 group-hover:text-white'
                        }`} />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className={`text-lg sm:text-xl font-bold transition-colors duration-300 ${
                          activeService === index ? 'text-white' : 'text-white/90 group-hover:text-white'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-sm transition-colors duration-300 ${
                          activeService === index ? 'text-white/80' : 'text-white/60 group-hover:text-white/80'
                        }`}>
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Arrow Indicator - FLIPPED DIRECTION */}
                    <motion.div
                      className={`transition-all duration-300 ${
                        activeService === index ? 'text-white opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'
                      }`}
                      whileHover={{ x: -4 }}
                    >
                      <ArrowRight className="w-5 h-5 rotate-180" />
                    </motion.div>
                  </div>

                  {/* Quality Indicator */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      activeService === index ? 'text-white/70' : 'text-white/50 group-hover:text-white/70'
                    }`}>
                      Premium Quality
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                      <span className={`text-xs font-bold transition-colors duration-300 ${
                        activeService === index ? 'text-white' : 'text-white/80 group-hover:text-white'
                      }`}>
                        Certified
                      </span>
                    </div>
                  </div>

                  {/* Active Service Features Preview */}
                  {activeService === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-white/20"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.3 }}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-3 h-3 text-green-400" />
                            <span className="text-xs text-white/70">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400/30 rounded-full group-hover:bg-purple-400 transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-indigo-400/30 rounded-full group-hover:bg-indigo-400 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-xl border border-purple-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, -3, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-32 left-8 w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl backdrop-blur-xl border border-indigo-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-md" />
      </motion.div>
    </section>
  );
};

export default Services;