import React, { useState } from 'react';
import { Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I'm interested in your flooring services.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Message: ${formData.message}`;
    
    window.open(`http://wa.me/+447949087460?text=${encodeURIComponent(whatsappMessage)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 pt-12 pb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform <span className="bg-gradient-to-r from-purple-400 to-indigo-600 bg-clip-text text-transparent">Your Space?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Get in touch for a free consultation and quote. We're here to bring luxury flooring to your doorstep.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - EQUAL HEIGHT */}
          <div className="flex flex-col h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-8 flex-1">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">WhatsApp</h4>
                    <a href="http://wa.me/+447949087460" className="text-purple-400 hover:text-purple-300 transition-colors text-lg">
                      07949 087460
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Service Area</h4>
                    <p className="text-white/70 text-base">Birmingham & West Midlands<br />100 Mile Coverage</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Operating Hours</h4>
                    <p className="text-white/70 text-base">9 AM - 6 PM<br />All Days</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <a 
                  href="http://wa.me/+447949087460?text=Hi, I'd like a free quote for flooring"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-semibold text-center hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-lg shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - EQUAL HEIGHT */}
          <div className="flex flex-col h-full">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex-1 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">Service Interest</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:border-purple-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="Premium Carpet">Premium Carpet</option>
                      <option value="Durable Laminate">Durable Laminate</option>
                      <option value="Stylish Lino">Stylish Lino</option>
                      <option value="Full Home Flooring">Full Home Flooring</option>
                      <option value="Consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div className="flex-1">
                  <label className="block text-white/70 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full h-full min-h-[120px] bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your flooring needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-purple-400 hover:to-indigo-500 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 text-lg shadow-lg mt-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;