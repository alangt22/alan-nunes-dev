import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {ContactForm} from './ContactForm';



export function Contatos() {
  return (
    <section className='py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative'>
            {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div id='contatos' className='max-w-6xl mx-auto relative z-10 scroll-mt-20'>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Tem um projeto em mente ou quer conversar? Vou adorar ouvir de você!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          <div className="space-y-5 sm:space-y-6">
            <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-5 sm:mb-6">Informações de Contato</h3>
              
              <div className="space-y-4 sm:space-y-5">
                <span 
                  className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base truncate">alansilva2896@gmail.com</span>
                </span>

                <a 
                  href="https://api.whatsapp.com/send/?phone=5511991219689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors flex-shrink-0">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">+55 (11) 99121-9689</span>
                </a>

                <a 
                  href="https://www.linkedin.com/in/alannunes22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
                    <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">linkedin.com/in/alannunes22</span>
                </a>

                <a 
                  href="https://github.com/alangt22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 text-gray-400 hover:text-indigo-400 transition-colors group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gray-500/20 flex items-center justify-center group-hover:bg-gray-500/30 transition-colors flex-shrink-0">
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-sm sm:text-base">github.com/alangt22</span>
                </a>
              </div>
            </div>

            <div className="glass rounded-xl sm:rounded-2xl p-5 sm:p-8 card-hover">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-5">Redes Sociais</h3>
              <div className="flex gap-3 sm:gap-4">
                <a 
                  href="https://api.whatsapp.com/send/?phone=5511991219689"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center hover:bg-green-500 text-gray-400 hover:text-white transition-all"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/alannunes22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center hover:bg-[#0077B5] text-gray-400 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/alangt22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center hover:bg-[#333] text-gray-400 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

