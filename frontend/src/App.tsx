
import { Header } from "./components/Header";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";

import { Skills } from "./sections/Skills";

function App() {
  return (
    <main className="bg-primary text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
