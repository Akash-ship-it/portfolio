import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Projects from '@/components/projects';
import Education from '@/components/education';
import Certifications from '@/components/certifications';
import { Testimonials } from '@/components/testimonials';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { SectionReveal } from '@/components/section-reveal';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SectionReveal>
          <Hero />
        </SectionReveal>
        <SectionReveal>
          <About />
        </SectionReveal>
        <SectionReveal>
          <Experience />
        </SectionReveal>
        <SectionReveal>
          <Skills />
        </SectionReveal>
        <SectionReveal>
          <Projects />
        </SectionReveal>
        <SectionReveal>
          <Education />
        </SectionReveal>
        <SectionReveal>
          <Certifications />
        </SectionReveal>
        <SectionReveal>
          <Testimonials />
        </SectionReveal>
        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  );
}
