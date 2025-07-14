import Link from 'next/link';
import { Container } from '@/components/container';

const Footer = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Akash More. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link 
            href="https://www.linkedin.com/in/akashmore8386/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            LinkedIn
          </Link>
          <Link 
            href="https://github.com/akashmore8386" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            GitHub
          </Link>
          <Link 
            href="mailto:akashmore83386@gmail.com" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Email
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;