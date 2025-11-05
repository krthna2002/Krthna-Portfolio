import React from 'react';
import profile from '../assets/krthna.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Photo */}
            <div className="flex justify-center slide-up">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-xl border-4 border-primary/30">
                <img
                  src={profile}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Bio & Skills */}
            <div className="slide-up space-y-6 text-center lg:text-left">
              <div className="space-y-4">

<p className="text-lg text-muted-foreground leading-relaxed">
                  A passionate software developer skilled in Java, HTML, CSS, JavaScript and SQL. 
              Focused on building clean, responsive, and efficient web applications that solve real-world problems.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Developed the BloomTrack Herbal Plant Website , a full-stack web application that helps
                    ussers track and manage herbal plants. The project included frontend and backend development, 
                    user authentication, cart management and database integration using MongoDB.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                  Committed to continuously improving coding skills and exploring new technologies. Dedicated to building meaningful digitalsolutions and enhancing ful-stack development
                  expertisse through hands-on projects.
                  </p>

                {/* <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m a <strong>MERN Stack Developer</strong> skilled in{" "}
                  <strong>MongoDB, Express.js, React.js, Node.js</strong> with 
                  experience in <strong>REST APIs, authentication, SQL, and cloud deployment</strong>. 
                  I also have a strong foundation in <strong>AI & Machine Learning</strong>, 
                  integrating models with web apps using TensorFlow and OpenAI API.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My experience includes working as a <strong>Frontend Developer Intern</strong>, 
                  where I built responsive UIs, optimized state management, and integrated APIs. 
                  I have also developed projects such as an <strong>AI Resume Builder SaaS</strong>, 
                  <strong> Intelligent Image Classifier</strong>, and <strong>Task Management System</strong>.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Outside of coding, I enjoy exploring <strong>AI, data science, 
                  and cloud technologies</strong>. I’m passionate about building 
                  scalable, user-focused applications and continuously expanding my 
                  technical expertise.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
