
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-montserrat font-bold">
              <span className="text-jalseva-blue">Jal</span>Seva
            </h1>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="font-inter text-gray-800 hover:text-jalseva-blue transition-colors hover-underline">About</a>
            <a href="#how-it-works" className="font-inter text-gray-800 hover:text-jalseva-blue transition-colors hover-underline">How It Works</a>
            <a href="#benefits" className="font-inter text-gray-800 hover:text-jalseva-blue transition-colors hover-underline">Benefits</a>
            <a href="#impact" className="font-inter text-gray-800 hover:text-jalseva-blue transition-colors hover-underline">Impact</a>
            <a href="#contact" className="py-2 px-4 bg-jalseva-blue text-white rounded-full font-medium font-inter transform hover:scale-105 transition-transform">
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a href="#about" className="font-inter text-gray-800" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#how-it-works" className="font-inter text-gray-800" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#benefits" className="font-inter text-gray-800" onClick={() => setMobileMenuOpen(false)}>Benefits</a>
              <a href="#impact" className="font-inter text-gray-800" onClick={() => setMobileMenuOpen(false)}>Impact</a>
              <a 
                href="#contact" 
                className="py-2 px-4 bg-jalseva-blue text-white rounded-full font-medium font-inter text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
