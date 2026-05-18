"use client";
import { useState } from "react";
import { Header } from "./components/sections/Header";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contatos } from "./components/sections/Contatos";
import { Footer } from "./components/sections/Footer";
import { Loader } from "./components/sections/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <div
        className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}
      >
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contatos />
        <Footer />
      </div>
    </>
  );
}