import { useState, FormEvent } from 'react';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Me Contacter</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-gray-700 mb-8">
              Vous avez un projet de déploiement Open e-Mobility ou besoin d'expertise DevOps/SRE ?
              N'hésitez pas à me contacter pour discuter de vos besoins.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-eco-green/20 flex items-center justify-center mr-4">
                  <FiMail className="text-eco-dark text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-eco-dark">Email</h3>
                  <a href="mailto:adil.mektoub@gmail.com" className="text-gray-600 hover:text-eco-green transition-colors">
                    adil.mektoub@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-eco-green/20 flex items-center justify-center mr-4">
                  <FiPhone className="text-eco-dark text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-eco-dark">Téléphone</h3>
                  <a href="tel:+33600000000" className="text-gray-600 hover:text-eco-green transition-colors">
                    +33 6 84 79 75 73
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-eco-green/20 flex items-center justify-center mr-4">
                  <FiLinkedin className="text-eco-dark text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-eco-dark">LinkedIn</h3>
                  <a href="https://linkedin.com/in/adilmektoub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-eco-green transition-colors">
                    linkedin.com/in/adilmektoub
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-eco-green/20 flex items-center justify-center mr-4">
                  <FiGithub className="text-eco-dark text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-eco-dark">GitHub</h3>
                  <a href="https://github.com/AdilMektoub" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-eco-green transition-colors">
                    github.com/AdilMektoub
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="eco-card">
            <h3 className="text-xl font-semibold text-eco-dark mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 mb-2">Sujet</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="deployment">Déploiement Open e-Mobility</option>
                  <option value="consulting">Conseil DevOps/SRE</option>
                  <option value="collaboration">Proposition de collaboration</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-eco-green"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Envoi en cours...</span>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md">
                  Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md">
                  Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer ultérieurement.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;