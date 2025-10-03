import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Container } from '@/components/container';

const Experience = () => {
  const experiences = [
    {
      id: 'bizworkz',
      company: 'bizWorkz Consulting',
      position: 'Consultant Software Developer',
      period: 'Oct 2023 - Present',
      location: 'Pune (Remote)',
      description: [
        'Led full-stack development of real-time television broadcasting system using Node.js, React, and WebSockets, reducing communication delays by 60%.',
        'Engineered Bizhubb CRM platform with Redux, MongoDB, and RabbitMQ, reducing manual tracking effort by 40% and accelerating enterprise deal closures by 25%.',
        'Built Agency Tool analytics dashboard with React Testing Library and CI/CD on AWS (EC2/S3), improving load times by 35% and user engagement by 20%.',
        'Designed briyte.ai automation tool integrating OpenAI, Gemini, and Deepseek APIs with Golang Fiber and PostgreSQL, reducing operational costs by 30%.',
      ],
    },
    {
      id: 'sanicon',
      company: 'Sanicon IT Services Pvt. Ltd',
      position: 'Full Stack Software Developer',
      period: 'Feb 2023 - June 2023',
      location: 'Pune (Remote)',
      description: [
        'Spearheaded development of LinkedIn-like social networking platform using ReactJS and Loopback 4 APIs, supporting 500+ beta users, accelerating feature deployment by 40%.',
        'Architected RESTful APIs with Node.js and Express.js, implementing Redis caching, reducing response latency by 50% and improving scalability for 10,000+ concurrent requests.',
        'Designed responsive UI/UX with ReactJS and Tailwind CSS, increasing user engagement through A/B-tested optimizations.',
      ],
    },
    {
      id: 'pragra',
      company: 'Pragra',
      position: 'Software Developer',
      period: 'Oct 2022 - Dec 2022',
      location: 'Noida (Remote)',
      description: [
        'Implemented Subscribe newsletter solution, storing all the email id\'s on the Firebase database.',
        'Created a landing page using React UI library, as provided by the client via a Figma file.',
        'Collaborated with other team members for responsive design implementation.',
      ],
    },
    {
      id: 'solace',
      company: 'Solace Infotech Private Limited',
      position: 'Trainee Software Consultant',
      period: 'Apr 2022 - Sep 2022',
      location: 'Pune (Remote)',
      description: [
        'Engineered ReactJS dashboard integrating RESTful APIs, AWS S3, and Vimeo video library, improving user onboarding by 45% and extending average session time by 3 minutes.',
        'Implemented e-commerce cart functionality with Redux Toolkit, reducing cart abandonment by 30%, processing 1,000+ monthly transactions.',
        'Designed scalable Node.js/Express.js APIs with MongoDB, handling 10x traffic increase without performance degradation.',
        'Integrated Stripe payment gateway and Twilio OTP authentication, achieving 99.9% transaction success rate.',
        'Built Golang Fiber microservices with gRPC, reducing inter-service communication latency by 40% and supporting 5x traffic scaling.',
      ],
    },
    {
      id: 'sawbon',
      company: 'Sawbon',
      position: 'Full-Stack Developer (Internship)',
      period: 'Feb 2022 - Sep 2022',
      location: 'Bengaluru (Remote)',
      description: [
        'Developed Node.js APIs for guide-tourist matching platform with Google OAuth 2.0, SendGrid, and geospatial filtering, improving booking efficiency by 50%.',
        'Built comprehensive frontend features using ReactJS, Redux Toolkit, and Bootstrap 5, increasing active users by 40%.',
      ],
    },
    {
      id: 'primary',
      company: 'Primary Key Technologies',
      position: 'Frontend Developer',
      period: 'Dec 2021 - Apr 2022',
      location: 'Mumbai (Remote)',
      description: [
        'Built production Vue 3 gambling application with Vuex, handling 2,000+ concurrent users, delivering MVP 2 weeks ahead of schedule.',
        'Integrated two-factor OTP authentication, reducing unauthorized access incidents by 90%.',
      ],
    },
    {
      id: 'gitanjali',
      company: 'Gitanjali.org',
      position: 'Frontend Developer (Internship)',
      period: 'March 2021 - Aug 2021',
      location: 'Bengaluru (Remote)',
      description: [
        'Developed exam module system using React 17 with responsive components and JWT authentication, supporting online assessments for 2,000+ students.',
        'Optimized component performance and bundle size using Chrome DevTools and React Profiler, achieving 40% faster page loads and supporting 3x concurrent user capacity.',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background/80 to-background/90 -z-10" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Work Experience</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My professional journey and contributions in the tech industry.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 md:mt-12 max-w-4xl animate-in fade-in slide-in-from-bottom duration-700">
          <Tabs defaultValue="bizworkz" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-4 mb-8">
              <TabsTrigger value="bizworkz">bizWorkz</TabsTrigger>
              <TabsTrigger value="sanicon">Sanicon</TabsTrigger>
              <TabsTrigger value="pragra">Pragra</TabsTrigger>
              <TabsTrigger value="solace">Solace</TabsTrigger>
            </TabsList>
            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="space-y-4">
                <Card className="shadow-lg dark:shadow-black/30">
                  <CardHeader>
                    <CardTitle>{exp.position}</CardTitle>
                    <CardDescription>
                      {exp.company} | {exp.period} | {exp.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default Experience;