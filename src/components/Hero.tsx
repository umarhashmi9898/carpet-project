import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, MapPin, Clock, Phone, Sparkles, Award, Shield, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { gsap } from 'gsap';
import LoadingScreen from './LoadingScreen';

// EXACT MENUS AND IMAGES AS PROVIDED - NO DUPLICATES
const luxuryFlooringImages = [
  { 
    id: 1, 
    img: "/Combi stairs.jpg",
    title: "Premium Staircase Installation",
    subtitle: "Professional Stair Carpeting",
    category: "Stairs",
    color: "#DAA520",
    gradient: "from-yellow-500 to-amber-600",
    description: "Transform your staircase with our premium carpeting featuring professional installation and superior comfort."
  },
  { 
    id: 2, 
    img: "/Laminate colour torros.jpg",
    title: "Torros Laminate Flooring",
    subtitle: "Premium Wood Effect",
    category: "Laminate Flooring",
    color: "#B8860B",
    gradient: "from-amber-500 to-yellow-600",
    description: "Experience professional laminate flooring with premium Torros color and precision installation."
  },
  { 
    id: 3, 
    img: "/Herringbone pattern vinyl.jpg",
    title: "Herringbone Pattern Vinyl",
    subtitle: "Contemporary Design",
    category: "Vinyl Flooring",
    color: "#FFD700",
    gradient: "from-yellow-400 to-orange-500",
    description: "Discover our stunning herringbone vinyl patterns offering classic style and unmatched durability."
  },
  { 
    id: 4, 
    img: "/Herringbone pattern vinyle.jpg",
    title: "Herringbone Pattern Vinyl Alternative",
    subtitle: "Contemporary Design",
    category: "Vinyl Flooring",
    color: "#CD853F",
    gradient: "from-orange-400 to-yellow-500",
    description: "Alternative herringbone vinyl pattern with premium quality and modern appeal."
  },
  { 
    id: 5, 
    img: "/Vinyl.jpg",
    title: "Premium Vinyl Flooring",
    subtitle: "Modern Design",
    category: "Vinyl Flooring",
    color: "#DAA520",
    gradient: "from-yellow-500 to-amber-600",
    description: "Premium vinyl flooring designed for ultimate comfort and contemporary style."
  },
  { 
    id: 6, 
    img: "/Luxury vinyl.jpg",
    title: "Luxury Vinyl Collection",
    subtitle: "Premium Quality",
    category: "Vinyl Flooring",
    color: "#B8860B",
    gradient: "from-amber-500 to-yellow-600",
    description: "Luxury vinyl flooring combining elegant design with superior durability and modern appeal."
  },
  { 
    id: 7, 
    img: "/Luxury blue carpet.jpg",
    title: "Luxury Blue Carpet",
    subtitle: "Premium Comfort",
    category: "Carpets",
    color: "#FFD700",
    gradient: "from-yellow-400 to-orange-500",
    description: "Transform your space with our luxury blue carpet offering ultimate comfort and elegant style."
  },
  { 
    id: 8, 
    img: "/Luxury carpet ivory colour.jpg",
    title: "Luxury Ivory Carpet",
    subtitle: "Elegant Design",
    category: "Carpets",
    color: "#CD853F",
    gradient: "from-orange-400 to-yellow-500",
    description: "Premium ivory carpet that creates stunning, sophisticated statements in any space."
  },
  { 
    id: 9, 
    img: "/Stain free Englewood Beige carpet.jpg",
    title: "Stain Free Englewood Beige",
    subtitle: "Advanced Protection",
    category: "Carpets",
    color: "#DAA520",
    gradient: "from-yellow-500 to-amber-600",
    description: "Advanced stain-free carpet in elegant Englewood Beige combining protection with luxury style."
  },
  { 
    id: 10, 
    img: "/Soundproof plush walk underlay.jpg",
    title: "Soundproof Plush Walk Underlay",
    subtitle: "Premium Foundation",
    category: "Underlay",
    color: "#B8860B",
    gradient: "from-amber-500 to-yellow-600",
    description: "Professional soundproof underlay providing superior comfort and noise reduction for any flooring."
  }
];

