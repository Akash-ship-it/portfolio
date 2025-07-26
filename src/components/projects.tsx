import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Container } from '@/components/container';

const Projects = () => {
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
  ];

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
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full shadow-lg dark:shadow-black/30 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <CardHeader className="pb-2">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="py-2 flex-grow">
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-2">
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
      </Container>
    </section>
  );
};

export default Projects;