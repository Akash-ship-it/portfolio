'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Deepak Jha',
    role: 'Project Manager',
    content: 'Enthusiastic person willing to learn new everytime. Ready to take up challenges. Cool & Calm in tug of war situation. Loved working with him.',
    rating: 5,
    image: '/profile-placeholder.svg'
  },
  {
    id: 2,
    name: 'Sumit Debnath',
    role: 'Founder @bizworkz',
    content: 'I have worked with Akash since the very early days at bizWorkz, and even to this day he has been one of the best human and professional I have worked with in the last two decades. Extremely committed, professional, technically savvy, and efficient person.',
    rating: 5,
    image: '/profile-placeholder.svg'
  },
  {
    id: 3,
    name: 'Natasha Joshi',
    role: 'Marketing Specialist',
    content: 'I have had the pleasure of working closely with Akash More, who has been an exceptional Software Developer with a remarkable talent for building innovative and scalable solutions using JavaScript and its ecosystem.',
    rating: 5,
    image: '/profile-placeholder.svg'
  },
  {
    id: 4,
    name: 'Swagatika Mishra',
    role: 'Digital Operations Manager',
    content: 'Akash is one of the most crucial and dedicated members of Bizworkz team. As a Full Stack Developer, he has played a key role in driving our growth, consistently delivering high-quality solutions.',
    rating: 5,
    image: '/profile-placeholder.svg'
  },
  {
    id: 5,
    name: 'Sagar Suryawanshi',
    role: 'Service Delivery Manager',
    content: 'A jack of all master in one...!!! True tech enthusiast with multi domain expertise happy to see the talent at this age Akash.',
    rating: 5,
    image: '/profile-placeholder.svg'
  },
  {
    id: 6,
    name: 'Ganesh Solace',
    role: 'Business Development Executive',
    content: 'I highly recommend Mr. Akash More as an experienced JavaScript, NodeJS developer and would love to work together again. Akash is amazing at his job!',
    rating: 5,
    image: '/profile-placeholder.svg'
  },
  {
    id: 7,
    name: 'Srijon Kumar Das',
    role: 'Sr. Software Engineer',
    content: 'Akash is a quick learner and someone who is open to learning many pieces of technology to create software solutions. He is very enthusiastic and an extremely hard working individual.',
    rating: 5,
    image: '/profile-placeholder.svg'
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const visibleTestimonials = 3;
  const totalTestimonials = testimonials.length;

  // Auto-advance the carousel
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % (totalTestimonials - visibleTestimonials + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalTestimonials]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % (totalTestimonials - visibleTestimonials + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? totalTestimonials - visibleTestimonials : prev - 1
    );
  };

  const getVisibleTestimonials = () => {
    // Create an array that loops back to the start if needed
    const visible = [];
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (activeIndex + i) % totalTestimonials;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What People Say
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my colleagues and clients have to say about working with me.
          </p>
        </div>
        
        <div className="relative">
          <div 
            ref={containerRef}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-transform duration-500 ease-in-out"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {getVisibleTestimonials().map((testimonial) => (
              <Card 
                key={testimonial.id} 
                className="h-full transition-all hover:shadow-lg hover:border-primary/20 transform hover:-translate-y-1"
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground/20'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.content}"</p>
                  
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/10 transition-colors z-10 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-md hover:bg-primary/10 transition-colors z-10 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: totalTestimonials - visibleTestimonials + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'w-3 h-3 rounded-full transition-all',
                index === activeIndex ? 'bg-primary w-8' : 'bg-muted-foreground/20'
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}