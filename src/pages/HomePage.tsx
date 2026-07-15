import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Projects } from '../components/sections/Projects';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

export const HomePage = () => {
  return (
    <>
      <Navbar enableScrollSpy />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
