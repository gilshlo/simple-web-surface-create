
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-medium text-gray-900">
            Minimal
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              About
            </a>
            <a href="#services" className="font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Services
            </a>
            <a href="#contact" className="font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a href="#home" className="block font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Home
            </a>
            <a href="#about" className="block font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              About
            </a>
            <a href="#services" className="block font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Services
            </a>
            <a href="#contact" className="block font-inter text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
