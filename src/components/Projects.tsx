import { useState } from 'react';
import { FiExternalLink, FiPlus } from 'react-icons/fi';

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "Déploiement HA d'Open e-Mobility",
      description: "Architecture haute disponibilité multi-régions pour une plateforme de gestion de bornes de recharge électrique.",
      image: "/images/project-1.jpg",
      tags: ["Kubernetes", "Terraform", "AWS", "Prometheus", "GitOps"],
      details: [
        "Déploiement d'un cluster Kubernetes multi-AZ avec auto-scaling",
        "Mise en place d'une base de données PostgreSQL en mode HA avec réplication",
        "Monitoring complet avec Prometheus, Grafana et Alertmanager",
        "Pipeline CI/CD avec GitLab pour des déploiements automatisés",
        "Réduction de 40% des temps d'indisponibilité et amélioration de 25% des performances"
      ]
    },
    {
      title: "Migration Cloud d'une Plateforme e-Mobility",
      description: "Migration d'une infrastructure on-premise vers le cloud avec zéro downtime pour un opérateur de mobilité électrique.",
      image: "/images/project-2.jpg",
      tags: ["GCP", "Terraform", "Ansible", "Docker", "Load Balancing"],
      details: [
        "Analyse et cartographie de l'infrastructure existante",
        "Conception d'une architecture cloud-native sur Google Cloud Platform",
        "Stratégie de migration progressive avec tests de validation",
        "Mise en place d'un système de réplication de données en temps réel",
        "Réduction des coûts d'infrastructure de 35% et amélioration de la scalabilité"
      ]
    },
    {
      title: "Optimisation de Performance Open e-Mobility",
      description: "Refonte de l'architecture et optimisation des performances pour supporter plus de 10 000 bornes de recharge simultanées.",
      image: "/images/project-3.jpg",
      tags: ["Performance Tuning", "Redis", "Kafka", "Microservices", "ELK"],
      details: [
        "Analyse des goulots d'étranglement avec profiling et tests de charge",
        "Implémentation d'un cache distribué avec Redis pour les données fréquemment accédées",
        "Mise en place d'une architecture événementielle avec Kafka pour le traitement asynchrone",
        "Refactorisation des services critiques en microservices indépendants",
        "Amélioration des performances de 300% et réduction de la latence de 65%"
      ]
    },
    {
      title: "Plateforme de Monitoring pour Flottes de Véhicules Électriques",
      description: "Développement d'une solution de monitoring en temps réel pour une flotte de 500+ véhicules électriques d'entreprise.",
      image: "/images/project-4.jpg",
      tags: ["IoT", "Time Series DB", "Grafana", "Python", "MQTT"],
      details: [
        "Conception d'une architecture IoT pour la collecte de données des véhicules",
        "Implémentation d'une base de données time-series pour le stockage efficace",
        "Développement de dashboards Grafana pour la visualisation en temps réel",
        "Création d'algorithmes prédictifs pour l'optimisation de la recharge",
        "Réduction de 25% des coûts énergétiques et amélioration de la disponibilité des véhicules"
      ]
    }
  ];
  
  const toggleProject = (index: number) => {
    if (activeProject === index) {
      setActiveProject(null);
    } else {
      setActiveProject(index);
    }
  };
  
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-sky-blue/20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projets Réalisés</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="eco-card overflow-hidden">
              <div className="h-48 bg-gray-200 mb-4 rounded overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-eco-dark/80 to-eco-green/80 flex items-center justify-center text-white">
                  <span className="text-xl font-semibold">{project.title}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-eco-dark mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-badge">{tag}</span>
                ))}
              </div>
              
              <button
                className="flex items-center text-eco-dark hover:text-eco-green transition-colors"
                onClick={() => toggleProject(index)}
              >
                <FiPlus className={`mr-2 transition-transform ${activeProject === index ? 'rotate-45' : ''}`} />
                {activeProject === index ? 'Masquer les détails' : 'Voir les détails'}
              </button>
              
              {activeProject === index && (
                <div className="mt-4 pl-4 border-l-2 border-eco-green">
                  <ul className="space-y-2">
                    {project.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-gray-700">• {detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;