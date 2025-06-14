
import { Palette, Code, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Thoughtful visual experiences that communicate with clarity and purpose."
    },
    {
      icon: Code,
      title: "Development",
      description: "Clean, efficient code that brings beautiful designs to life seamlessly."
    },
    {
      icon: Zap,
      title: "Strategy",
      description: "Strategic thinking that aligns your vision with meaningful outcomes."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We focus on three core areas to deliver exceptional results that stand the test of time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6">
                <service.icon className="text-gray-700" size={24} />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="font-inter text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
