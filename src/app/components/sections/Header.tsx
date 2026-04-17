"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function Header() {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const text = "Olá, sou Alan da Silva Nunes";
  const speed = 80;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 bg-zinc-950">
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

      {/* CONTENT */}
      <div
        id="home"
        className={`container mx-auto px-4 sm:px-6 py-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* LEFT SIDE */}
        <div className="flex-1 text-center lg:text-left max-w-xl lg:max-w-2xl">
          <p className="text-cyan-400 text-center font-medium mb-4 tracking-wider uppercase text-xs sm:text-sm">
            Desenvolvedor Full-Stack
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 lg:text-center leading-tight">
            <span className="gradient-text lg:text-4xl">{displayedText}</span>
            <span className="animate-blink text-indigo-500">|</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto lg:text-center leading-relaxed">
            Transformando ideias em experiências digitais modernas,
            performáticas e memoráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mb-8">
            <Link
              href="https://api.whatsapp.com/send/?phone=5511991219689"
              target="_blank"
              className={clsx(
                "relative overflow-hidden",
                "bg-green-500 hover:bg-green-600",
                "px-6 py-3 rounded-full text-white font-semibold",
                "flex items-center justify-center gap-2",

                "transition-all duration-300 ease-out",
                "hover:scale-105",

                "shadow-md hover:shadow-lg",
                "hover:shadow-green-500/40",

                "before:absolute before:inset-0",
                "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
                "before:translate-x-[-100%]",
                "before:transition-transform before:duration-700",
                "hover:before:translate-x-[100%]",
              )}
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              WhatsApp
            </Link>

            <Link
              href="https://drive.google.com/file/d/1uM0f4UNYPVh6fBBmvI8GwDykYyV8MSz7/view?usp=sharing"
              target="_blank"
              className={clsx(
                "relative overflow-hidden",
                "bg-indigo-500 hover:bg-indigo-600",
                "px-6 py-3 rounded-full text-white font-semibold",
                "flex items-center justify-center gap-2",

                "transition-all duration-300 ease-out",
                "hover:scale-105",

                "shadow-md hover:shadow-lg",
                "hover:shadow-indigo-500/40",

                "before:absolute before:inset-0",
                "before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
                "before:translate-x-[-100%]",
                "before:transition-transform before:duration-700",
                "hover:before:translate-x-[100%]",
              )}
            >
              Ver Currículo
            </Link>
          </div>

          <nav className="flex gap-6 justify-center lg:justify-center">
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

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col items-center lg:p-5">
          <div className="relative z-10 w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-64 lg:h-64">
            {/* Glow atrás da imagem */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse z-0"></div>

            {/* Imagem na frente */}
            <Image
              src="/alan.jpg"
              alt="Foto de perfil"
              width={400}
              height={400}
              loading="eager"
              className="rounded-full object-cover shadow-2xl animate-float relative z-10 w-full h-full"
            />
          </div>

          <span className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Disponível para oportunidades
          </span>

          <a className="text-gray-400 hover:text-indigo-500 mt-3">
            alansilva2896@gmail.com
          </a>
        </div>

        <div className="absolute bottom-0 md:-bottom-17 left-1/2 -translate-x-1/2 scroll-indicator sm:block">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-indigo-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
