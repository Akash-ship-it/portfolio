import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/container';

const About = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden" id="about">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/90 -z-10" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get to know more about my background and expertise
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom duration-700">
          <Card className="shadow-lg dark:shadow-black/30 relative overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-[1px] -z-10" />
            <div className="absolute inset-[1px] bg-background rounded-lg" />
            <CardContent className="p-6 text-lg relative z-10">
              <p className="mb-4">
                I&apos;m a Consultant Software Developer with extensive experience in full-stack development and real-time systems. My journey in software development has equipped me with a diverse skill set spanning both frontend and backend technologies, with a focus on delivering measurable business impact.
              </p>
              <p className="mb-4">
                Currently working at bizWorkz Consulting, I lead the development of enterprise-grade applications including real-time broadcasting systems, CRM platforms, and AI-powered automation tools. I specialize in building scalable solutions using modern technologies like React, Node.js, Golang, and cloud services on AWS.
              </p>
              <p className="mb-4">
                My expertise spans the full technology stack - from frontend frameworks like React and Vue.js to backend technologies including Node.js, Express.js, Golang Fiber, and microservices architecture with gRPC. I have hands-on experience with databases (MongoDB, PostgreSQL), cloud platforms (AWS), and DevOps tools (Docker, Kubernetes, CI/CD).
              </p>
              <p className="mb-4">
                I&apos;m passionate about creating efficient, maintainable code and solving complex problems. I continuously learn new technologies and contribute to the developer community through my 52 Projects Challenge and technical content creation on YouTube.
              </p>
              <p>
                When I&apos;m not coding, I enjoy building real-world applications, sharing knowledge through technical content, and contributing to open-source projects that help the developer community grow.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default About;