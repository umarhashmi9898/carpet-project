import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Star, Phone } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Sijad',
    role: 'Lead Flooring Specialist',
    experience: '8+ Years Experience',
    specialization: 'Premium Carpet Installation',
    description: 'Expert in luxury carpet fitting with exceptional attention to detail and customer satisfaction.',
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-indigo-600',
    iconBg: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/30'
  },
  {
    id: 2,
    name: 'Kamran',
    role: 'Vinyl & Laminate Expert',
    experience: '6+ Years Experience',
    specialization: 'Luxury Vinyl & Laminate',
    description: 'Specialist in herringbone patterns and premium laminate flooring installations.',
    color: '#10B981',
    gradient: 'from-emerald-500 to-teal-600',
    iconBg: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30'
  },
  {
    id: 3,
    name: 'Bilal',
    role: 'Staircase Specialist',
    experience: '7+ Years Experience',
    specialization: 'Staircase Carpeting',
    description: 'Master craftsman specializing in complex staircase installations and custom fitting.',
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
    iconBg: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30'
  },
  {
    id: 4,
    name: 'Qaiser',
    role: 'Quality Assurance Manager',
    experience: '9+ Years Experience',
    specialization: 'Quality Control & Finishing',
    description: 'Ensures every installation meets our premium standards with meticulous quality control.',
    color: '#EF4444',
    gradient: 'from-red-500 to-pink-600',
    iconBg: 'from-red-500/20 to-pink-500/20',
    borderColor: 'border-red-500/30'
  }
];

const Team = () => {
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
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            <span className="text-white/90 font-semibold text-sm sm:text-base">Our Expert Team</span>
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Expert Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our skilled professionals bring decades of combined experience in premium flooring installation
          </p>
        </motion.div>

        {/* Team Members Grid - MOBILE RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              {/* Card */}
              <motion.div 
                className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 text-center transition-all duration-500 h-full group-hover:${member.borderColor} group-hover:bg-white/10`}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 30px 60px rgba(139, 92, 246, 0.2)"
                }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                style={{ perspective: '1000px' }}
              >
                {/* Profile Avatar Container */}
                <motion.div 
                  className={`w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-r ${member.iconBg} backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 10,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Animated Background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full`}
                    whileHover={{ scale: 1.2 }}
                  />
                  
                  {/* Profile Initial */}
                  <motion.div
                    className={`relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-xl`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-white font-bold text-xl sm:text-2xl">
                      {member.name.charAt(0)}
                    </span>
                  </motion.div>
                  
                  {/* Floating Icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.5 }}
                  >
                    <User className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                </motion.div>
                
                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300 mb-1">
                      {member.name}
                    </h3>
                    <p className={`text-sm font-semibold transition-colors duration-300`} style={{ color: member.color }}>
                      {member.role}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-white/80 text-sm font-medium">
                        {member.experience}
                      </span>
                    </div>
                    
                    <p className="text-white/60 text-xs font-medium">
                      {member.specialization}
                    </p>
                  </div>
                  
                  <p className="text-white/70 group-hover:text-white/90 leading-relaxed text-sm transition-colors duration-300">
                    {member.description}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center justify-center space-x-1 pt-2">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <Star className="w-3 h-3 text-yellow-400" fill="currentColor" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}
                  whileHover={{ scale: 1.1 }}
                />

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400/30 rounded-full group-hover:bg-purple-400 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400/30 rounded-full group-hover:bg-indigo-400 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Team CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Our skilled professionals are ready to transform your space with premium flooring solutions. 
              Contact us today for a free consultation.
            </p>
            
            <motion.a 
              href="http://wa.me/+447949087460?text=I'd like to speak with your expert team about flooring"
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:shadow-purple-500/25 transition-all relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <Phone className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Our Team</span>
              
              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
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
        <User className="w-8 h-8 text-purple-400" />
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
        <Award className="w-6 h-6 text-indigo-400" />
      </motion.div>
    </section>
  );
};

export default Team;