import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, Database, Cloud, GitBranch, Palette, Cpu } from 'lucide-react';

// ✅ Import icons/images
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import jsIcon from '../assets/javascript.png';
import reactIcon from '../assets/react.png';
import tsIcon from '../assets/ts.jpeg';
import reduxIcon from '../assets/redux.jpeg';
import tailwindIcon from '../assets/tailwind.jpeg';
import bootstrapIcon from '../assets/boot.jpeg';
import nodeIcon from '../assets/node.png';
import expressIcon from '../assets/exp.jpeg';
import apiIcon from '../assets/rest.jpeg';
import jwtIcon from '../assets/jwt.png'; // ➡️ add a JWT icon in assets
import mongodbIcon from '../assets/mongo.png';
import postgresIcon from '../assets/postgre.png';
import mysqlIcon from '../assets/sql.png';
import githubIcon from '../assets/githubIcon.png';
import figmaIcon from '../assets/figma.png';
import vscodeIcon from '../assets/vscode.png';
import postmanIcon from '../assets/postman.png';
import tensorflowIcon from '../assets/tf.png';
import openaiIcon from '../assets/openAi.png';
import javaIcon from '../assets/java.png';
import thunderIcon from '../assets/thunder.png';
const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      color: 'text-blue-500',
      skills: [
        { name: 'HTML5', icon: htmlIcon },
        { name: 'CSS3', icon: cssIcon },
        { name: 'JavaScript (ES6+)', icon: jsIcon },
        // { name: 'TypeScript', icon: tsIcon },
        // { name: 'React.js', icon: reactIcon },
        // { name: 'Redux', icon: reduxIcon },
        // { name: 'Tailwind CSS', icon: tailwindIcon },
        // { name: 'Bootstrap', icon: bootstrapIcon }
      ]
    },
    {
      category: 'Backend & APIs',
      icon: Database,
      color: 'text-green-500',
      skills: [
         { name: 'java', icon: javaIcon },
        { name: 'Node.js', icon: nodeIcon },
        // { name: 'Express.js', icon: expressIcon },
        // { name: 'REST APIs', icon: apiIcon },
        // { name: 'JWT Authentication', icon: jwtIcon }
      ]
    },
    {
      category: 'Databases',
      icon: Cloud,
      color: 'text-purple-500',
      skills: [
        // { name: 'MongoDB', icon: mongodbIcon },
        // { name: 'PostgreSQL', icon: postgresIcon },
        { name: 'MySQL', icon: mysqlIcon }
      ]
    },
    // {
    //   category: 'AI / Machine Learning',
    //   icon: Cpu,
    //   color: 'text-yellow-500',
    //   skills: [
    //     { name: 'TensorFlow', icon: tensorflowIcon },
    //     { name: 'OpenAI API', icon: openaiIcon }
    //   ]
    // },
    {
      category: 'Tools & Productivity',
      icon: GitBranch,
      color: 'text-orange-500',
      skills: [
        { name: 'Git & GitHub', icon: githubIcon },
        { name: 'VS Code', icon: vscodeIcon },
        { name: 'Postman', icon: postmanIcon },
         { name: 'Thunder', icon: thunderIcon }
        // { name: 'Figma', icon: figmaIcon }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {/* A blend of frontend, backend, database, and AI/ML expertise that I use to design, build, and deploy modern applications. */}
           A blend of frontend, backend,and database that I use to design, build, and deploy modern applications.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.category}
                className="card-gradient border border-border hover-glow scale-on-hover slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-primary/10 glow-effect">
                      <category.icon size={32} className={`${category.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold">{category.category}</CardTitle>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-3">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                        <span>{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
