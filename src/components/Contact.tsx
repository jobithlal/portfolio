import React from 'react';
import { Linkedin, Instagram, Facebook, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to elevate your brand?</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 bg-blue-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="mb-6">Visit www.wowworld.agency</p>
              
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/jobithlal/"
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                >
                  <Linkedin />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://www.instagram.com/jobithlal/"
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                >
                  <Instagram />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://www.facebook.com/joe.vfx"
                  className="flex items-center space-x-3 hover:text-blue-200 transition-colors"
                >
                  <Facebook />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-600"
                    rows={4}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2" size={20} />
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