export function About() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl" />
        
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div id="sobre" className="relative max-w-6xl mx-auto scroll-mt-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="space-y-5 sm:space-y-6">
            <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0'>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                Desenvolvedor Full Stack Jr.
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Desenvolvedor Full Stack com mais de 2 anos de experiência em desenvolvimento web. Formado em Análise e Desenvolvimento de Sistemas, desenvolvo aplicações completas com foco em soluções SaaS, desde o planejamento até o deploy em produção.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  <span className="text-cyan-400 font-semibold">Stack principal:</span>
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    Next.js & React
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    Node.js & APIs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    PostgreSQL & Prisma
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                    TailwindCSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Git & Deploy
                  </li>
                </ul>
              </div>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-400 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <span className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0'>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Soft Skills
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Comunicação
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                  Trabalho em equipe
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Proatividade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                  Adaptabilidade
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Resolução de problemas
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></span>
                  Foco em resultados
                </li>
              </ul>
            </div>
          </div>

          <div className="relative pl-0 sm:pl-14 lg:pl-16 space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            <div className="absolute left-3 sm:left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-400 to-indigo-500/20"></div>
            
            <div className="relative card-hover pl-6 sm:pl-0">
              <div className="absolute left-4 sm:left-0 -ml-6 sm:-ml-7 lg:-ml-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-indigo-500 flex items-center justify-center border-4 border-slate-900">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="glass rounded-xl p-4 sm:p-6">
                <span className="text-indigo-400 font-semibold text-xs sm:text-sm">Formação</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">Análise e Desenvolvimento de Sistemas</h4>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm">Universidade Cruzeiro do Sul</p>
                <p className="text-gray-500 text-xs sm:text-sm">2023 - 2025</p>
              </div>
            </div>

            <div className="relative card-hover pl-6 sm:pl-0">
              <div className="absolute left-4 sm:left-0 -ml-6 sm:-ml-7 lg:-ml-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-cyan-400 flex items-center justify-center border-4 border-slate-900">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="glass rounded-xl p-4 sm:p-6">
                <span className="text-cyan-400 font-semibold text-xs sm:text-sm">O que me define</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">Aprendizado Contínuo</h4>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm">Estudo diariamente, busco feedbacks e estou sempre iterando nos projetos para melhorar код и качество.</p>
              </div>
            </div>

            <div className="relative card-hover pl-6 sm:pl-0">
              <div className="absolute left-4 sm:left-0 -ml-6 sm:-ml-7 lg:-ml-8 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-indigo-400 flex items-center justify-center border-4 border-slate-900">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="glass rounded-xl p-4 sm:p-6">
                <span className="text-indigo-400 font-semibold text-xs sm:text-sm">Objetivo</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">Minha Primeira Vaga</h4>
                <p className="text-gray-400 mt-1 sm:mt-2 text-sm">Procuro uma oportunidade para contribuir em uma equipe, aplicar meus conhecimentos e crescer profissionalmente. Estou pronto para aprender e colaborar!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

