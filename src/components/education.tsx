import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Manipal University",
      location: "Jaipur, India (Distance Learning)",
      period: "Oct 2021 - Dec 2024",
      status: "In Progress",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden" id="education">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-accent/10 via-background/80 to-background/90 -z-10" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Education</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              My academic background and continuous learning journey
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl mt-8 animate-in fade-in slide-in-from-bottom duration-700">
          {education.map((edu, index) => (
            <Card key={index} className="shadow-lg dark:shadow-black/30 relative overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-[1px] -z-10" />
              <div className="absolute inset-[1px] bg-background rounded-lg" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-primary">{edu.degree}</CardTitle>
                <CardDescription>
                  {edu.institution} | {edu.location} | {edu.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-md bg-accent/10 px-2 py-1 text-xs font-medium text-accent ring-1 ring-inset ring-accent/20">
                    {edu.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Education;
