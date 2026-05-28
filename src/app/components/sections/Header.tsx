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
  const [displayedStack, setDisplayedStack] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [indexStack, setIndexStack] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const text = "Olá, sou Alan da Silva Nunes";
  const stack = "Desenvolvedor\nFull-Stack";
  const speed = 80;
  const speedStack = 100;
  const breakStack = 1000;
  const messageWhatsapp = "Olá, Alan! Vi seu portfólio e gostaria de conversar sobre oportunidades de trabalho. Você está disponível?";

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

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;

    if (!isDeleting && indexStack < stack.length) {
      // escrevendo
      timer = setTimeout(() => {
        setDisplayedStack((prev) => prev + stack[indexStack]);
        setIndexStack((prev) => prev + 1);
      }, speedStack);
    } else if (!isDeleting && indexStack === stack.length) {
      // pausa antes de apagar
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, breakStack);
    } else if (isDeleting && indexStack > 0) {
      // apagando
      timer = setTimeout(() => {
        setDisplayedStack((prev) => prev.slice(0, -1));
        setIndexStack((prev) => prev - 1);
      }, speedStack / 2); // apagar mais rápido fica mais natural
    } else if (isDeleting && indexStack === 0) {
      // recomeça
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [indexStack, isDeleting, stack]);

  return (
    <section className="min-h-screen bg-red-500 flex items-center justify-center relative overflow-hidden pt-16 bg-zinc-950 w-full">
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
          <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-7xl font-black mb-6 lg:text-center leading-tight">
            <span className="gradient-text lg:text-4xl animate-pulse">
              {displayedText}
            </span>
            <span className="animate-blink text-indigo-500">|</span>
          </h1>

          <p className="text-cyan-400 text-center font-extrabold mb-4 tracking-tighter uppercase h-18 text-3xl sm:text-4xl whitespace-pre-line">
            {displayedStack}
            <span className="animate-blink ml-1">|</span>
          </p>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto lg:text-center leading-relaxed">
            Transformando ideias em experiências digitais modernas,
            performáticas e memoráveis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-center mb-8">
            <Link
              href={`https://api.whatsapp.com/send/?phone=5511991219689/&text=${messageWhatsapp}&app_absent=0`}
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

            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
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
              Baixar Currículo
            </a>
          </div>

          <nav className="flex gap-6 justify-center lg:justify-center">
            <Link href="https://api.whatsapp.com/send/?phone=5511991219689" target="_blank">
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

            <Link href="https://www.linkedin.com/in/alannunes22/" target="_blank">
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

            <a href="https://github.com/alangt22" target="_blank">
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

        <div className="absolute bottom-0 md:-bottom-14 left-1/2 -translate-x-1/2 scroll-indicator sm:block">
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-indigo-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
