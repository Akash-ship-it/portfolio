import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';

const Hero = () => {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_450px]">
          <div className="flex flex-col justify-center space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm Akash More
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Senior Software Developer specializing in modern web technologies
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:from-accent hover:to-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary text-primary font-semibold hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary animate-bounce" aria-label="Active status"></span>
                    </span>
                    <span>Currently working at bizWorkz Consulting</span>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex justify-between space-x-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">Senior Software Developer</h4>
                      <p className="text-sm">Working on modern web applications using Next.js, React, and TypeScript.</p>
                      <div className="flex items-center pt-2">
                        <span className="text-xs text-muted-foreground">Oct 2023 - Present</span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="flex items-center justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="relative aspect-square overflow-hidden rounded-full border border-gray-200 dark:border-gray-800">
              <Image 
                src="/profile-photo.jpg" 
                alt="Akash More" 
                width={800} 
                height={800} 
                className="object-cover"
                
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;