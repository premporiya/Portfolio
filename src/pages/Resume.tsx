import { useEffect } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Award,
  BookOpen,
  Code,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  useEffect(() => {
    document.title = "My Portfolio | Resume";
  }, []);

  const handleDownloadPDF = () => {
    // Create a link to the resume PDF file
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Assumes you have a resume.pdf in the public folder
    link.download = "Prem_Poriya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="flex-1">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-portfolio-text border-b-2 border-portfolio-primary pb-2 inline-block">
            Resume
          </h1>

          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-portfolio-text">
              <span className="text-portfolio-primary">Prem Poriya</span> - Web
              Developer
            </h2>

            <div className="flex gap-3">
              <Button
                onClick={handleDownloadPDF}
                className="flex items-center gap-1 px-4 py-2 bg-portfolio-primary text-white rounded-md hover:bg-portfolio-primary/90 transition-colors text-sm"
                variant="default"
              >
                <Download size={16} />
                Download PDF
              </Button>

              <a
                href="#view"
                className="flex items-center gap-1 px-4 py-2 border border-white/20 text-portfolio-text rounded-md hover:bg-white/5 transition-colors text-sm"
              >
                <ExternalLink size={16} />
                View Full
              </a>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-lg">
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FileText size={20} className="text-portfolio-primary" />
                <h3 className="text-lg font-medium text-portfolio-text">
                  Summary
                </h3>
              </div>
              <p className="text-portfolio-text/80 pl-7">
                Passionate and detail-oriented Web Developer with experience in
                creating responsive and user-friendly web applications.
                Proficient in modern front-end frameworks, back-end
                technologies, and best development practices. Committed to
                delivering high-quality code and exceptional user experiences.
              </p>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={20} className="text-portfolio-primary" />
                <h3 className="text-lg font-medium text-portfolio-text">
                  Education
                </h3>
              </div>
              <div className="pl-7">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-portfolio-text">
                      Software Enginnering and technology - AI
                    </h4>
                    <span className="text-sm text-portfolio-text/70">
                      2024-2026 (Pursuing)
                    </span>
                  </div>
                  <p className="text-portfolio-text/70">
                    Centennial College, Canada
                  </p>
                  <p className="text-sm text-portfolio-text/70 mt-1">
                    Relevant courses: Machine Learning, Artificial Intelligence,
                    <br />
                    Python Programming, Software Engineering Principles, Data
                    Visualization
                  </p>
                </div>
              </div>
              <div className="pl-7">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-portfolio-text">
                      Bachelor of Computer Application
                    </h4>
                    <span className="text-sm text-portfolio-text/70">
                      2020-2023
                    </span>
                  </div>
                  <p className="text-portfolio-text/70">
                    L.j. Institute (Gujarat Technologies University), Ahmedabad
                  </p>
                  <p className="text-sm text-portfolio-text/70 mt-1">
                    Relevant courses: Web Development, Data Structures,
                    Algorithms, Database Systems
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Code size={20} className="text-portfolio-primary" />
                <h3 className="text-lg font-medium text-portfolio-text">
                  Technical Skills
                </h3>
              </div>
              <div className="pl-7 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-3">
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    Programming Languages
                  </h4>
                  <p className="text-portfolio-text/70 text-sm">
                    JavaScript, TypeScript, HTML, CSS, Python, c
                  </p>
                </div>
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    Frameworks & Libraries
                  </h4>
                  <p className="text-portfolio-text/70 text-sm">
                    React, Next.js, Node.js, Express, Tailwind CSS
                  </p>
                </div>
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    Database Technologies
                  </h4>
                  <p className="text-portfolio-text/70 text-sm">
                    MongoDB, PostgreSQL, Firebase, Redis
                  </p>
                </div>
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    Tools & Platforms
                  </h4>
                  <p className="text-portfolio-text/70 text-sm">
                    Git, GitHub, Figma
                    {/* Docker, AWS, Vercel, */}
                  </p>
                </div>
              </div>
            </section>
            {/* certifications */}
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Award size={20} className="text-portfolio-primary" />
                <h3 className="text-lg font-medium text-portfolio-text">
                  Certifications
                </h3>
              </div>
              <div className="pl-7 space-y-3">
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    Html, Css & javascript
                  </h4>
                  <p className="text-sm text-portfolio-text/70">
                    Lumos Learning • 2022
                  </p>
                </div>
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    C - Proggramming
                  </h4>
                  <p className="text-sm text-portfolio-text/70">
                    National Institute of Computer Technology (NICT) • 2021
                  </p>
                </div>
                <div>
                  <h4 className="text-portfolio-text/90 font-medium">
                    Introduction Of Python
                  </h4>
                  <p className="text-sm text-portfolio-text/70">
                    WhiteHat Jr. • 2021
                  </p>
                </div>
              </div>
            </section>
            {/* Work experience */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={20} className="text-portfolio-primary" />
                <h3 className="text-lg font-medium text-portfolio-text">
                  Work Experience
                </h3>
              </div>
              <div className="pl-7 space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-portfolio-text">
                      Software Developer (Intern)
                    </h4>
                    <span className="text-sm text-portfolio-text/70">
                      2024 - Present
                    </span>
                  </div>
                  <p className="text-portfolio-text/70">
                    FulFillment IQ, Toronto, canada
                  </p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-portfolio-text/80">
                    <li>
                      Developed and maintained multiple client websites using
                      React and Node.js
                    </li>
                    <li>
                      Implemented modern React architecture with TypeScript and
                      Redux
                    </li>
                    <li>
                      Improved application performance by 40% through code
                      optimization
                    </li>
                    <li>
                      Created RESTful APIs for seamless front-end and back-end
                      integration
                    </li>
                    <li>
                      Participated in code reviews and implemented best
                      practices
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-portfolio-text">
                      Networking analyist
                    </h4>
                    <span className="text-sm text-portfolio-text/70">
                      2023 - 2024
                    </span>
                  </div>
                  <p className="text-portfolio-text/70">
                    Azure Knowloedge Corporate,Ahmedabad
                  </p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-portfolio-text/80">
                    <li>
                      Handled inbound technical calls and provided remote
                      troubleshooting for network issues across multiple regions
                    </li>
                    <li>
                      Monitored network traffic flow, identified bottlenecks,
                      and ensured seamless data transmission
                    </li>
                    <li>
                      Guided field engineers remotely to install, maintain, and
                      repair network infrastructures
                    </li>
                  </ul>
                </div>
              </div>
            </section>
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

export default Resume;
