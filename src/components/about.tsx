import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/container';

const About = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50" id="about">
      <div className="border-t border-muted mb-12" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Get to know more about my background and expertise
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom duration-700">
          <Card className="shadow-lg dark:shadow-black/30">
            <CardContent className="p-6 text-lg">
              <p className="mb-4">
                I'm a Senior Software Developer with extensive experience in modern web technologies. My journey in software development has equipped me with a diverse skill set spanning both frontend and backend technologies.
              </p>
              <p className="mb-4">
                Currently working at bizWorkz Consulting, I specialize in building robust and scalable web applications using Next.js, React, and TypeScript. My experience includes developing complex applications from scratch, implementing RESTful APIs, and integrating third-party services.
              </p>
              <p className="mb-4">
                I have a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js) and have expanded my expertise to include technologies like Golang, microservices architecture with gRPC, and cloud services on AWS.
              </p>
              <p className="mb-4">
                I'm passionate about creating clean, efficient, and maintainable code. I enjoy solving complex problems and continuously learning new technologies to stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge with the developer community.
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default About;