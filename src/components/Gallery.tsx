import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Eye, Award, Star } from 'lucide-react';

const galleryImages = [
  {
    src: '/1.jpg',
    title: 'Premium Staircase Carpeting',
    category: 'Staircase Flooring',
    price: 'From £55/m²'
  },
  {
    src: '/2.jpg',
    title: 'Elegant Stairway Installation',
    category: 'Staircase Flooring',
    price: 'From £55/m²'
  },
  {
    src: '/3.jpg',
    title: 'Modern Staircase Design',
    category: 'Staircase Flooring',
    price: 'From £55/m²'
  },
  {
    src: '/4.jpg',
    title: 'Classic Stairway Excellence',
    category: 'Staircase Flooring',
    price: 'From £60/m²'
  },
  {
    src: '/5.jpg',
    title: 'Luxury Laminate Staircase',
    category: 'Laminate Staircase',
    price: 'From £65/m²'
  },
  {
    src: '/6.jpg',
    title: 'Premium Room Carpeting',
    category: 'Room Carpeting',
    price: 'From £40/m²'
  },
  {
    src: '/7.jpg',
    title: 'Geometric Vinyl Design',
    category: 'Designer Vinyl',
    price: 'From £45/m²'
  },
  {
    src: '/8.jpg',
    title: 'Herringbone Luxury Vinyl',
    category: 'Luxury Vinyl',
    price: 'From £50/m²'
  },
  {
    src: '/9.jpg',
    title: 'Parquet Pattern Flooring',
    category: 'Luxury Vinyl',
    price: 'From £55/m²'
  },
  {
    src: '/10.jpg',
    title: 'Professional Room Installation',
    category: 'Room Carpeting',
    price: 'From £45/m²'
  },
  {
    src: '/16.jpg',
    title: 'Luxury Staircase Installation',
    category: 'Staircase Flooring',
    price: 'From £58/m²'
  },
  {
    src: '/17.jpg',
    title: 'Premium Bedroom Carpeting',
    category: 'Room Carpeting',
    price: 'From £46/m²'
  },
  {
    src: '/18.jpg',
    title: 'Decorative Tile Pattern',
    category: 'Designer Vinyl',
    price: 'From £50/m²'
  },
  {
    src: '/20.jpg',
    title: 'Complete Room Transformation',
    category: 'Room Carpeting',
    price: 'From £48/m²'
  },
  {
    src: '/IMG-20250614-WA0001.jpg',
    title: 'Premium Carpet Installation',
    category: 'Room Carpeting',
    price: 'From £42/m²'
  },
  {
    src: '/IMG-20250614-WA0002.jpg',
    title: 'Geometric Pattern Vinyl',
    category: 'Designer Vinyl',
    price: 'From £47/m²'
  },
  {
    src: '/IMG-20250614-WA0003.jpg',
    title: 'Herringbone Wood Effect',
    category: 'Luxury Vinyl',
    price: 'From £52/m²'
  },
  {
    src: '/IMG-20250614-WA0005.jpg',
    title: 'Luxury Carpet Corner',
    category: 'Room Carpeting',
    price: 'From £44/m²'
  },
  {
    src: '/IMG-20250614-WA0008.jpg',
    title: 'Elegant Staircase Runner',
    category: 'Staircase Flooring',
    price: 'From £60/m²'
  },
  {
    src: '/49.jpg',
    title: 'Premium Flooring Showcase',
    category: 'Room Carpeting',
    price: 'From £46/m²'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Staircase Flooring', 'Laminate Staircase', 'Room Carpeting', 'Designer Vinyl', 'Luxury Vinyl'];
  
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
            Explore our complete portfolio of 20 luxury flooring installations across Birmingham and West Midlands
          </p>

          {/* PERFECT MOBILE FILTER BUTTONS */}
          <div className="w-full">
            {/* MOBILE LAYOUT - STACKED ROWS */}
            <div className="block sm:hidden space-y-3">
              {/* ROW 1 - ALL & STAIRCASE */}
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
              
              {/* ROW 2 - LAMINATE & ROOM */}
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
              
              {/* ROW 3 - DESIGNER & LUXURY */}
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
              Showing <span className="text-purple-400 font-semibold">{filteredImages.length}</span> of <span className="text-purple-400 font-semibold">{galleryImages.length}</span> projects
            </p>
          </div>
        </div>

        {/* Clean Grid Layout - RESPONSIVE FOR ALL 20 IMAGES */}
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

        {/* Lightbox */}
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
                className="max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border-2 border-[#B57EFA]"
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
                
                {/* Image Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">{galleryImages[selectedImage].price}</span>
                    <span className="text-white/70">{galleryImages[selectedImage].category}</span>
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