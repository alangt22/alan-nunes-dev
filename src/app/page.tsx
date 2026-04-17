import {Header} from "./components/sections/Header";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import {Contatos} from "./components/sections/Contatos";
import {Footer} from "./components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contatos />
      <Footer />
    </div>
  );
}
