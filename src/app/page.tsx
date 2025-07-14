import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
