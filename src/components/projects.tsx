'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Link from 'next/link';
import { Container } from '@/components/container';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const projects = [
    {
      title: 'LinkedIn Clone',
      description: 'A full-stack LinkedIn-like application with user profiles, connections, and posts.',
      technologies: ['Loopback 4', 'React.js', 'MongoDB', 'Node.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'E-commerce Dashboard',
      description: 'Dashboard for product management with cart functionality and video integration.',
      technologies: ['React.js', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Vimeo API'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Travel Guide Platform',
      description: 'Platform connecting tourists with local guides within a 10km radius.',
      technologies: ['React.js', 'Node.js', 'Redux', 'Google OAuth', 'SendGrid', 'Bootstrap 5'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Online Exam System',
      description: 'Responsive exam module system with authentication and performance optimization.',
      technologies: ['React 17', 'JWT Authentication', 'Responsive Design'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Payment Integration Service',
      description: 'Microservice for payment processing with OTP authentication.',
      technologies: ['Node.js', 'Stripe API', 'Twilio', 'Express.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Newsletter Subscription System',
      description: 'Firebase-based newsletter subscription system with custom landing page.',
      technologies: ['React.js', 'Firebase', 'Figma'],
      demoLink: '#',
      codeLink: '#',
    },
    // Add more projects to test pagination
    {
      title: 'Task Management App',
      description: 'A comprehensive task management application with real-time collaboration features.',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'JWT'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps.',
      technologies: ['React.js', 'OpenWeather API', 'Leaflet Maps', 'TypeScript'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media performance and engagement metrics.',
      technologies: ['Next.js', 'Chart.js', 'Twitter API', 'PostgreSQL'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 md:py-16" id="projects">
      <div className="border-t border-muted mb-12" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Some of my recent work and personal projects
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8">
          {currentProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full shadow-lg dark:shadow-black/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[1px] bg-background rounded-lg" />
              <CardHeader className="pb-2 relative z-10">
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="py-2 flex-grow relative z-10">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2 relative z-10">
                <div className="flex gap-2 w-full">
                  <Button asChild variant="outline" size="sm" className="w-full border-2 border-primary text-primary font-semibold hover:bg-primary/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <Link href={project.demoLink}>Live Demo</Link>
                  </Button>
                  <Button asChild size="sm" className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md hover:from-accent hover:to-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <Link href={project.codeLink}>View Code</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
                
                {/* First page */}
                {currentPage > 2 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
                  </PaginationItem>
                )}
                
                {/* Ellipsis */}
                {currentPage > 3 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                
                {/* Current page and neighbors */}
                {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                  const page = currentPage - 1 + i;
                  if (page < 1 || page > totalPages) return null;
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink 
                        onClick={() => handlePageChange(page)}
                        isActive={page === currentPage}
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                })}
                
                {/* Ellipsis */}
                {currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                )}
                
                {/* Last page */}
                {currentPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(totalPages)}>{totalPages}</PaginationLink>
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;