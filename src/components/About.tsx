
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            About Us
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We craft digital experiences that speak to the soul. Our philosophy is rooted in minimalism, 
            functionality, and the belief that less is truly more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="font-playfair text-3xl font-medium text-gray-900">
              Our Philosophy
            </h3>
            <p className="font-inter text-gray-600 leading-relaxed">
              In a world cluttered with noise, we create spaces of calm. Every element serves a purpose, 
              every design decision is intentional, and every interaction is meaningful.
            </p>
            <p className="font-inter text-gray-600 leading-relaxed">
              We believe that true elegance lies in simplicity, and that the most powerful messages 
              are often the quietest ones.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-8">
              <div>
                <h4 className="font-inter font-semibold text-gray-900 mb-2">Design</h4>
                <p className="font-inter text-gray-600 text-sm">Clean, purposeful, and timeless</p>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-gray-900 mb-2">Function</h4>
                <p className="font-inter text-gray-600 text-sm">Intuitive experiences that just work</p>
              </div>
              <div>
                <h4 className="font-inter font-semibold text-gray-900 mb-2">Impact</h4>
                <p className="font-inter text-gray-600 text-sm">Meaningful connections through simplicity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
