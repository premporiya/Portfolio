import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "My Portfolio | About";
  }, []);

  // Skills array
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "Figma",
    "REST API",
  ];

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-text border-b-2 border-portfolio-primary pb-2 inline-block">
            About Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-portfolio-primary">
                Who I Am
              </h2>
              <p className="text-portfolio-text/80 mb-4">
                I'm a passionate web developer with a keen eye for design and a
                love for creating seamless user experiences. With a background
                in both front-end and back-end development, I enjoy bringing
                ideas to life through code.
              </p>
              <p className="text-portfolio-text/80 mb-4">
                I'm constantly learning and exploring new technologies to stay
                at the cutting edge of web development. My goal is to build
                applications that are not only functional but also intuitive and
                enjoyable to use.
              </p>
              <p className="text-portfolio-text/80">
                When I'm not coding, you can find me exploring nature, reading
                tech blogs, or experimenting with new cooking recipes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-portfolio-primary">
                My Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-portfolio-text rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="text-xl font-semibold mt-8 mb-4 text-portfolio-primary">
                Education
              </h2>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-portfolio-text">
                  Software Enginnering and technology - AI
                </h3>
                <p className="text-portfolio-text/70">
                  Centennial college(PGWP course), Scarborough (Canada)
                  2024-2026
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-portfolio-text">
                  Bachelor of Computer Application
                </h3>
                <p className="text-portfolio-text/70">
                  L.J. college (Gujarat Technology University), Ahmedabad
                  (India) 2020-2023
                </p>
              </div>
              <h2 className="text-xl font-semibold mt-8 mb-4 text-portfolio-primary">
                Certifications
              </h2>
              <ul className="space-y-2 text-portfolio-text/80">
                <li>• Full Stack Web Development</li>
                {/* <li>• UI/UX Design Fundamentals</li> */}
                {/* <li>• Full Stack Web Development</li>
                 <li>• UI/UX Design Fundamentals</li>
                    <li>• Advanced JavaScript</li> */}
                <li>• C - Programming</li>
                <li>• Python</li>
                <li>• Microsoft</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full py-8 bg-white/5 backdrop-blur-sm mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-portfolio-text/70">
            © {new Date().getFullYear()} Prem Poriya. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
