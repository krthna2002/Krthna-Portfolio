import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import image  from '../assets/image.png';

const Certificates = () => {
  const certificates = [
    {
      title: "  Programming in Java",
      issuer: "NPTEL",
      date: "Completed",
    },
    // {
    //   title: "Full Stack Web Development",
    //   issuer: "Naan Mudhalvan",
    //   date: "Completed",
    // },
    // {
    //   title: "MERN Stack Development",
    //   issuer: "Error Makes Clever",
    //   date: "Completed",
    // },
    // {
    //   title: "Full Stack Web Development",
    //   issuer: "Udemy",
    //   date: "Completed",
    // },
    {
      title: "MongoDb CRUD Operations",
      issuer: "MongoDB",
      date: "Completed",
    },
    // {
    //   title: "Prompt Engineering",
    //   issuer: "Error Makes Clever",
    //   date: "Completed",
    // },
    // {
    //   title: "Generative AI",
    //   issuer: "LinkedIn",
    //   date: "Completed",
    // },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certificate",
      date: "Completed",
    },
    {title: "Typewriting(English) - Senior Grade",
      issuer: "Government Technical Examinations",
      date: "Completed",

    },
    {title: "Typewriting(Tamil) - Senior Grade",
      issuer: "Government Technical Examinations",
      date: "Completed",

    },
  ];

  return (
    // <section id="certificates" className="py-20 bg-secondary/10">
     <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Certifications I’ve achieved to strengthen my technical skills and professional growth.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card
                key={index}
                className="card-gradient border border-border hover-glow scale-on-hover slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="flex items-center gap-3">
                  <div className="p-3 rounded-full bg-primary/10 glow-effect">
                    <img src={image} alt="Certificate" className="w-8 h-8 object-contain" />
                  </div>
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    <strong>Issuer:</strong> {cert.issuer}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Status:</strong> {cert.date}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
