"use client";
import { useRef, useEffect, useState } from 'react';
import type { Skill as SkillType } from '../../types';
import skills from '../../data/skills.json';

const categoryLabels: Record<string, string> = {
  Frontend: 'Frontend',
  Backend: 'Backend',
  Database: 'Banco de Dados',
  DevOps: 'DevOps',
};

const categoryOrder = ['Frontend', 'Backend', 'Database', 'DevOps'];

const softSkills = [
  { title: 'Comunicação', description: 'Capacidade de expressar ideias de forma clara e eficiente', icon: '💬' },
  { title: 'Trabalho em Equipe', description: 'Colaboração efetiva em times multidisciplinares', icon: '🤝' },
  { title: 'Resolução de Problemas', description: 'Análise e solução de desafios técnicos complexos', icon: '🧩' },
  { title: 'Adaptabilidade', description: 'Flexibilidade para aprender novas tecnologias e metodologias', icon: '🔄' },
  { title: 'Proatividade', description: 'Iniciativa para propor soluções e melhorias', icon: '⚡' },
  { title: 'Pensamento Crítico', description: 'Análise objetiva para tomada de decisões técnicas', icon: '🎯' },
  { title: 'Gestão de Tempo', description: 'Organização e priorização de tarefas e prazos', icon: '⏱️' },
  { title: 'Empatia', description: 'Compreensão das necessidades de usuários e colaboradores', icon: '❤️' },
];

export function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            if (id) {
              setVisibleItems(prev => new Set([...prev, id]));
            }
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

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, SkillType[]>);

  return (
    <section className='py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative w-100 lg:w-full'>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div id='skills' className="max-w-6xl mx-auto relative z-10 scroll-mt-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Tecnologias</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Tecnologias que domino e como as aplico em projetos reais
          </p>
        </div>

        <div ref={skillsRef} className="space-y-10">
          {categoryOrder.map((category) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {categoryLabels[category] || category}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categorySkills.map((skill: SkillType, index: number) => (
                    <div
                      key={`${category}-${index}`}
                      data-id={`${category}-${index}`}
                      className={`skill-item group bg-zinc-900 relative p-4 sm:p-5 rounded-xl sm:rounded-2xl glass card-hover ${
                        visibleItems.has(`${category}-${index}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-zinc-800/50 shrink-0">
                          <img
                            className='w-8 h-8 sm:w-10 sm:h-10 object-contain'
                            src={skill.imageSrc}
                            alt={skill.title}
                            loading='lazy'
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-base sm:text-lg font-semibold text-white mb-1">{skill.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{skill.usage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-800/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Soft Skills
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-5 rounded-xl sm:rounded-2xl glass card-hover"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl">{skill.icon}</span>
                  <div>
                    <h4 className="text-base font-semibold text-white">{skill.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};