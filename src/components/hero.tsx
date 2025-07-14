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
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm Akash More
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Senior Software Developer specializing in modern web technologies
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Hire Me</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
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
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-full border border-gray-200 dark:border-gray-800">
              <Image 
                src="/profile-placeholder.svg" 
                alt="Akash More" 
                width={400} 
                height={400} 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;