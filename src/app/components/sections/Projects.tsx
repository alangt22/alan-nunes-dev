"use client"
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import type { ProjectWithImages } from '../../types';
import projetos from "../../data/projetos.json";
import skills from "../../data/skills.json";
import Modal from "../sections/Modal";

const skillMap = skills.reduce<Record<string, string>>((acc, skill) => {
  acc[skill.title] = skill.imageSrc;
  return acc;
}, {});

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectWithImages | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const projectsRef = useRef<(HTMLElement | null)[]>([]);

  const openModal = (projeto: typeof projetos[0]) => {
    const projetoComImagens: ProjectWithImages = {
      ...projeto,
      skillImages: projeto.skills.reduce((acc, skill) => {
        acc[skill] = skillMap[skill] || '';
        return acc;
      }, {} as Record<string, string>),
    };
    setSelectedProject(projetoComImagens);
  };

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/30 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Meus Projetos</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Cada projeto representa um desafio único que me ajudou a crescer como desenvolvedor
          </p>
        </div>

        <div
          id="projects"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8"
        >
          {projetos.map((projeto, index) => (
            <article
              key={index}
              ref={(el) => { projectsRef.current[index] = el; }}
              data-index={index}
              className={`group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={projeto.imageSrc}
                  alt={`Preview do projeto ${projeto.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>
                
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {projeto.demo && (
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-slate-900/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-indigo-600 transition-all shadow-lg"
                      title="Ver projeto"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={projeto.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-10 h-10 rounded-full bg-slate-900/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-slate-700 transition-all shadow-lg"
                    title="Ver código"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  </a>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-lg">
                    {projeto.skills[0]}
                  </span>
                </div>
              </div>

              <div className="p-5 md:p-6 lg:p-7">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {projeto.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-5 line-clamp-2 leading-relaxed">
                  {projeto.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {projeto.skills.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                  {projeto.skills.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-700/50 text-gray-400">
                      +{projeto.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => openModal(projeto)}
                    className="flex-1 cursor-pointer py-2.5 md:py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Detalhes</span>
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <a
                    href={projeto.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 md:py-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-white transition-all flex items-center justify-center"
                    title="Ver código no GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/alangt22"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-400 transition-all font-medium"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>Ver todos no GitHub</span>
          </a>
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={closeModal}
        projeto={selectedProject}
      />
    </section>
  );
};
