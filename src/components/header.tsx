'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
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
          <SheetContent side="right" className="w-[280px] sm:w-[320px] p-6">
            <SheetHeader className="mb-8">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>
                Access all sections of the portfolio
              </SheetDescription>
            </SheetHeader>
            
            <div className="flex flex-col h-full">
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 flex-1">
                {navItems.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    className="flex items-center px-4 py-3 text-base font-medium text-foreground transition-all duration-200 hover:text-primary hover:bg-muted/50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              
              {/* Bottom Section */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center justify-between px-4 py-3 bg-muted/50 rounded-lg">
                  <span className="text-sm font-medium">Theme</span>
                  <ThemeToggle />
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:from-accent hover:to-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <Link href="#contact" onClick={() => setIsOpen(false)}>Hire Me</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
};

export default Header;