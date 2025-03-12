import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold bg-gradient-to-r from-eco-dark to-eco-green bg-clip-text text-transparent">
            GreenFinOps
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="#about" className="text-eco-dark hover:text-eco-green transition-colors">
            À propos
          </Link>
          <Link href="#services" className="text-eco-dark hover:text-eco-green transition-colors">
            Services
          </Link>
          <Link href="#expertise" className="text-eco-dark hover:text-eco-green transition-colors">
            Expertise
          </Link>
          <Link href="#projects" className="text-eco-dark hover:text-eco-green transition-colors">
            Projets
          </Link>
          <Link href="#contact" className="text-eco-dark hover:text-eco-green transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-eco-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="#about" className="text-eco-dark hover:text-eco-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              À propos
            </Link>
            <Link href="#services" className="text-eco-dark hover:text-eco-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#expertise" className="text-eco-dark hover:text-eco-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Expertise
            </Link>
            <Link href="#projects" className="text-eco-dark hover:text-eco-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Projets
            </Link>
            <Link href="#contact" className="text-eco-dark hover:text-eco-green transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;