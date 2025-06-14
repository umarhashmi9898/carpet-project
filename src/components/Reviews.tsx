import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  image: string;
  projectImage: string;
  color: string;
  gradient: string;
  verified: boolean;
  completionDate: string;
  projectValue: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Birmingham, England',
    rating: 5,
    text: 'Absolutely brilliant service! The team transformed our staircase with gorgeous carpet from their extensive collection. Professional, punctual, and the quality is outstanding. Every detail was spot on.',
    service: 'Premium Staircase Carpeting',
    image: '/IMG-20250614-WA0001.jpg',
    projectImage: '/IMG-20250614-WA0001.jpg',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-indigo-600',
    verified: true,
    completionDate: 'November 2024',
    projectValue: '£2,400'
  },
  {
    id: 2,
    name: 'Michael Thompson',
    location: 'Birmingham, England',
    rating: 5,
    text: 'Exceptional staircase installation throughout our home. The attention to detail was impressive and the finish is absolutely perfect. Highly recommended! The team was professional throughout.',
    service: 'Elegant Stairway Installation',
    image: '/IMG-20250614-WA0002.jpg',
    projectImage: '/IMG-20250614-WA0002.jpg',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600',
    verified: true,
    completionDate: 'October 2024',
    projectValue: '£3,200'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Birmingham, England',
    rating: 5,
    text: 'Fantastic staircase carpeting for our home. The showroom had an amazing variety and the team helped us choose the perfect option. Couldn\'t be happier with the transformation!',
    service: 'Modern Staircase Design',
    image: '/IMG-20250614-WA0003.jpg',
    projectImage: '/IMG-20250614-WA0003.jpg',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
    verified: true,
    completionDate: 'September 2024',
    projectValue: '£1,800'
  },
  {
    id: 4,
    name: 'David Roberts',
    location: 'Birmingham, England',
    rating: 5,
    text: 'Outstanding staircase carpeting project. The precision and craftsmanship were first-class. The door-to-door service made everything so convenient. Will definitely use again for our next project.',
    service: 'Classic Stairway Excellence',
    image: '/IMG-20250614-WA0005.jpg',
    projectImage: '/IMG-20250614-WA0005.jpg',
    color: '#EF4444',
    gradient: 'from-red-500 to-pink-600',
    verified: true,
    completionDate: 'August 2024',
    projectValue: '£2,600'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    location: 'Birmingham, England',
    rating: 5,
    text: 'Brilliant transformation of our stairs with luxury laminate. The team was knowledgeable and helped us select from their wonderful range. Exceeded all expectations! Superb workmanship.',
    service: 'Luxury Laminate Staircase',
    image: '/IMG-20250614-WA0008.jpg',
    projectImage: '/IMG-20250614-WA0008.jpg',
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-600',
    verified: true,
    completionDate: 'July 2024',
    projectValue: '£2,100'
  }
];

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInViewport = useInView(sectionRef, { once: false, margin: "-100px" });

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && isInViewport) {
      intervalRef.current = setInterval(() => {
        if (!isTransitioning) {
          setDirection(1);
          setCurrentReview((prev) => (prev + 1) % reviews.length);
        }
      }, 6000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isTransitioning, isInViewport]);

  const nextReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const prevReview = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const currentReviewData = reviews[currentReview];

  return (
    <section 
      ref={sectionRef}
      id="reviews" 
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
    >
      {/* DYNAMIC BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        
        {/* Dynamic color-changing background based on current review */}
        <motion.div
          key={`bg-${currentReview}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 70%, ${currentReviewData.color}20, transparent 70%)`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
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
            <span className="text-white/90 font-semibold text-sm sm:text-base">Customer Testimonials</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Customer <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            See what our satisfied customers have to say about our premium flooring services across Birmingham
          </p>
        </motion.div>

        {/* MAIN TESTIMONIAL SHOWCASE - MOBILE OPTIMIZED */}
        <div className="relative max-w-6xl mx-auto">
          {/* PREMIUM TESTIMONIAL CARD - NO NAVIGATION OVERLAP */}
          <motion.div
            className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Dynamic border glow */}
            <motion.div 
              key={`border-${currentReview}`}
              className="absolute inset-0 rounded-3xl sm:rounded-[2rem] opacity-40 transition-all duration-1000 p-[1px]"
              animate={{
                background: `linear-gradient(135deg, ${currentReviewData.color}40, transparent, ${currentReviewData.color}30)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 rounded-3xl sm:rounded-[2rem]" />
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - PROJECT IMAGE */}
              <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`image-${currentReview}`}
                    initial={{ 
                      x: direction > 0 ? 300 : -300,
                      opacity: 0,
                      scale: 0.9
                    }}
                    animate={{ 
                      x: 0,
                      opacity: 1,
                      scale: 1
                    }}
                    exit={{ 
                      x: direction > 0 ? -300 : 300,
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
                      src={currentReviewData.projectImage}
                      alt={`${currentReviewData.service} project`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        console.error('Review image failed to load:', currentReviewData.projectImage);
                        // Fallback to a working Pexels image
                        e.currentTarget.src = 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1';
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Image overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent lg:from-transparent lg:to-black/30" />
                
                {/* Project details overlay */}
                <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6">
                  <motion.div
                    key={`overlay-${currentReview}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="space-y-2"
                  >
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-md border border-white/30 bg-gradient-to-r ${currentReviewData.gradient}`}>
                      {currentReviewData.service}
                    </div>
                    <div className="flex items-center space-x-4 text-white/90">
                      <span className="text-sm font-medium">{currentReviewData.completionDate}</span>
                      <span className="text-sm font-bold">{currentReviewData.projectValue}</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT SIDE - TESTIMONIAL CONTENT - MOBILE PERFECT */}
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${currentReview}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 flex flex-col justify-center"
                  >
                    {/* Quote icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <Quote 
                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 opacity-30"
                        style={{ color: currentReviewData.color }}
                      />
                    </motion.div>

                    {/* SUPER CLEAN IRON GLOW STAR RATING WITH SIDE NAVIGATION - PERFECT CLOSE POSITIONING */}
                    <motion.div 
                      className="flex items-center justify-center sm:justify-start relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {/* LEFT NAVIGATION ARROW - MUCH CLOSER TO STARS */}
                      <motion.button
                        onClick={prevReview}
                        disabled={isTransitioning}
                        whileHover={{ scale: 1.1, x: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute -left-6 sm:-left-7 lg:-left-8 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-black/80 backdrop-blur-xl border border-white/30 rounded-lg flex items-center justify-center text-white transition-all disabled:opacity-50 shadow-xl hover:bg-black/90 z-10"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>

                      {/* STAR RATING CONTAINER - PERFECT SIZE */}
                      <div className="bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-xl rounded-xl px-4 py-2.5 border border-slate-600/50 shadow-xl">
                        <div className="flex items-center space-x-3">
                          {/* CLEAN IRON STARS - PERFECT SIZE */}
                          <div className="flex items-center space-x-1">
                            {[...Array(currentReviewData.rating)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.4 + (i * 0.05), duration: 0.3 }}
                                className="relative"
                              >
                                {/* MAIN STAR - IRON GLOW EFFECT */}
                                <Star 
                                  className="w-5 h-5 text-yellow-400 fill-current relative z-10" 
                                  style={{ 
                                    filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.8)) drop-shadow(0 0 4px rgba(251, 191, 36, 0.6))',
                                    stroke: '#FCD34D',
                                    strokeWidth: '1px'
                                  }}
                                />
                                
                                {/* SUBTLE IRON GLOW */}
                                <motion.div
                                  className="absolute inset-0 w-5 h-5"
                                  animate={{ 
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                  }}
                                  transition={{ 
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                  }}
                                >
                                  <Star 
                                    className="w-full h-full text-yellow-300 fill-current blur-sm opacity-50" 
                                  />
                                </motion.div>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* CLEAN RATING TEXT */}
                          <div className="flex items-center space-x-1.5 ml-2">
                            <span className="text-yellow-400 font-bold text-lg">5.0</span>
                            <span className="text-slate-300 text-sm font-medium">/ 5</span>
                          </div>
                        </div>
                      </div>

                      {/* RIGHT NAVIGATION ARROW - MUCH CLOSER TO STARS */}
                      <motion.button
                        onClick={nextReview}
                        disabled={isTransitioning}
                        whileHover={{ scale: 1.1, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        className="absolute -right-6 sm:-right-7 lg:-right-8 w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-black/80 backdrop-blur-xl border border-white/30 rounded-lg flex items-center justify-center text-white transition-all disabled:opacity-50 shadow-xl hover:bg-black/90 z-10"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </motion.div>

                    {/* Review text - MOBILE OPTIMIZED WITH PROPER SPACING */}
                    <motion.blockquote 
                      className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed font-medium px-4 sm:px-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      "{currentReviewData.text}"
                    </motion.blockquote>

                    {/* PERFECT MOBILE CUSTOMER INFO WITH PROPER SPACING */}
                    <motion.div 
                      className="pt-4 sm:pt-6 border-t border-white/10 px-4 sm:px-0"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 bg-gradient-to-r ${currentReviewData.gradient} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                          <span className="text-white font-bold text-xl sm:text-2xl">
                            {currentReviewData.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight mb-1">
                            {currentReviewData.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-white/70">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                            <span className="text-sm sm:text-base lg:text-lg leading-tight">{currentReviewData.location}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* DESKTOP DOTS NAVIGATION ONLY */}
          <div className="hidden lg:block mt-8">
            <div className="flex items-center justify-center">
              <div className="bg-black/80 backdrop-blur-2xl rounded-2xl px-6 py-4 border border-white/20 shadow-2xl">
                <div className="flex items-center space-x-4">
                  {/* Counter */}
                  <div className="flex items-center space-x-2">
                    <motion.span 
                      key={`counter-${currentReview}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-white font-bold text-lg"
                    >
                      {String(currentReview + 1).padStart(2, '0')}
                    </motion.span>
                    <div 
                      className="w-6 h-0.5 rounded-full transition-all duration-500"
                      style={{ backgroundColor: currentReviewData.color }}
                    />
                    <span className="text-white/60 text-lg">
                      {String(reviews.length).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Separator */}
                  <div className="w-px h-6 bg-white/30" />
                  
                  {/* Dots navigation */}
                  <div className="flex items-center space-x-2">
                    {reviews.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          if (!isTransitioning) {
                            setIsTransitioning(true);
                            setDirection(index > currentReview ? 1 : -1);
                            setCurrentReview(index);
                            setTimeout(() => setIsTransitioning(false), 800);
                          }
                        }}
                        disabled={isTransitioning}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentReview ? 'scale-125' : ''
                        }`}
                        style={{
                          backgroundColor: index === currentReview ? currentReviewData.color : 'rgba(255,255,255,0.3)',
                        }}
                      >
                        {index === currentReview && (
                          <motion.div 
                            className="absolute inset-0 rounded-full"
                            style={{ backgroundColor: currentReviewData.color }}
                            animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;