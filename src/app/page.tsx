import {Header} from "./components/sections/Header";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
    </div>
  );
}
