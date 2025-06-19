import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Award, Palette, Home, ChevronLeft, ChevronRight, Eye, ArrowRight } from 'lucide-react';

// OPTIMIZED CARPET COLLECTIONS - REMOVED DUPLICATES, ORGANIZED BY TYPE
const carpetCollections = [
  {
    id: 1,
    name: 'Premium Staircase Collection',
    category: 'Staircase Carpeting',
    image: '/1.jpg',
    price: 'From £55/m²',
    features: ['Stain Resistant', 'Ultra Soft', 'Sound Dampening', 'Easy Care'],
    description: 'Experience ultimate luxury with our premium black staircase carpet featuring elegant border trim and superior comfort.',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 2,
    name: 'Blue-Grey Room Carpet',
    category: 'Room Carpeting',
    image: '/2.jpg',
    price: 'From £42/m²',
    features: ['Premium Comfort', 'Fade Resistant', 'Durable', 'Premium Quality'],
    description: 'Transform your living spaces with our premium blue-grey carpet offering exceptional comfort and style.',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    name: 'Geometric Vinyl Pattern',
    category: 'Designer Vinyl',
    image: '/3.jpg',
    price: 'From £48/m²',
    features: ['Bold Design', 'Water Resistant', 'Easy Clean', 'Modern Style'],
    description: 'Stunning geometric vinyl patterns that create bold, contemporary statements in any space.',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 4,
    name: 'Grey Wood Laminate',
    category: 'Luxury Vinyl',
    image: '/4.jpg',
    price: 'From £45/m²',
    features: ['Wood Effect', 'Realistic Grain', 'Durable Finish', 'Easy Install'],
    description: 'Authentic grey wood effect laminate combining the beauty of natural wood with superior durability.',
    color: '#EF4444',
    gradient: 'from-red-500 to-pink-600'
  },
  {
    id: 5,
    name: 'Dark Wood Living Room',
    category: 'Luxury Vinyl',
    image: '/5.jpg',
    price: 'From £50/m²',
    features: ['Rich Finish', 'Traditional Look', 'Premium Install', 'Long Lasting'],
    description: 'Rich dark wood effect flooring perfect for traditional living spaces with fireplaces.',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 6,
    name: 'Luxury Bedroom Carpet',
    category: 'Room Carpeting',
    image: '/6.jpg',
    price: 'From £40/m²',
    features: ['Ultimate Comfort', 'Soft Touch', 'Quality Assured', 'Professional'],
    description: 'Premium bedroom carpeting offering ultimate comfort and elegant style for peaceful spaces.',
    color: '#7C3AED',
    gradient: 'from-violet-500 to-purple-600'
  },
  {
    id: 7,
    name: 'Contemporary Kitchen Vinyl',
    category: 'Designer Vinyl',
    image: '/7.jpg',
    price: 'From £52/m²',
    features: ['Geometric Pattern', 'Water Resistant', 'Easy Maintenance', 'Bold Style'],
    description: 'Bold geometric vinyl patterns perfect for creating stunning focal points in kitchen spaces.',
    color: '#059669',
    gradient: 'from-emerald-600 to-green-600'
  },
  {
    id: 8,
    name: 'Herringbone Luxury Vinyl',
    category: 'Luxury Vinyl',
    image: '/8.jpg',
    price: 'From £55/m²',
    features: ['Classic Pattern', 'Premium Quality', 'Elegant Design', 'Expert Install'],
    description: 'Elegant herringbone pattern luxury vinyl combining classic design with modern durability.',
    color: '#DC2626',
    gradient: 'from-red-600 to-rose-600'
  }
];

