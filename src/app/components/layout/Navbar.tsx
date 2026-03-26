"use client";
import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projetos' },
    { id: 'contatos', label: 'Contato' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur py-3 shadow-lg' : 'bg-slate-900/80 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text">
            AN
          </a>

          <div className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className='hidden lg:flex items-center gap-4'>
            <a
              href="https://www.linkedin.com/in/alannunes22"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2 rounded-full text-white text-sm font-medium"
            >
              Contrate-me
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-2xl cursor-pointer p-2 z-50"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX className="bg-red-600" /> : <HiMenuAlt3 className='hover:scale-110'/>}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md lg:hidden flex flex-col items-center justify-center"
        >
          <div className='flex flex-col items-center justify-center h-full gap-6'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/alannunes22"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-8 py-3 rounded-full text-white font-semibold mt-4"
            >
              Contrate-me
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
