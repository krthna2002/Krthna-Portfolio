import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'MERN Stack Developer Intern',
      company: 'CubenSquare',
      location: 'Chennai',
      period: 'Jan 2025 - April 2025',
      type: 'Internship',
      description:
        'Created interactive user interfaces using modern JavaScript frameworks. Worked closely with UX/UI designers to implement pixel-perfect designs.',
      technologies: ['React.js', 'NodeJs' ,'MongoDB', 'CSS3', 'SASS', 'JavaScript', 'Figma' , 'Tailwind', 'Webstorm'],
      achievements: [
        'Developed backend APIs and full-stack features using Node.js with the MERN stack.',
'Implemented and trained ML models using Python, TensorFlow, and Scikit-learn.',
'Performed data preprocessing, feature engineering, and model evaluation to enhance accuracy.'
      ]
    },
    {
      title: 'Artificial Intelligence Engineer Trainee',
      company: 'Digital Garage Private Limited',
      location: 'Coimbatore, India',
      period: 'Mar 2024 - Aug 2024',
      type: 'Internship',
      description:
        'Assisted in the development and implementation of machine learning models, focusing on optimizing and tuning algorithms to improve accuracy and efficiency. Also explored design and deployment of deep learning architectures.',
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'Scikit-learn'],
      achievements: [
        'Worked on ML model optimization and tuning for improved accuracy',
        'Gained hands-on exposure to deep learning architectures',
        'Learned model deployment best practices'
      ]
    }
    
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'Internship':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Internship <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and internship experiences in software and AI development
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={`${exp.company}-${exp.title}`}
                className="card-gradient border-border hover-glow slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl md:text-2xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <CalendarDays size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                        <Badge className={getTypeColor(exp.type)}>{exp.type}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-primary/10 text-white hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
