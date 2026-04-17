import { faCopyright, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-400">
        
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <FontAwesomeIcon icon={faCopyright} />
            <span>{new Date().getFullYear()} Alan Nunes. Feito com</span>
            <FontAwesomeIcon icon={faHeart} className="text-red-500" />
            <span>usando React</span>
          </div>
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            AN
          </a>
        </div>
      </div>
    </footer>
  );
}
