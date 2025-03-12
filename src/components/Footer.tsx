import Link from 'next/link';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-eco-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-eco-green to-sky-blue bg-clip-text text-transparent">
              GreenFinOps
            </h3>
            <p className="text-gray-300 mb-4">
              Expert DevOps/SRE spécialisé dans le déploiement haute disponibilité 
              de la plateforme Open e-Mobility pour un avenir plus vert et durable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/adilmektoub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-eco-green transition-colors"
              >
                <FiLinkedin />
              </a>
              <a 
                href="https://github.com/AdilMektoub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-eco-green transition-colors"
              >
                <FiGithub />
              </a>
              <a 
                href="mailto:adil.mektoub@gmail.com" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-eco-green transition-colors"
              >
                <FiMail />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-eco-green transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-eco-green transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-gray-300 hover:text-eco-green transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-300 hover:text-eco-green transition-colors">
                  Projets
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-eco-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Paris, France</p>
              <p className="mb-2">
                <a href="mailto:adil.mektoub@gmail.com" className="hover:text-eco-green transition-colors">
                  adil.mektoub@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+33600000000" className="hover:text-eco-green transition-colors">
                  +33 6 84 79 75 73
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {currentYear} GreenFinOps. Tous droits réservés.</p>
          <p className="mt-2 text-sm">
            Spécialiste en déploiement Open e-Mobility | DevOps | SRE | Infrastructure Cloud
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;