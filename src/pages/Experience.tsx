import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    document.title = "My Portfolio | Experience";
  }, []);

  // Experience data
  const experiences = [
    // {
    //   title: "Senior Frontend Developer",
    //   company: "Tech Solutions Inc.",
    //   duration: "2022 - Present",
    //   description: [
    //     "Led a team of 5 developers in building responsive web applications",
    //     "Implemented modern React architecture with TypeScript and Redux",
    //     "Improved application performance by 40% through code optimization",
    //     "Collaborated with UX/UI designers to implement pixel-perfect interfaces"
    //   ]
    // },
    {
      title: "Web Developer",
      company: "FulFillment IQ",
      duration: "2024 - Present",
      description: [
        "Developed and maintained multiple client websites using React and Node.js",
        "Created RESTful APIs for seamless front-end and back-end integration",
        "Implemented responsive designs for optimal user experience across devices",
        "Participated in code reviews and implemented best practices",
      ],
    },
    {
      title: "Networking Analyist",
      company: "Azure knowloedge corporate",
      duration: "2022 - 2023",
      description: [
        "Handled inbound technical calls and provided remote troubleshooting for network issues across multiple regions",
        "Monitored network traffic flow, identified bottlenecks, and ensured seamless data transmission",
        "Guided field engineers remotely to install, maintain, and repair network infrastructures",
        "Documented network incidents and provided recommendations to improve system reliability and performance",
      ],
    },
  ];

  // Projects data
  const projects = [
    {
      title: "E-Commerce Platform",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      description:
        "A full-stack e-commerce solution with secure payment processing and inventory management.",
    },
    {
      title: "Task Management App",
      technologies: ["React", "Redux", "Firebase"],
      description:
        "A collaborative task management tool with real-time updates and team functionality.",
    },
    {
      title: "Portfolio Website",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      description:
        "A responsive portfolio website showcasing work and skills with smooth animations.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] py-10">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-text border-b-2 border-portfolio-primary pb-2 inline-block">
          Experience
        </h1>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-primary">
            Work Experience
          </h2>

          <div className="space-y-10">
            {experiences.map((job, index) => (
              <div
                key={index}
                className="relative pl-5 border-l-2 border-portfolio-secondary/50 hover:border-portfolio-secondary transition-colors duration-300"
              >
                <div className="absolute w-3 h-3 bg-portfolio-secondary rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-medium text-portfolio-text">
                  {job.title}
                </h3>
                <div className="flex justify-between text-portfolio-text/80 text-sm mb-2">
                  <span>{job.company}</span>
                  <span>{job.duration}</span>
                </div>
                <ul className="mt-3 space-y-1 text-portfolio-text/70">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-sm md:text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-portfolio-primary">
            Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-5 hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-medium text-portfolio-text mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-portfolio-primary/20 text-portfolio-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-portfolio-text/70 text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer className="w-full py-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-portfolio-text/70">
            © {new Date().getFullYear()} Prem Poriya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Experience;
