// import { Button } from '@/components/ui/button';
// import { ArrowDown, Github, Linkedin, Mail, Dowload } from 'lucide-react';
// import heroImage from '@/assets/hero-image.jpg';

// const Hero = (): JSX.Element => {
//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 hero-gradient opacity-50"></div>
//       <div className="absolute inset-0">
//         <img
//           src={heroImage}
//           alt="Professional developer workspace"
//           className="w-full h-full object-cover opacity-30 brightness-50"
//         />
//       </div>

//       {/* Content */}
//       <div className="container mx-auto px-6 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="fade-in">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-24">
//               <span className="text-gradient">Software</span>
//               <br />
//               Developer
//             </h1>

//  <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"> 
//               I'm a Passionate software developer skilled in <strong>Java, HTML, CSS, JavaScript and SQL</strong>. I  enjoy building interactive and efficient 
//               web applications that combine clean design with solid functionality.
//                I love learning new technologies and continuously improving my coding 
//                skills impactful digital solutions.</p>

//             {/* <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
//               Full-Stack Developer skilled in building modern web applications using 
//               <strong> MongoDB, Express, React, and Node.js</strong>. Experienced in 
//               REST APIs, authentication, and database management, with additional expertise 
//               in <strong>AI/ML integrations</strong> using TensorFlow, OpenAI API, and 
//               data science workflows. Passionate about creating scalable, 
//               responsive, and AI-powered applications.
//             </p> */}
//           </div>

//           <div className="slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
//             <Button
//               size="lg"
//               onClick={() => scrollToSection('#projects')}
//               className="hover-glow glow-effect"
//             >
//               View My Projects
//             </Button>
//             <Buttonmmmmmmm
//               variant="outline"
//               size="lg"
//               onClick={() => scrollToSection('#contact')}
//               className="hover-glow"
//             >
//               Let&apos;s Connect
//             </Button>
//             <a
//               href="/KEERTHANA R CRT.pdf"
//               download="keerthana_Resume.pdf"
//               className="hover-glow glow-effect"
//             >
//               <Button size="lg" className="flex items-center gap-2">
//                 <Download size={18} />
//                 View My Resume
//               </Button>
//             </a>
          
//           </div>

//           {/* Social Links */}
//           <div className="slide-up flex justify-center space-x-6 mb-12">
//             <a
//               href="https://github.com/krthna2002"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover-glow"
//             >
//               <Github size={24} />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/keerthana-r-262890364"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover-glow"
//             >
//               <Linkedin size={24} />
//             </a>
//             <a
//               href="mailto:krthnaraj1510@gmail.com"
//               className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover-glow"
//             >
//               <Mail size={24} />
//             </a>
//           </div>

//           {/* Scroll Indicator */}
//           <button
//             onClick={() => scrollToSection('#about')}
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
//           >
//             <ArrowDown size={32} className="text-primary" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

const Hero = (): JSX.Element => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional developer workspace"
          className="w-full h-full object-cover opacity-30 brightness-50"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-24">
              <span className="text-gradient">Software</span>
              <br />
              Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"> 
              I'm a Passionate software developer skilled in <strong>Java, HTML, CSS, JavaScript and SQL</strong>. I  enjoy building interactive and efficient 
              web applications that combine clean design with solid functionality.
               I love learning new technologies and continuously improving my coding 
               skills impactful digital solutions.</p>
          </div>

          {/* Action Buttons */}
          <div className="slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="hover-glow glow-effect"
            >
              View My Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="hover-glow"
            >
              Let&apos;s Connect
            </Button>
            <a
              href="/KEERTHANA R CRT.pdf"
              download="Keerthana_Resume.pdf"
              className="hover-glow glow-effect"
            >
              <Button size="lg" className="flex items-center gap-2">
                <Download size={18} />
                View My Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="slide-up flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/krthna2002"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover-glow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/keerthana-r-262890364"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover-glow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:krthnaraj1510@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover-glow"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ArrowDown size={32} className="text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Hero;