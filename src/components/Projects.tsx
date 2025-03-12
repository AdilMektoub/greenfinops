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
        "Analyse