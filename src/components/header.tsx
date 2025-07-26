'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { Container } from '@/components/container';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl transition-transform duration-200 hover:scale-105 hover:text-primary">Akash More</Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium transition-all duration-200 hover:text-primary hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button asChild className="bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:from-accent hover:to-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="h-9 w-9 p-0">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-lg font-medium transition-all duration-200 hover:text-primary hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center mt-4">
                <ThemeToggle />
                <span className="ml-2 text-sm">Toggle theme</span>
              </div>
              <Button asChild className="mt-4 bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:from-accent hover:to-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                <Link href="#contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
};

export default Header;