import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-eco-green/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-tech-blue/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block">Expert DevOps/SRE</span>
            <span className="bg-gradient-to-r from-eco-dark to-eco-green bg-clip-text text-transparent">
              Spécialisé en Open e-Mobility
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Déploiement haute disponibilité de solutions de mobilité électrique durables et innovantes
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary flex items-center justify-center gap-2">
              Découvrir mes services
              <FiArrowDown className="animate-bounce" />
            </a>
            <a href="#contact" className="px-6 py-3 border-2 border-eco-dark text-eco-dark font-medium rounded-md hover:bg-eco-dark hover:text-white transition-all duration-300 flex items-center justify-center">
              Me contacter
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-eco-dark mb-2">Découvrir</span>
        <FiArrowDown className="text-eco-green animate-bounce" size={24} />
      </div>
    </section>
  );
};

export default Hero;