import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Award, Star } from 'lucide-react';

// ANALYZED AND OPTIMIZED - REMOVED DUPLICATES, ORGANIZED BY ACTUAL CONTENT
const galleryImages = [
  // STAIRCASE INSTALLATIONS - UPDATED WITH NEW IMAGE
  {
    src: '/Combi stairs.jpg',
    title: 'Combi Stairs Installation',
    category: 'Stairs',
    price: 'From £55/m²',
    description: 'Professional combination staircase installation with carpet treads and laminate risers'
  },
  {
    src: '/16.jpg',
    title: 'Luxury Staircase Runner',
    category: 'Stairs',
    price: 'From £60/m²',
    description: 'Premium staircase runner with decorative border'
  },

  // ROOM CARPETING - UPDATED WITH NEW IMAGES
  {
    src: '/Stain free englewood Beige carpet.jpg',
    title: 'Stain Free Englewood Beige Carpet',
    category: 'Carpets', 
    price: 'From £42/m²',
    description: 'Premium stain-resistant beige carpet with superior comfort and durability'
  },
  {
    src: '/Luxury carpet ivory colour.jpg',
    title: 'Luxury Carpet Ivory Colour',
    category: 'Carpets',
    price: 'From £45/m²',
    description: 'Elegant ivory luxury carpet offering exceptional comfort and style'
  },
  {
    src: '/Luxury blue carpet.jpg',
    title: 'Luxury Blue Carpet',
    category: 'Carpets',
    price: 'From £48/m²',
    description: 'Premium blue carpet installation with superior quality and finish'
  },
  {
    src: '/6.jpg',
    title: 'Luxury Bedroom Carpeting',
    category: 'Carpets',
    price: 'From £40/m²',
    description: 'Premium carpet installation in modern bedroom setting'
  },
  {
    src: '/10.jpg',
    title: 'Professional Carpet Installation',
    category: 'Carpets',
    price: 'From £44/m²',
    description: 'Expert carpet fitting with precision edge work'
  },
  {
    src: '/17.jpg',
    title: 'Premium Living Room Carpet',
    category: 'Carpets',
    price: 'From £46/m²',
    description: 'High-quality carpet installation in living space'
  },
  {
    src: '/49.jpg',
    title: 'Complete Room Transformation',
    category: 'Carpets',
    price: 'From £46/m²',
    description: 'Full room carpet installation with professional finish'
  },

  // VINYL FLOORING
  {
    src: '/3.jpg',
    title: 'Geometric Pattern Vinyl Flooring',
    category: 'Vinyl Flooring',
    price: 'From £48/m²',
    description: 'Stunning black and white geometric tile pattern vinyl'
  },
  {
    src: '/7.jpg',
    title: 'Contemporary Geometric Vinyl',
    category: 'Vinyl Flooring',
    price: 'From £52/m²',
    description: 'Bold geometric pattern vinyl for modern kitchen spaces'
  },
  {
    src: '/18.jpg',
    title: 'Decorative Tile Effect Vinyl',
    category: 'Vinyl Flooring',
    price: 'From £50/m²',
    description: 'Intricate decorative tile pattern vinyl flooring'
  },

  // LAMINATE FLOORING
  {
    src: '/4.jpg',
    title: 'Grey Wood Effect Laminate',
    category: 'Laminate Flooring',
    price: 'From £45/m²',
    description: 'Premium grey wood grain laminate flooring installation'
  },
  {
    src: '/5.jpg',
    title: 'Dark Wood Laminate Living Room',
    category: 'Laminate Flooring',
    price: 'From £50/m²',
    description: 'Rich dark wood effect laminate with traditional fireplace'
  },
  {
    src: '/8.jpg',
    title: 'Herringbone Luxury Vinyl',
    category: 'Laminate Flooring',
    price: 'From £55/m²',
    description: 'Classic herringbone pattern luxury vinyl flooring'
  },
  {
    src: '/9.jpg',
    title: 'Parquet Style Luxury Vinyl',
    category: 'Laminate Flooring',
    price: 'From £58/m²',
    description: 'Elegant parquet pattern vinyl with traditional appeal'
  },
  {
    src: '/20.jpg',
    title: 'Natural Wood Effect Flooring',
    category: 'Laminate Flooring',
    price: 'From £48/m²',
    description: 'Authentic wood grain effect luxury vinyl'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  // UPDATED CATEGORIES BASED ON YOUR REQUIREMENTS
  const categories = ['All', 'Stairs', 'Carpets', 'Underlay', 'Vinyl Flooring', 'Laminate Flooring'];
  
  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Project <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Explore our curated portfolio of premium flooring installations across Birmingham and West Midlands
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
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-[#B57EFA] shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 text-white/80 border-[#B57EFA]/30 hover:border-[#B57EFA] hover:bg-white/20 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              {/* ROW 2 - CARPETS & UNDERLAY */}
              <div className="flex justify-center gap-3">
                {categories.slice(2, 4).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`flex-1 max-w-[140px] px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 ${
                      filter === category
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-[#B57EFA] shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 text-white/80 border-[#B57EFA]/30 hover:border-[#B57EFA] hover:bg-white/20 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              {/* ROW 3 - VINYL & LAMINATE */}
              <div className="flex justify-center gap-3">
                {categories.slice(4, 6).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`flex-1 max-w-[140px] px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border-2 ${
                      filter === category
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-[#B57EFA] shadow-lg shadow-purple-500/25'
                        : 'bg-white/10 text-white/80 border-[#B57EFA]/30 hover:border-[#B57EFA] hover:bg-white/20 hover:text-white'
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
                      ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white border-[#B57EFA] shadow-lg shadow-purple-500/25'
                      : 'bg-white/10 text-white/80 border-[#B57EFA]/30 hover:border-[#B57EFA] hover:bg-white/20 hover:text-white'
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
              Showing <span className="text-purple-400 font-semibold">{filteredImages.length}</span> of <span className="text-purple-400 font-semibold">{galleryImages.length}</span> unique projects
            </p>
          </div>
        </div>

        {/* OPTIMIZED GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8">
          {filteredImages.map((image, index) => (
            <motion.div 
              key={`${image.src}-${index}`}
              className="group relative bg-white/5 rounded-2xl overflow-hidden cursor-pointer border-2 border-[#B57EFA]/30 hover:border-[#B57EFA] transition-all duration-300"
              onClick={() => setSelectedImage(galleryImages.findIndex(img => img.src === image.src))}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(181, 126, 250, 0.3)" }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load image: ${image.src}`);
                    e.currentTarget.src = '/1.jpg'; // Fallback to a known working image
                  }}
                />
                
                {/* Simple Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-[#B57EFA]/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-[#B57EFA]">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-[#B57EFA]/50">
                    {image.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 lg:p-6 border-t border-[#B57EFA]/20">
                <h3 className="text-base lg:text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {image.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[#B57EFA] font-medium text-sm lg:text-base">{image.price}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-400" fill="currentColor" />
                    <span className="text-white/60 text-xs lg:text-sm">Premium</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show message if no results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60 text-lg">No projects found for this category.</p>
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
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors border-2 border-[#B57EFA]"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div 
                className="max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#B57EFA] relative"
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
                
                {/* Enhanced Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                  <p className="text-white/80 text-sm mb-3">{galleryImages[selectedImage].description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold text-lg">{galleryImages[selectedImage].price}</span>
                    <div className="flex items-center space-x-4">
                      <span className="text-white/70 text-sm">{galleryImages[selectedImage].category}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        <span className="text-white/70 text-sm">Premium Quality</span>
                      </div>
                    </div>
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