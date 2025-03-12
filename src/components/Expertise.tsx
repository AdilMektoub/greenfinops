import { useState } from 'react';

const Expertise = () => {
  const [activeTab, setActiveTab] = useState('technologies');
  
  const tabs = [
    { id: 'technologies', label: 'Technologies' },
    { id: 'platforms', label: 'Plateformes Cloud' },
    { id: 'methodologies', label: 'Méthodologies' },
  ];
  
  const expertise = {
    technologies: [
      { name: 'Kubernetes', level: 95 },
      { name: 'Docker', level: 95 },
      { name: 'Terraform', level: 90 },
      { name: 'Ansible', level: 80 },
      { name: 'Prometheus/Grafana', level: 90 },
      { name: 'ELK Stack', level: 75 },
      { name: 'Github CI/CD', level: 90 },
      { name: 'Jenkins', level: 80 },
      { name: 'Typescript', level: 85 },
      { name: 'Bash', level: 90 },
    ],
    platforms: [
      { name: 'AWS', level: 95 },
      { name: 'Google Cloud', level: 85 },
      { name: 'Azure', level: 50 },
      { name: 'OpenStack', level: 75 },
      { name: 'Digital Ocean', level: 70 },
      { name: 'OVH Cloud', level: 65 },
    ],
    methodologies: [
      { name: 'DevOps', level: 95 },
      { name: 'SRE', level: 90 },
      { name: 'GitOps', level: 85 },
      { name: 'Agile/Scrum', level: 80 },
      { name: 'Infrastructure as Code', level: 95 },
      { name: 'Continuous Deployment', level: 85 },
      { name: 'Microservices', level: 80 },
    ],
  };
  
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Mon Expertise</h2>
        
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`py-3 px-6 font-medium text-lg transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-eco-green text-eco-dark'
                    : 'text-gray-500 hover:text-eco-dark'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {expertise[activeTab as keyof typeof expertise].map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium text-eco-dark">{item.name}</span>
                <span className="text-gray-600">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-eco-green to-tech-blue"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-eco-green/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-eco-dark mb-4">Spécialisation Open e-Mobility</h3>
          <p className="text-gray-700 mb-4">
            Je me spécialise dans le déploiement et la maintenance de la plateforme Open e-Mobility, 
            une solution open-source pour la gestion des infrastructures de recharge de véhicules électriques.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="tech-badge text-center">Architecture Microservices</div>
            <div className="tech-badge text-center">API RESTful</div>
            <div className="tech-badge text-center">OCPP Protocol</div>
            <div className="tech-badge text-center">Haute Disponibilité</div>
            <div className="tech-badge text-center">Scalabilité Horizontale</div>
            <div className="tech-badge text-center">Sécurité des Données</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;