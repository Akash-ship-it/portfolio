import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Container } from '@/components/container';

const Certifications = () => {
  const certifications = [
    {
      title: "AlgoExpert Certified",
      issuer: "AlgoExpert",
      description: "Data Structures & Algorithms",
      year: "2024",
    },
    {
      title: "Modern React with Redux",
      issuer: "Udemy",
      description: "Complete React and Redux development course",
      year: "2023",
    },
    {
      title: "Microservices with Node.js and React.js",
      issuer: "Udemy",
      description: "Building scalable microservices architecture",
      year: "2023",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden" id="certifications">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background/90 -z-10" />
      <Container>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Certifications</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Professional certifications and continuous learning achievements
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 mt-8 animate-in fade-in slide-in-from-bottom duration-700">
          {certifications.map((cert, index) => (
            <Card key={index} className="overflow-hidden shadow-lg dark:shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-lg p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-[1px] bg-background rounded-lg" />
              <CardHeader className="relative z-10">
                <CardTitle className="text-primary text-lg">{cert.title}</CardTitle>
                <CardDescription>
                  {cert.issuer} • {cert.year}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
