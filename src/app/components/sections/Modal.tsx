import { useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import type { ProjectWithImages } from '../../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  projeto: ProjectWithImages | null;
}

const Modal = ({ isOpen, onClose, projeto }: ModalProps) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !projeto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-slate-900/90 backdrop-blur-md"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 shadow-2xl animate-modal-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-700/80 hover:bg-red-500 flex items-center justify-center text-white transition-all shadow-lg"
          aria-label="Fechar modal"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative h-64 sm:h-80 md:h-96">
            <img 
              src={projeto.imageSrc} 
              alt={`Preview do projeto ${projeto.title}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-600 text-white mb-3 sm:mb-4 shadow-lg">
                Projeto
              </span>
              <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {projeto.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-gray-300 leading-relaxed mb-8 text-base sm:text-lg">
              {projeto.description}
            </p>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">
                Tecnologias Utilizadas
              </h3>
              <div className="flex flex-wrap gap-3">
                {projeto.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    <img src={projeto.skillImages[skill]} alt={skill} className="w-5 h-5" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
              {projeto.demo && (
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all text-base"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} />
                  <span>Acessar Demo</span>
                </a>
              )}
              <a
                href={projeto.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 py-4 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-semibold transition-all text-base"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span>Ver Código</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
