import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400 flex justify-center w-100 lg:w-full">
        
      <div className="max-w-6xl flex flex-col items-center justify-between gap-4 py-6 mx-auto px-4 sm:px-6 md:flex-row">
        <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <a
            href="#home"
            className="text-xl sm:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            AN
          </a>
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <FaCopyright className="text-gray-400" />
            <span>{new Date().getFullYear()} Alan Nunes. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
