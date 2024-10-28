import React from 'react';
import { Menu, X, Linkedin, Instagram, Facebook, ArrowRight, ChevronDown } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="pt-16">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Contact />
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Jobithlal</h3>
              <p className="text-gray-400">Transformative Digital Solutions</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/jobithlal/" className="hover:text-blue-400 transition-colors">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com/jobithlal/" className="hover:text-pink-400 transition-colors">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/joe.vfx" className="hover:text-blue-500 transition-colors">
                <Facebook />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-gray-400">
            <p>&copy; {new Date().getFullYear()} Jobithlal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;