const CarpetShowcase = () => {
  const [currentCarpet, setCurrentCarpet] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextCarpet = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentCarpet((prev) => (prev + 1) % carpetCollections.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevCarpet = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentCarpet((prev) => (prev - 1 + carpetCollections.length) % carpetCollections.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const currentCollection = carpetCollections[currentCarpet];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
        
        {/* Dynamic background based on current carpet */}
        <motion.div
          key={`bg-${currentCarpet}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 70% 30%, ${currentCollection.color}20, transparent 70%)`
          }}
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
            <Palette className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-white/90 font-semibold text-sm sm:text-base">Flooring Collections</span>
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Premium <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Flooring Collections</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore our curated range of 8 premium flooring solutions, each designed to bring luxury and comfort to your home
          </p>
        </motion.div>

        {/* NAVIGATION CONTROLS ABOVE SHOWCASE - PERFECT POSITIONING */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-4 bg-black/80 backdrop-blur-2xl rounded-2xl px-6 py-3 border border-white/20 shadow-2xl">
            {/* Left Arrow */}
            <motion.button
              onClick={prevCarpet}
              disabled={isTransitioning}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-xl border border-white/30 rounded-lg flex items-center justify-center text-white transition-all disabled:opacity-50 shadow-xl hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Collection Counter */}
            <div className="flex items-center space-x-3">
              <motion.span 
                key={`counter-${currentCarpet}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white font-bold text-base sm:text-lg"
              >
                {String(currentCarpet + 1).padStart(2, '0')}
              </motion.span>
              <div 
                className="w-6 h-0.5 rounded-full transition-all duration-500"
                style={{ backgroundColor: currentCollection.color }}
              />
              <span className="text-white/60 text-base sm:text-lg">
                {String(carpetCollections.length).padStart(2, '0')}
              </span>
            </div>

            {/* Right Arrow */}
            <motion.button
              onClick={nextCarpet}
              disabled={isTransitioning}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-white/10 backdrop-blur-xl border border-white/30 rounded-lg flex items-center justify-center text-white transition-all disabled:opacity-50 shadow-xl hover:bg-white/20"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>

        {/* Main Showcase */}
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dynamic border glow */}
            <motion.div 
              key={`border-${currentCarpet}`}
              className="absolute inset-0 rounded-3xl sm:rounded-[2rem] opacity-40 transition-all duration-1000 p-[1px]"
              animate={{
                background: `linear-gradient(135deg, ${currentCollection.color}40, transparent, ${currentCollection.color}30)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 rounded-3xl sm:rounded-[2rem]" />
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Carpet Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${currentCarpet}`}
                    initial={{ 
                      x: 300,
                      opacity: 0,
                      scale: 0.9
                    }}
                    animate={{ 
                      x: 0,
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{ 
                      x: -300,
                      opacity: 0,
                      scale: 0.9
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={currentCollection.image}
                      alt={currentCollection.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.log(`Failed to load image: ${currentCollection.image}`);
                        e.currentTarget.src = '/1.jpg'; // Fallback to a known working image
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:from-transparent lg:to-black/30" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6">
                  <motion.div
                    key={`badge-${currentCarpet}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/30 bg-gradient-to-r ${currentCollection.gradient}`}
                  >
                    {currentCollection.category}
                  </motion.div>
                </div>

                {/* Quality badge - REMOVED PRICE BADGE */}
                <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
                  <motion.div
                    key={`quality-${currentCarpet}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="bg-black/60 backdrop-blur-md rounded-lg px-3 py-2 border border-white/20"
                  >
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                      <span className="text-white text-xs font-bold">Premium Quality</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${currentCarpet}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    {/* Collection name */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {currentCollection.name}
                      </h3>
                      <p className="text-lg text-white/80 leading-relaxed">
                        {currentCollection.description}
                      </p>
                    </div>

                    {/* Features grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {currentCollection.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (index * 0.1), duration: 0.4 }}
                          className="flex items-center space-x-2"
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: currentCollection.color }}
                          />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <motion.a
                        href={`http://wa.me/+447949087460?text=I'm interested in the ${currentCollection.name}`}
                        className={`flex-1 bg-gradient-to-r ${currentCollection.gradient} text-white px-6 py-3 rounded-xl font-semibold text-center hover:scale-105 transition-all shadow-lg flex items-center justify-center space-x-2`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4" />
                      </motion.a>
                      
                      <motion.button
                        onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                        className="flex-1 border-2 border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:border-purple-400 hover:bg-purple-500/10 transition-all backdrop-blur-xl flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Gallery</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Collection Navigation Dots */}
        <motion.div 
          className="mt-8 sm:mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-black/80 backdrop-blur-2xl rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
            <div className="flex items-center space-x-4">
              {/* Dots navigation - All 8 collections */}
              <div className="flex items-center space-x-2">
                {carpetCollections.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      if (!isTransitioning) {
                        setIsTransitioning(true);
                        setCurrentCarpet(index);
                        setTimeout(() => setIsTransitioning(false), 600);
                      }
                    }}
                    disabled={isTransitioning}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCarpet ? 'scale-125' : ''
                    }`}
                    style={{
                      backgroundColor: index === currentCarpet ? currentCollection.color : 'rgba(255,255,255,0.3)',
                    }}
                  >
                    {index === currentCarpet && (
                      <motion.div 
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: currentCollection.color }}
                        animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="http://wa.me/+447949087460?text=I'd like to explore your complete flooring collection of 8 premium options"
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-lg sm:text-xl shadow-2xl hover:shadow-purple-500/25 transition-all relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Home className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
            <span className="relative z-10">Explore All 8 Collections</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.8 }}
            />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 3, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-8 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-xl border border-purple-500/30 flex items-center justify-center shadow-2xl hidden lg:flex"
      >
        <Palette className="w-8 h-8 text-purple-400" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -2, 0],
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
        <Award className="w-6 h-6 text-indigo-400" />
      </motion.div>
    </section>
  );
};

export default CarpetShowcase;