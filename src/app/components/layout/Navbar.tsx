"use client";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    setIsMenuOpen(false);
    setTimeout(() => {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const navLinks = [
    { id: "home", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projetos" },
    { id: "contatos", label: "Contato" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur py-3 shadow-lg" : "bg-slate-900/80 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold gradient-text">
            AN
          </a>

          <div className="hidden lg:flex items-center gap-8">
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

          <div className="hidden lg:flex items-center gap-4">
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
            {isMenuOpen ? (
              <HiX className="hover:scale-110 hover:text-red-500" />
            ) : (
              <HiMenuAlt3 className="hover:scale-110" />
            )}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-md lg:hidden flex items-center justify-center">
          <div className="w-80 bg-slate-900/20 rounded-2xl border-4 border-gray-700 backdrop-blur-md px-8 py-10 flex flex-col items-center gap-5">
            <span className="text-3xl font-bold text-white">Menu</span>
            <div className="w-full border border-gray-700"></div>
            <div className="flex flex-col items-center gap-4 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="text-2xl font-bold text-white hover:text-indigo-400 hover:underline hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <nav className="flex gap-6 justify-center mt-4">
              <Link href="https://api.whatsapp.com" target="_blank">
                <FontAwesomeIcon
                  className={clsx(
                    "text-3xl text-gray-400",
                    "hover:text-green-500 ",
                    "hover:-translate-y-1 hover:scale-110",
                    "hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]",
                    "transition-transform duration-300 ease-out",
                  )}
                  icon={faWhatsapp}
                />
              </Link>

              <Link href="https://linkedin.com" target="_blank">
                <FontAwesomeIcon
                  className={clsx(
                    "text-3xl text-gray-400",
                    "hover:text-blue-600",
                    "hover:-translate-y-1 hover:scale-110",
                    "hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]",
                    "transition-transform duration-300 ease-out",
                  )}
                  icon={faLinkedin}
                />
              </Link>

              <a href="https://github.com" target="_blank">
                <FontAwesomeIcon
                  className={clsx(
                    "text-3xl text-gray-400",
                    "hover:text-indigo-500",
                    "hover:-translate-y-1 hover:scale-110",
                    "hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]",
                    "transition-transform duration-300 ease-out",
                  )}
                  icon={faGithub}
                />
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
