import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, MapPin } from 'lucide-react';

// WhatsApp Glass Icon Component
const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    fill="currentColor"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
  </svg>
);

// UPDATED GALLERY IMAGES - ONLY CARPETS CATEGORY CHANGED
const galleryImages = [
  // STAIRS - UNCHANGED
  {
    src: '/Combi stairs.jpg',
    title: 'Combi stairs',
    category: 'Stairs',
    description: 'Professional staircase carpeting with elegant design and superior comfort'
  },
  {
    src: '/Combi stairs 2.jpg',
    title: 'Combi stairs 2',
    category: 'Stairs',
    description: 'Premium staircase installation with professional finish and quality materials'
  },
  {
    src: '/Stain free englewood Beige carpet.jpg',
    title: 'Stain free englewood Beige carpet',
    category: 'Stairs',
    description: 'Advanced stain-free carpet in elegant Englewood Beige with superior protection'
  },

  // LAMINATE FLOORING - UNCHANGED
  {
    src: '/Laminate color torros.jpg',
    title: 'Laminate color torros',
    category: 'Laminate Flooring',
    description: 'Premium Torros color laminate flooring with professional installation and authentic wood effect'
  },

  // VINYL FLOORING - UNCHANGED
  {
    src: '/Herringbone pattern vinyle copy.jpg',
    title: 'Herringbone pattern vinyle copy',
    category: 'vinyle Flooring',
    description: 'Stunning herringbone vinyl patterns offering classic style and unmatched durability'
  },
  {
    src: '/Luxury vinyle.jpg',
    title: 'Luxury vinyle',
    category: 'vinyle Flooring',
    description: 'Luxury vinyl flooring combining elegant design with superior durability and modern appeal'
  },
  {
    src: '/vinyle.jpg',
    title: 'vinyle',
    category: 'vinyle Flooring',
    description: 'Premium vinyl flooring designed for ultimate comfort and contemporary style'
  },

  // CARPETS - NEW IMAGES WITH EXACT NAMES
  {
    src: '/Luxury blue carpet copy.jpg',
    title: 'Luxury blue carpet copy',
    category: 'Carpets',
    description: 'Transform your space with luxury blue carpet offering ultimate comfort and elegant style'
  },
  {
    src: '/Luxury carpet ivory colour copy.jpg',
    title: 'Luxury carpet ivory colour copy',
    category: 'Carpets',
    description: 'Premium ivory carpet creating sophisticated statements in any space'
  },

  // UNDERLAY - UNCHANGED
  {
    src: '/Soundproof plush walk underlay.jpg',
    title: 'Soundproof Plush Walk Underlay',
    category: 'Underlay',
    description: 'Professional soundproof underlay providing superior comfort and noise reduction for any flooring'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  // EXACT CATEGORIES FROM PROVIDED MENU NAMES
  const categories = ['All', 'Stairs', 'Laminate Flooring', 'vinyle Flooring', 'Carpets', 'Underlay'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Explore our premium flooring collection: Stairs, Laminate, vinyle, Carpets, and Underlay solutions
          </p>

          {/* OPTIMIZED MOBILE FILTER BUTTONS */}
          <div className="w-full">
            {/* MOBILE LAYOUT - STACKED ROWS */}
            <div className="block sm:hidden space-y-3">
              {/* ROW 1 - ALL & STAIRS */}
              <div className="flex justify-center gap-3">
                {categories.slice(0, 2).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`flex-1 max-w-[140px] px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 ${
                      filter === category
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-yellow-400 shadow-lg shadow-yellow-500/25'
                        : 'bg-white/10 text-white/80 border-yellow-500/30 hover:border-yellow-400 hover:bg-white/20 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              {/* ROW 2 - LAMINATE & VINYL */}
              <div className="flex justify-center gap-3">
                {categories.slice(2, 4).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`flex-1 max-w-[140px] px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 ${
                      filter === category
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-yellow-400 shadow-lg shadow-yellow-500/25'
                        : 'bg-white/10 text-white/80 border-yellow-500/30 hover:border-yellow-400 hover:bg-white/20 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              {/* ROW 3 - CARPETS & UNDERLAY */}
              <div className="flex justify-center gap-3">
                {categories.slice(4, 6).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`flex-1 max-w-[140px] px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 ${
                      filter === category
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-yellow-400 shadow-lg shadow-yellow-500/25'
                        : 'bg-white/10 text-white/80 border-yellow-500/30 hover:border-yellow-400 hover:bg-white/20 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* TABLET & DESKTOP LAYOUT - SINGLE ROW */}
            <div className="hidden sm:flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                    filter === category
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white border-yellow-400 shadow-lg shadow-yellow-500/25'
                      : 'bg-white/10 text-white/80 border-yellow-500/30 hover:border-yellow-400 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="mt-6">
            <p className="text-white/60 text-sm">
              Showing <span className="text-yellow-400 font-semibold">{filteredImages.length}</span> of <span className="text-yellow-400 font-semibold">{galleryImages.length}</span> premium products
            </p>
          </div>
        </div>

        {/* OPTIMIZED GRID LAYOUT WITH PERFECT BUTTON ALIGNMENT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <motion.div 
              key={`${image.src}-${index}`}
              className="group relative bg-white/5 rounded-2xl overflow-hidden cursor-pointer border-2 border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 flex flex-col h-full"
              onClick={() => setSelectedImage(galleryImages.findIndex(img => img.src === image.src))}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(218, 165, 32, 0.3)" }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden flex-shrink-0">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load image: ${image.src}`);
                    e.currentTarget.src = '/Luxury blue carpet.jpg'; // Fallback to a known working image
                  }}
                />
                
                {/* Simple Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-yellow-400">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-yellow-500/50">
                    {image.category}
                  </span>
                </div>
              </div>
              
              {/* Content - PERFECT FLEX LAYOUT FOR BUTTON ALIGNMENT */}
              <div className="p-4 lg:p-6 border-t border-yellow-500/20 flex flex-col flex-grow">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2 flex-grow">
                  {image.title}
                </h3>
                
                {/* PERFECTLY ALIGNED WHATSAPP BUTTON WITH BLACK AND GOLD GRADIENT */}
                <div className="mt-auto">
                  <motion.a
                    href="http://wa.me/+447949087460"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative w-full bg-gradient-to-r from-black via-gray-900 to-black text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-500 flex items-center justify-center space-x-2 shadow-lg overflow-hidden border border-yellow-500/40"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(255, 215, 0, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Black and Gold Gradient Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    
                    {/* Animated Gold Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent -skew-x-12 opacity-0 group-hover/btn:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Pulsing Gold Background */}
                    <motion.div
                      className="absolute inset-0 bg-yellow-500/20 rounded-xl"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Content */}
                    <div className="relative z-10 flex items-center space-x-2">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <WhatsAppIcon className="w-5 h-5 text-green-400" />
                      </motion.div>
                      <motion.span
                        className="font-bold text-yellow-400 group-hover/btn:text-white"
                        whileHover={{ letterSpacing: "0.05em" }}
                        transition={{ duration: 0.3 }}
                      >
                        Get Quote
                      </motion.span>
                    </div>
                    
                    {/* Gold Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-yellow-500/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10" />
                  </motion.a>
                  
                  {/* Premium Badge - CONSISTENT SPACING */}
                  <div className="flex items-center justify-center mt-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400" fill="currentColor" />
                      <span className="text-white/60 text-xs lg:text-sm">Premium Quality</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show message if no results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No products found for this category.</p>
          </div>
        )}

        {/* Enhanced Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div 
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border-2 border-yellow-400"
              >
                <Star className="w-6 h-6" />
              </button>
              
              <motion.div 
                className="max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-yellow-400 relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={galleryImages[selectedImage].src} 
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-full object-contain"
                />
                
                {/* Enhanced Image Info Overlay with WhatsApp Button */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                  <p className="text-white/80 text-sm mb-4">{galleryImages[selectedImage].description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-white/70 text-sm">{galleryImages[selectedImage].category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        <span className="text-white/70 text-sm">Premium Quality</span>
                      </div>
                    </div>
                    
                    {/* Enhanced WhatsApp Button in Lightbox with Black and Gold */}
                    <motion.a
                      href="http://wa.me/+447949087460"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-500 flex items-center space-x-2 shadow-lg overflow-hidden border border-yellow-500/40"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 15px 35px rgba(255, 215, 0, 0.5)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Black and Gold Gradient Background Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated Gold Shine Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent -skew-x-12 opacity-0 group-hover/btn:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10 flex items-center space-x-2">
                        <motion.div
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <WhatsAppIcon className="w-5 h-5 text-green-400" />
                        </motion.div>
                        <motion.span
                          className="font-bold text-yellow-400 group-hover/btn:text-white"
                          whileHover={{ letterSpacing: "0.05em" }}
                          transition={{ duration: 0.3 }}
                        >
                          Get Quote
                        </motion.span>
                      </div>
                      
                      {/* Gold Glow Effect */}
                      <div className="absolute inset-0 rounded-xl bg-yellow-500/20 blur-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -z-10" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;