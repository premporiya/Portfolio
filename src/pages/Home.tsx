import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  useEffect(() => {
    document.title = "My Portfolio | Home";
  }, []);

  // Skills for About preview
  const previewSkills = ["React", "TypeScript", "Node.js", "Tailwind CSS"];

  // Experience preview
  const previewExperience = {
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "2022 - Present",
    description:
      "Led a team of 5 developers in building responsive web applications",
  };

  // Projects preview
  const previewProject = {
    title: "E-Commerce Platform",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "A full-stack e-commerce solution with secure payment processing.",
  };

  return (
    <ScrollArea className="h-[calc(100vh-80px)]">
      <div className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center w-full">
          <div className="w-full max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-text">
              <span className="text-portfolio-primary">Hello,</span> I'm Prem
              Poriya
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-portfolio-text/80">
              Web Developer | Designer | Creative Thinker
            </h2>
            <p className="text-lg mb-10 text-portfolio-text/70">
              I build beautiful, interactive and responsive web applications
              with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#about-preview"
                className="px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-primary/90 transition-colors"
              >
                Explore My Work
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-portfolio-text/30 text-portfolio-text font-medium rounded-md hover:border-portfolio-primary hover:text-portfolio-primary transition-colors"
              >
                Get In Touch
              </a>
            </div>

            <div className="mt-16 flex justify-center">
              <a
                href="#about-preview"
                className="flex flex-col items-center text-portfolio-text/70 hover:text-portfolio-primary transition-colors"
              >
                <span className="mb-2">Scroll Down</span>
                <ChevronDown className="animate-bounce" />
              </a>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section
          id="about-preview"
          className="min-h-screen py-20 w-full max-w-4xl mx-auto px-4"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-portfolio-text">
              About <span className="text-portfolio-primary">Me</span>
            </h2>
            <div className="h-1 w-20 bg-portfolio-primary mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
                Who I Am
              </h3>
              <p className="text-portfolio-text/80 mb-4">
                I'm a passionate web developer with a keen eye for design and a
                love for creating seamless user experiences. With a background
                in both front-end and back-end development, I enjoy bringing
                ideas to life through code.
              </p>

              <h3 className="text-xl font-semibold mb-4 mt-6 text-portfolio-primary">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {previewSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-portfolio-text rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="text-portfolio-primary hover:underline mt-4 inline-block"
              >
                Learn more about me →
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-portfolio-primary">
                <img
                  src="/AboutImage.png"
                  alt="Profile Photo"
                  className="absolute w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Preview */}
        <section className="min-h-screen py-20 w-full bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-portfolio-text">
                Work <span className="text-portfolio-primary">Experience</span>
              </h2>
              <div className="h-1 w-20 bg-portfolio-primary mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="relative pl-5 border-l-2 border-portfolio-secondary/50">
                <div className="absolute w-3 h-3 bg-portfolio-secondary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-medium text-portfolio-text">
                  {previewExperience.title}
                </h3>
                <div className="flex justify-between text-portfolio-text/80 text-sm mb-2">
                  <span>{previewExperience.company}</span>
                  <span>{previewExperience.duration}</span>
                </div>
                <p className="mt-2 text-portfolio-text/70">
                  {previewExperience.description}
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-5">
                <h3 className="text-lg font-medium text-portfolio-text mb-2">
                  {previewProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {previewProject.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-portfolio-primary/20 text-portfolio-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-portfolio-text/70 text-sm">
                  {previewProject.description}
                </p>
              </div>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/experience"
                className="px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-primary/90 transition-colors inline-block"
              >
                View All Experience
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Preview */}
        <section className="min-h-screen py-20 w-full">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold text-portfolio-text">
                Get In <span className="text-portfolio-primary">Touch</span>
              </h2>
              <div className="h-1 w-20 bg-portfolio-primary mx-auto mt-2"></div>
            </div>

            <div className="text-center mt-8 mb-10">
              <p className="text-portfolio-text/80 max-w-lg mx-auto">
                I'm always open to new opportunities, collaborations, or just a
                friendly chat. Let's create something amazing together!
              </p>
            </div>

            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
                      Contact Information
                    </h3>
                    <p className="mb-2 text-portfolio-text">
                      <strong>Email:</strong> premmaharsh@gmail.com
                    </p>
                    <p className="mb-2 text-portfolio-text">
                      <strong>Phone:</strong> +1 (437) 661-0376
                    </p>
                    <p className="text-portfolio-text">
                      <strong>Location:</strong> Toronto, Canada
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-portfolio-primary text-white font-medium rounded-md hover:bg-portfolio-primary/90 transition-colors"
                    >
                      Send Me a Message
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-portfolio-text/70">
              © {new Date().getFullYear()} Prem Poriya. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ScrollArea>
  );
};

export default Home;
