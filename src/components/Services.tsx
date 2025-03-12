import { FiSettings, FiServer, FiDatabase, FiShield, FiActivity, FiCode } from 'react-icons/fi';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-sky-blue/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mes Services</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="eco-card">
            <FiServer className="text-eco-green text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Déploiement Haute Disponibilité</h3>
            <p className="text-gray-600 mb-4">
              Mise en place d'infrastructures résilientes pour Open e-Mobility avec redondance 
              et équilibrage de charge pour une disponibilité maximale.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Architecture multi-zones et multi-régions</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Stratégies de failover automatisées</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>SLA optimisés pour applications critiques</span>
              </li>
            </ul>
          </div>
          
          <div className="eco-card">
            <FiCode className="text-tech-blue text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Infrastructure as Code</h3>
            <p className="text-gray-600 mb-4">
              Développement d'infrastructures reproductibles et évolutives via des outils 
              modernes de IaC pour des déploiements fiables.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Terraform, Ansible, CloudFormation</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Gestion des configurations automatisée</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Environnements immutables</span>
              </li>
            </ul>
          </div>
          
          <div className="eco-card">
            <FiSettings className="text-clean-teal text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-eco-dark mb-2">CI/CD Pipelines</h3>
            <p className="text-gray-600 mb-4">
              Création de pipelines d'intégration et déploiement continus pour 
              accélérer les cycles de développement d'Open e-Mobility.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Tests automatisés et déploiements progressifs</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>GitOps et déploiements basés sur Git</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Intégration avec Kubernetes et Docker</span>
              </li>
            </ul>
          </div>
          
          <div className="eco-card">
            <FiDatabase className="text-energy-yellow text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Gestion de Données</h3>
            <p className="text-gray-600 mb-4">
              Optimisation des bases de données pour les plateformes e-Mobility avec 
              haute performance et sécurité des données.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Clustering et réplication de bases de données</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Stratégies de backup et recovery</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Optimisation des performances</span>
              </li>
            </ul>
          </div>
          
          <div className="eco-card">
            <FiShield className="text-eco-dark text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Sécurité DevSecOps</h3>
            <p className="text-gray-600 mb-4">
              Intégration de la sécurité à chaque étape du cycle de développement 
              pour des déploiements sécurisés d'Open e-Mobility.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Analyse de vulnérabilités automatisée</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Gestion des secrets et conformité</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Sécurisation des conteneurs et du réseau</span>
              </li>
            </ul>
          </div>
          
          <div className="eco-card">
            <FiActivity className="text-leaf-green text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-eco-dark mb-2">Monitoring & SRE</h3>
            <p className="text-gray-600 mb-4">
              Mise en place de solutions de monitoring proactif et d'observabilité 
              pour garantir la fiabilité des services.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Observabilité complète (logs, métriques, traces)</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>Alerting intelligent et automatisé</span>
              </li>
              <li className="flex items-start">
                <span className="text-eco-green mr-2">✓</span>
                <span>SLO/SLI et ingénierie du chaos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;