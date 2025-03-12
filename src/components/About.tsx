import { FiServer, FiCloud, FiZap, FiShield } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">À propos</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              Ingénieur DevOps/SRE passionné par les technologies vertes et l'innovation durable, 
              je me spécialise dans le déploiement from scratch de la plateforme Open e-Mobility 
              en environnement haute disponibilité.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              Mon expertise combine les meilleures pratiques d'infrastructure as code, 
              d'automatisation et de monitoring pour créer des solutions robustes, 
              évolutives et respectueuses de l'environnement.
            </p>
            
            <p className="text-lg text-gray-700">
              Je m'engage à faciliter la transition énergétique en déployant des infrastructures 
              efficientes qui soutiennent la mobilité électrique et contribuent à un avenir plus vert.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="eco-card">
              <FiServer className="text-eco-green text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-eco-dark mb-2">Infrastructure</h3>
              <p className="text-gray-600">
                Conception et déploiement d'infrastructures évolutives et résilientes
              </p>
            </div>
            
            <div className="eco-card">
              <FiCloud className="text-tech-blue text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-eco-dark mb-2">Cloud Native</h3>
              <p className="text-gray-600">
                Solutions cloud optimisées pour la performance et la durabilité
              </p>
            </div>
            
            <div className="eco-card">
              <FiZap className="text-energy-yellow text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-eco-dark mb-2">Automatisation</h3>
              <p className="text-gray-600">
                Pipelines CI/CD et processus automatisés pour un déploiement efficace
              </p>
            </div>
            
            <div className="eco-card">
              <FiShield className="text-clean-teal text-4xl mb-4" />
              <h3 className="text-xl font-semibold text-eco-dark mb-2">Fiabilité</h3>
              <p className="text-gray-600">
                Systèmes hautement disponibles avec monitoring proactif
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;