import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Container } from '@/components/container';

const Experience = () => {
  const experiences = [
    {
      id: 'bizworkz',
      company: 'bizWorkz Consulting',
      position: 'Senior Software Developer',
      period: 'Oct 2023 - Present',
      location: 'Pune (Remote)',
      description: [
        'Engineered a real-time internal broadcasting application for the College of Defence Management (CDM), enabling management to instantly push news, videos, and critical announcements to displays across the campus.',
        'Led the deployment and maintenance for a diverse portfolio of enterprise SaaS products including a CRM, an AI-powered application, and a website optimization tool, ensuring high availability and performance.',
        'Managed the full lifecycle of a critical internal employee management tool, from initial deployment to ongoing support and feature updates.',
      ],
    },
    {
      id: 'sanicon',
      company: 'Sanicon IT Services Pvt. Ltd',
      position: 'Software Developer',
      period: 'Feb 2023 - June 2023',
      location: 'Pune (Remote)',
      description: [
        'Spearheaded the development of a LinkedIn-like application clone.',
        'Major contributions in building APIs using Loopback 4.',
        'Ensured seamless UI integration using ReactJS.',
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
      position: 'Software Developer',
      period: 'Apr 2022 - Sep 2022',
      location: 'Pune (Remote)',
      description: [
        'Worked on a dashboard in Reactjs, integrated APIs for profile info, image upload, used vimeo video library, showing informative videos for each product. Developed cart functionality using Reactjs and Redux toolkit.',
        'Developed REST APIs using nodejs, express and used MongoDB as a data persistence layer.',
        'Implemented a payment gateway flow in nodejs application using a third party library called Stripe. Integrated Twilio mobile OTP and call based authentication.',
        'Integrated APIs using Golang, Fiber and integrated it with MongoDB for storing data. Hands-on development using microservices architecture using gRPC and leveraged unary and bidirectional approach provided by gRPC for client server communication.',
        'Learned about ECR, EKS, ALB, code commit, code deploy, code build and code pipeline services for containerized application deployment over AWS.',
      ],
    },
    {
      id: 'sawbon',
      company: 'Sawbon',
      position: 'Full-stack Developer (Internship)',
      period: 'Feb 2022 - Sep 2022',
      location: 'Bengaluru (Remote)',
      description: [
        'Implemented nodejs APIs for guide and tourist model. Integrated google\'s OAuth authentication, sending email after registration, forgot password and purchasing completion mail using sendgrid mail services. Worked on features like sorting, filtering, getting available guides within 10 km of radius.',
        'For the frontend part used Reactjs, Redux toolkit, bootstrap 5, worked on features like search functionality, cart functionality, guide and tourist dashboards.',
      ],
    },
    {
      id: 'primary',
      company: 'Primary Key Technologies',
      position: 'Frontend Developer',
      period: 'Dec 2021 - Apr 2022',
      location: 'Mumbai (Remote)',
      description: [
        'Developed a gambling application using Vue 3 and used state management logic using Vuex library. Worked closely with client and backend developers. Integrated two factor OTP authentication.',
      ],
    },
    {
      id: 'gitanjali',
      company: 'Gitanjali.org',
      position: 'Frontend Developer (Internship)',
      period: 'March 2021 - Aug 2021',
      location: 'Bengaluru (Remote)',
      description: [
        'Developed an exam module system using React 17, designed fully responsive React components.',
        'Implemented Authentication flow using JWTs, increased the development team\'s productivity by 95%.',
        'Evaluated performance and feasibility for new components and optimized components to assure maximum usability, performance and scalability.',
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background/80 to-background/90 -z-10" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Work Experience</h2>
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