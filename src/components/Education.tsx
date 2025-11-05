import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, CalendarDays, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
     {
      degree: 'MCA-Master of Computer Apllication',
      institution: 'Government Arts College(Autonomous)',
      period: '2023 - 2025',
      gpa: '85.51',
    },
    {
      degree: 'BCA-Bachelor of Computer Apllication',
      institution: 'Government Arts College(Autonomous)',
      period: '2020 - 2023',
      gpa: '85',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Minerva Higher Secondary School',
      period: '2019 - 2020',
      gpa: '72.6',
    },
    {
      degree: 'SSLC',
      institution: 'Minerva Higher Secondary School',
      period: '2017 - 2018',
      gpa: '87',
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My academic background and achievements.
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card
                key={edu.degree}
                className="card-gradient border-border hover-glow slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <CalendarDays size={14} />
                        <span>{edu.period}</span>
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
