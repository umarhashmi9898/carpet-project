import React from 'react';
import { Phone, MapPin, Clock, Star, Award, Shield, Code, ExternalLink, Globe, Palette } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
          {/* Company Info - EQUAL HEIGHT */}
          <div className="flex flex-col h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex-1 flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-indigo-900 rounded-lg"></div>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">SYN Carpets</span>
                  <p className="text-purple-300 text-sm">Luxury Redefined</p>
                </div>
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6 flex-1">
                Luxury Flooring Redefined. Transform your home with premium carpet, laminate, and lino flooring. 
                16+ years of excellence serving Birmingham & West Midlands.
              </p>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                  <Award className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <p className="text-white text-xs font-semibold">16+ Years</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                  <Shield className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                  <p className="text-white text-xs font-semibold">Insured</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
                  <Star className="w-5 h-5 text-yellow-400 mx-auto mb-1" fill="currentColor" />
                  <p className="text-white text-xs font-semibold">Premium</p>
                </div>
              </div>
              
              <a 
                href="http://wa.me/+447949087460"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Services - EQUAL HEIGHT */}
          <div className="flex flex-col h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex-1 flex flex-col">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Our Services</span>
              </h3>
              
              <ul className="space-y-4 text-white/70 flex-1">
                <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"></div>
                  <span>Premium Carpet Installation</span>
                </li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
                  <span>Durable Laminate Flooring</span>
                </li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full"></div>
                  <span>Stylish Lino Flooring</span>
                </li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                  <span>Door-to-Door Service</span>
                </li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                  <span>Free Consultation</span>
                </li>
                <li className="hover:text-purple-400 transition-colors cursor-pointer flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                  <span>Professional Installation</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-purple-300">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span className="text-sm font-medium">All Services Include Quality Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info - EQUAL HEIGHT */}
          <div className="flex flex-col h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex-1 flex flex-col">
              <h3 className="text-white font-bold text-xl mb-6 flex items-center space-x-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span>Contact Information</span>
              </h3>
              
              <div className="space-y-6 flex-1">
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">WhatsApp</p>
                    <a href="http://wa.me/+447949087460" className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
                      07949 087460
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Service Area</p>
                    <p className="text-white/70">Birmingham & West Midlands</p>
                    <p className="text-white/70">100 Mile Coverage</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Operating Hours</p>
                    <p className="text-white/70">9 AM - 6 PM, All Days</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-purple-300 text-sm font-medium">Ready to Transform Your Space?</p>
                  <p className="text-white/60 text-xs mt-1">Free consultation available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Credit & Portfolio Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Developer Credit */}
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-lg mb-1">Website Development</h4>
                  <p className="text-white/70 text-sm mb-3">
                    Professionally designed and developed with modern web technologies
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                    <span className="text-purple-300 text-sm font-medium">Crafted by Umar Hashmi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Link - MOBILE OPTIMIZED */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6">
              {/* MOBILE LAYOUT - STACKED VERTICALLY */}
              <div className="flex flex-col space-y-4 lg:hidden">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-lg mb-1">Need a Website?</h4>
                    <p className="text-white/70 text-sm">
                      Professional web development services
                    </p>
                  </div>
                </div>
                <a 
                  href="https://umarhashmi.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-400 hover:to-indigo-500 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Globe className="w-5 h-5" />
                  <span>Visit Portfolio</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* DESKTOP LAYOUT - SIDE BY SIDE */}
              <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Palette className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Need a Website?</h4>
                    <p className="text-white/70 text-sm">
                      Professional web development services
                    </p>
                  </div>
                </div>
                <a 
                  href="https://umarhashmi.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-400 hover:to-indigo-500 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
                >
                  <Globe className="w-5 h-5" />
                  <span>Visit Portfolio</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-800 to-indigo-900 rounded"></div>
                </div>
                <div>
                  <p className="text-white/80 font-medium">
                    © 2024 SYN Carpets. All rights reserved.
                  </p>
                  <p className="text-white/60 text-sm">
                    Luxury Flooring Redefined
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" fill="currentColor" />
                  <span className="text-white/70 text-sm">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-white/70 text-sm">Fully Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span className="text-white/70 text-sm">16+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="http://wa.me/+447949087460"
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-110 z-50 border-2 border-white/20"
        aria-label="Contact us on WhatsApp"
      >
        <Phone className="w-7 h-7" />
      </a>
    </footer>
  );
};

export default Footer;