import portfolioSEO from "@/src/lib/seo";
import Hero from './components/sections/Hero';
import Summary from './components/sections/Summary';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

export const metadata = {
  ...portfolioSEO,
  alternates: {
    canonical: "https://www.themahi.in/"
  }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

