
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h1 className="font-playfair text-5xl md:text-7xl font-medium text-gray-900 mb-6 leading-tight">
          Simple.
          <br />
          <span className="text-gray-600">Beautiful.</span>
          <br />
          Minimal.
        </h1>
        <p className="font-inter text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          We believe in the power of simplicity. Clean design, thoughtful content, and seamless experiences.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
          <button className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white font-inter font-medium rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
            Get Started
          </button>
          <button className="w-full md:w-auto px-8 py-4 border border-gray-300 text-gray-700 font-inter font-medium rounded-full hover:bg-gray-50 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;
