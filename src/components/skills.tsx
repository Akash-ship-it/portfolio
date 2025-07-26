import { Card, CardContent } from '@/components/ui/card';
import { Container } from '@/components/container';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Vue 3', 'Redux', 'Tailwind CSS', 'Bootstrap 5'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'Golang', 'Fiber', 'Loopback 4', 'MongoDB', 'gRPC', 'REST APIs'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git/GitHub', 'AWS', 'Docker', 'Microservices', 'CI/CD Pipeline', 'JWT Authentication', 'Stripe Integration', 'Firebase'],
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden" id="skills">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/90 -z-10" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Technologies and tools I work with
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8 mt-8 animate-in fade-in slide-in-from-bottom duration-700">
          {skillCategories.map((category) => (
            <Card key={category.category} className="overflow-hidden shadow-lg dark:shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20 transition-all duration-200 hover:bg-primary/20 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;