"use client";
import { useRef, useEffect, useState } from 'react';
import type { Skill as SkillType } from '../../types';
import skills from '../../data/skills.json';

export function Skills (){
  const skillsRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

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

    skillsRef.current?.querySelectorAll('.skill-item').forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative'>
            {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>

        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div
          className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div id='skills' className="max-w-6xl mx-auto relative z-10 scroll-mt-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Tecnologias que uso para criar soluções modernas e eficientes
          </p>
        </div>

        <div ref={skillsRef} className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {skills.map((skill: SkillType, index: number) => (
            <div
              key={index}
              data-index={index}
              className={`skill-item group relative flex flex-col items-center p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl glass card-hover ${
                visibleItems.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mb-2 sm:mb-3 relative">
                <img
                  className='w-full h-full object-contain filter brightness-110 contrast-100 group-hover:brightness-125 group-hover:scale-110 transition-all duration-300'
                  src={skill.imageSrc}
                  alt={`Ícone de ${skill.title}`}
                  loading='lazy'
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-center text-gray-400 group-hover:text-white transition-colors">
                {skill.title}
              </span>
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-transparent group-hover:border-indigo-500/30 transition-colors"></div>
            </div>
          ))}
        </div>

{/*         <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
          <div className="glass rounded-xl p-4 sm:p-6 card-hover">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Tecnologias</div>
          </div>
          <div className="glass rounded-xl p-4 sm:p-6 card-hover">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">10+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Projetos</div>
          </div>
          <div className="glass rounded-xl p-4 sm:p-6 card-hover">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">2+</div>
            <div className="text-gray-400 text-xs sm:text-sm">Anos de Estudo</div>
          </div>
          <div className="glass rounded-xl p-4 sm:p-6 card-hover">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">100%</div>
            <div className="text-gray-400 text-xs sm:text-sm">Dedicação</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
