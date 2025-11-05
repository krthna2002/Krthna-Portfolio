import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';
import resume from '../assets/resume.jpg';
import movie from '../assets/movie.jpg';
import weather from '../assets/weather.jpg';
import ecommerce from '../assets/ecommerce.jpg';
import bulkmail from '../assets/bulkmail.png';
import herbalplant from '../assets/herbal2.jpg';
const Projects = () => {
  const projects = [
     {
    title: 'BloomTrack Herbal Plant Website',
    description:
    'Developed an innovative web application for herbal plant sales and management, integrating responsive design and a dynamic Node.js backened connected with MongoDB for seamless data handlling.',
      // 'A tool that allows sending bulk emails efficiently with customizable templates, CSV-based contact imports, and email scheduling features.',
    image: herbalplant,
    technologies: ['HTML','CSS','JavaScript','Node.js', 'Express', 'React.js', 'MongoDB'],
    liveUrl: 'https://bulkmail-webapp-fe.onrender.com', // replace with actual live URL
    githubUrl: 'https://github.com/PUSHPAKALAJOHN2823/BulkMail_Webapp', // replace with actual GitHub link
  }
  //   {
  //   title: 'Bulk Mail Sender',
  //   description:
  //     'A tool that allows sending bulk emails efficiently with customizable templates, CSV-based contact imports, and email scheduling features.',
  //   image: bulkmail,
  //   technologies: ['Node.js', 'Express', 'Nodemailer', 'React.js', 'MongoDB'],
  //   liveUrl: 'https://bulkmail-webapp-fe.onrender.com', // replace with actual live URL
  //   githubUrl: 'https://github.com/PUSHPAKALAJOHN2823/BulkMail_Webapp', // replace with actual GitHub link
  // },
  //   {
  //     title: 'AI Powered Resume Analyzer',
  //     description:
  //       'A web app that parses resumes, extracts keywords, highlights missing skills, and generates ATS-style scoring reports.',
  //     image: resume,
  //     technologies: ['React.js', 'Zustand', 'Tailwindcss', 'Puter JS', 'CSS3'],
  //     liveUrl: 'https://airesume-analyzer-six.vercel.app/',
  //     githubUrl:'https://github.com/PUSHPAKALAJOHN2823/AI-Resume-Analyzer',
  //   },
  //   {
  //     title: 'Movie App',
  //     description:
  //       'A responsive movie search and discovery app with API integration, user-friendly interface, and dynamic content rendering.',
  //     image: movie,
  //     technologies: ['React.js', 'TMDB API', 'Tailwind CSS'],
  //     liveUrl: 'https://movie-app-lilac-sigma.vercel.app/',
  //     githubUrl:'https://github.com/PUSHPAKALAJOHN2823/Movie-App',
  //   },
  //   {
  //     title: 'Weather Forecast App',
  //     description:
  //       'Weather app with real-time forecasts, responsive design, and API integration for accurate weather data.',
  //     image: weather,
  //     technologies: ['React.js', 'Node.js', 'Weather API'],
  //     liveUrl: 'https://weather-app-cyan-iota-78.vercel.app/',
  //     githubUrl:'https://github.com/PUSHPAKALAJOHN2823/weather-app'
      
  //   },
  //   {
  //     title: 'E-commerce Website – Frontend',
  //     description:
  //       'Developed a responsive e-commerce site with product pages, cart functionality, and category filters. Integrated mock product data, React Router for routing, and styled the UI with Tailwind CSS.',
  //     image: ecommerce,
  //     technologies: ['React.js', 'Tailwind CSS', 'React Router'],
  //     liveUrl: 'https://pushpakalajohn2823.github.io/E-Commerce/',
  //     githubUrl: 'https://github.com/PUSHPAKALAJOHN2823/E-Commerce/tree/master',
  //   },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my recent work, built with modern technologies and best practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="card-gradient border-border hover-glow scale-on-hover slide-up overflow-hidden group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-video object-cover w-full"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" asChild className="hover-glow">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="hover-glow">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" asChild className="flex-1 hover-glow">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild className="hover-glow">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
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

export default Projects;