// MOBILE-OPTIMIZED 3D CAROUSEL COMPONENT
const MobileOptimized3DCarousel = ({ images }: { images: typeof luxuryFlooringImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        if (!isTransitioning) {
          setDirection(1);
          setCurrentIndex((prev) => (prev + 1) % images.length);
        }
      }, 5000);
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
  }, [isPlaying, isTransitioning, images.length]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
      {/* PERFECT CENTERED CONTAINER */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* DYNAMIC BACKGROUND AURA - MOBILE OPTIMIZED */}
        <motion.div 
          className="absolute -inset-8 sm:-inset-12 rounded-[3rem] sm:rounded-[4rem] blur-2xl sm:blur-3xl opacity-25 sm:opacity-30 transition-all duration-1000"
          animate={{
            background: `radial-gradient(circle at center, ${currentImage.color}40, ${currentImage.color}20, transparent)`,
          }}
        />
        
        {/* MAIN CAROUSEL CONTAINER - MOBILE RESPONSIVE */}
        <motion.div
          className="relative w-72 h-[460px] sm:w-80 sm:h-[520px] bg-gradient-to-br from-black/90 via-gray-900/95 to-black/90 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-2xl border border-yellow-500/30 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* DYNAMIC BORDER GLOW - MOBILE OPTIMIZED */}
          <motion.div 
            className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-60 transition-all duration-1000 p-[1px]"
            animate={{
              background: `linear-gradient(135deg, ${currentImage.color}40, transparent, ${currentImage.color}30)`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-black/95 via-gray-900/95 to-black/95 rounded-2xl sm:rounded-3xl" />
          </motion.div>
          
          {/* IMAGE SECTION - MOBILE RESPONSIVE */}
          <div className="relative h-[65%] overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  x: direction > 0 ? 288 : -288,
                  opacity: 0,
                  scale: 0.85,
                  rotateY: direction > 0 ? 30 : -30
                }}
                animate={{ 
                  x: 0,
                  opacity: 1,
                  scale: 1,
                  rotateY: 0
                }}
                exit={{ 
                  x: direction > 0 ? -288 : 288,
                  opacity: 0,
                  scale: 0.85,
                  rotateY: direction > 0 ? -30 : 30
                }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute inset-0"
                style={{ perspective: '1000px' }}
              >
                <img
                  src={currentImage.img}
                  alt={currentImage.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load image: ${currentImage.img}`);
                    e.currentTarget.src = '/Luxury blue carpet.jpg'; // Fallback to a known working image
                  }}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* PREMIUM OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30" />
            
            {/* CATEGORY BADGE - MOBILE RESPONSIVE */}
            <motion.div 
              key={`badge-${currentIndex}`}
              initial={{ opacity: 0, y: -16, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute top-3 sm:top-5 left-3 sm:left-5"
            >
              <div 
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-md border border-yellow-500/40 shadow-lg bg-gradient-to-r ${currentImage.gradient}`}
              >
                {currentImage.category}
              </div>
            </motion.div>
            
            {/* STATUS INDICATORS - MOBILE RESPONSIVE */}
            <div className="absolute top-3 sm:top-5 right-3 sm:right-5 flex items-center space-x-1.5 sm:space-x-2">
              <motion.div
                key={`indicator-${currentIndex}`}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full relative"
                style={{ backgroundColor: currentImage.color }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: currentImage.color }}
                  animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              
              {isPlaying && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-4 h-4 sm:w-5 sm:h-5 bg-white/20 backdrop-blur-md rounded-full border border-yellow-500/40 flex items-center justify-center"
                >
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse" />
                </motion.div>
              )}
            </div>
            
            {/* FLOATING SPARKLE ICON - MOBILE RESPONSIVE */}
            <motion.div
              key={`sparkle-${currentIndex}`}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-3 sm:bottom-5 right-3 sm:right-5"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-md rounded-lg border border-yellow-500/30 flex items-center justify-center shadow-lg">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/80" />
              </div>
            </motion.div>
          </div>
          
          {/* CONTENT SECTION - MOBILE RESPONSIVE - REMOVED PRICE */}
          <div className="relative h-[35%] p-3 sm:p-5 bg-gradient-to-r from-black/70 to-black/50 backdrop-blur-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentIndex}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col justify-between"
              >
                {/* TITLE AND DESCRIPTION - MOBILE RESPONSIVE */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    {currentImage.title}
                  </h3>
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                    {currentImage.description}
                  </p>
                </div>
                
                {/* BOTTOM ROW - MOBILE RESPONSIVE - REMOVED PRICE */}
                <div className="flex items-end justify-between mt-2 sm:mt-3">
                  <div className="space-y-0.5 sm:space-y-1">
                    <p className="text-gray-400 text-xs">{currentImage.subtitle}</p>
                    <span className="text-sm text-white/80 font-medium">
                      Premium Quality
                    </span>
                  </div>
                  
                  <motion.a
                    href="http://wa.me/+447949087460"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs rounded-lg font-semibold shadow-lg transition-all bg-gradient-to-r ${currentImage.gradient}`}
                  >
                    Get Quote
                  </motion.a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* NAVIGATION ARROWS - MOBILE RESPONSIVE */}
        <div className="absolute inset-0 flex items-center justify-between px-1 sm:px-2 pointer-events-none">
          <motion.button
            onClick={prevSlide}
            disabled={isTransitioning}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-10 h-10 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-xl border border-yellow-500/40 rounded-xl sm:rounded-2xl flex items-center justify-center text-white transition-all disabled:opacity-50 pointer-events-auto shadow-2xl"
          >
            <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ x: -2 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: currentImage.color }}
                initial={{ x: 20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </div>
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            disabled={isTransitioning}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
            className="group w-10 h-10 sm:w-12 sm:h-12 bg-black/80 backdrop-blur-xl border border-yellow-500/40 rounded-xl sm:rounded-2xl flex items-center justify-center text-white transition-all disabled:opacity-50 pointer-events-auto shadow-2xl"
          >
            <div className="relative overflow-hidden w-4 h-4 sm:w-5 sm:h-5">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{ color: currentImage.color }}
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>

      {/* CONTROL PANEL - MOBILE RESPONSIVE - FIXED WIDTH TO MATCH CARD */}
      <div className="mt-4 sm:mt-6 flex justify-center">
        <div className="w-72 sm:w-80 bg-black/80 backdrop-blur-2xl rounded-xl sm:rounded-2xl px-4 sm:px-6 py-2 sm:py-3 border border-yellow-500/30 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* COUNTER - MOBILE RESPONSIVE */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <motion.span 
                key={`counter-${currentIndex}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-white font-bold text-sm sm:text-base"
              >
                {String(currentIndex + 1).padStart(2, '0')}
              </motion.span>
              <div 
                className="w-4 sm:w-6 h-0.5 rounded-full transition-all duration-500"
                style={{ backgroundColor: currentImage.color }}
              />
              <span className="text-white/60 text-sm sm:text-base">
                {String(images.length).padStart(2, '0')}
              </span>
            </div>
            
            {/* CONTROL BUTTONS - MOBILE RESPONSIVE */}
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <motion.button
                onClick={togglePlayPause}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 h-6 sm:w-7 sm:h-7 bg-white/10 backdrop-blur-md rounded-md sm:rounded-lg border border-yellow-500/30 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                {isPlaying ? <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
              </motion.button>
            </div>
            
            {/* DOTS - MOBILE RESPONSIVE - ALL 10 IMAGES */}
            <div className="flex items-center space-x-1 sm:space-x-1.5">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'scale-110 sm:scale-125' : ''
                  }`}
                  style={{
                    backgroundColor: index === currentIndex ? currentImage.color : 'rgba(255,255,255,0.3)',
                  }}
                >
                  {index === currentIndex && (
                    <motion.div 
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: currentImage.color }}
                      animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING DECORATIVE ELEMENTS - MOBILE RESPONSIVE */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          rotate: [0, 2, 0],
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-lg sm:rounded-xl backdrop-blur-xl border border-yellow-500/30 flex items-center justify-center shadow-2xl"
      >
        <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 6, 0],
          rotate: [0, -1, 0],
          scale: [1, 0.97, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 w-7 h-7 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-md sm:rounded-lg backdrop-blur-xl border border-amber-500/30 flex items-center justify-center shadow-2xl"
      >
        <Star className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, -5, 0],
          x: [0, 2, 0],
          rotate: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 -left-4 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-md sm:rounded-lg backdrop-blur-xl border border-orange-500/30 flex items-center justify-center shadow-2xl"
      >
        <Award className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  // Minimal parallax for performance
  const backgroundY = useTransform(scrollY, [0, 500], [0, -25]);
  const contentY = useTransform(scrollY, [0, 500], [0, -12]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Lightweight entrance animations
    gsap.timeline()
      .from('.hero-content > *', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out"
      })
      .from('.hero-carousel', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.3");
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <section 
      ref={heroRef}
      id="hero-section" 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-950/90 via-black to-yellow-950/90"
    >
      {/* Optimized Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-black to-yellow-900/40" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-800/30 via-transparent to-yellow-800/30" />
        
        {/* Simplified animated elements */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Additional golden ambient lighting */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amber-900/5 via-transparent to-yellow-900/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-800/5 to-transparent" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 min-h-screen flex items-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            
            {/* Left Content - MOBILE OPTIMIZED */}
            <div className="hero-content space-y-6 sm:space-y-8 text-center xl:text-left pt-24 sm:pt-28 xl:pt-0">
              {/* Trust Badge - MOBILE RESPONSIVE WITH ADDED TOP PADDING */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center space-x-2 sm:space-x-3 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 backdrop-blur-xl border border-yellow-500/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-white/90 shadow-2xl"
              >
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" />
                <span className="font-semibold text-sm sm:text-base">16+ Years of Excellence</span>
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
              </motion.div>

              {/* Main Headline - MOBILE RESPONSIVE WITH FIXED TEXT AND AUTO COLOR CHANGING */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <motion.span 
                    className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500"
                    style={{
                      // Ensure text is always visible with proper contrast
                      WebkitTextFillColor: 'transparent',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      // Add text shadow for better visibility
                      textShadow: '0 0 30px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.2)',
                      // Ensure minimum height to prevent cropping
                      minHeight: '1.2em',
                      lineHeight: '1.1',
                      // Prevent text from being cut off
                      overflow: 'visible',
                      display: 'block',
                      width: '100%'
                    }}
                    animate={{
                      backgroundImage: [
                        'linear-gradient(45deg, #fbbf24, #f59e0b, #d97706)',
                        'linear-gradient(45deg, #eab308, #ca8a04, #a16207)',
                        'linear-gradient(45deg, #f59e0b, #d97706, #b45309)',
                        'linear-gradient(45deg, #facc15, #eab308, #ca8a04)',
                        'linear-gradient(45deg, #d97706, #b45309, #92400e)',
                        'linear-gradient(45deg, #fbbf24, #f59e0b, #d97706)',
                        'linear-gradient(45deg, #fcd34d, #fbbf24, #f59e0b)',
                        'linear-gradient(45deg, #a16207, #92400e, #78350f)',
                        'linear-gradient(45deg, #f59e0b, #fbbf24, #fcd34d)',
                        'linear-gradient(45deg, #ca8a04, #eab308, #facc15)'
                      ]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}
                  >
                    SYN Carpets
                  </motion.span>
                  <span className="block text-white mt-1 sm:mt-2" style={{ lineHeight: '1.1' }}>& Flooring</span>
                </h1>
                
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full mx-auto xl:mx-0" />
                
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto xl:mx-0">
                    <motion.span 
                      className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300"
                      animate={{
                        backgroundImage: [
                          'linear-gradient(45deg, #fde047, #facc15)',
                          'linear-gradient(45deg, #facc15, #eab308)',
                          'linear-gradient(45deg, #eab308, #ca8a04)',
                          'linear-gradient(45deg, #ca8a04, #a16207)',
                          'linear-gradient(45deg, #a16207, #ca8a04)',
                          'linear-gradient(45deg, #ca8a04, #eab308)',
                          'linear-gradient(45deg, #eab308, #facc15)',
                          'linear-gradient(45deg, #facc15, #fde047)'
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      Luxury Flooring Redefined.
                    </motion.span>
                  </p>
                  <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto xl:mx-0 px-4 sm:px-0">
                    Transform your home with premium stairs, laminate, vinyl, carpets, and underlay solutions.
                  </p>
                </div>
              </div>

              {/* Service Info Cards - MOBILE RESPONSIVE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto xl:mx-0 px-4 sm:px-0">
                <motion.div 
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">Birmingham & West Midlands</p>
                    <p className="text-xs sm:text-sm text-white/70">100 Mile Coverage</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3 sm:space-x-4 bg-white/5 backdrop-blur-xl border border-yellow-500/20 rounded-xl sm:rounded-2xl p-3 sm:p-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">9 AM - 6 PM</p>
                    <p className="text-xs sm:text-sm text-white/70">All Days Available</p>
                  </div>
                </motion.div>
              </div>

              {/* CTA Buttons - MOBILE RESPONSIVE */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center xl:justify-start px-4 sm:px-0">
                <motion.a
                  href="http://wa.me/+447949087460?text=Hi, I'd like a free quote for flooring"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                  <span className="relative z-10">Get Free Quote</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                </motion.a>
                
                <motion.button
                  onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="border-2 border-yellow-500/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 backdrop-blur-xl"
                >
                  View Portfolio
                </motion.button>
              </div>
            </div>

            {/* Right Content - MOBILE OPTIMIZED 3D CAROUSEL */}
            <div className="hero-carousel flex justify-center items-center min-h-[400px] sm:min-h-[500px] lg:min-h-[700px] xl:min-h-[800px] px-4 sm:px-0">
              <MobileOptimized3DCarousel images={luxuryFlooringImages} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;