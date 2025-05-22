import { Header } from "./components/Header";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Resume } from "./sections/Resume";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";

function App() {
  return (
    <main className="bg-primary text-white min-h-screen font-sans">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}

export default App;
