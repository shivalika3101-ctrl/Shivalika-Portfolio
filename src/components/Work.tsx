import WorkImage from "./WorkImage";

import "./styles/Work.css";

const projects = [
  {
    id: "01",
    name: "Fluffy AI Assistant",
    category: "Python Automation Project",
    description:
      "Built a Python-based desktop AI assistant with voice and text command processing, SQLite-backed data handling, and workflow automation for search, messaging, and application control.",
    stack: "Python, SQLite, Whisper, Speech Recognition, Eel",
    image: "/images/fluffy-project.png",
    alt: "Fluffy AI Assistant interface",
  },
  {
    id: "02",
    name: "Image Analysis Project",
    category: "Python Image Processing Project",
    description:
      "Developed a GUI-based image analysis application with grayscale conversion, blur, cropping, histogram generation, edge detection, thresholding, and RGB channel operations.",
    stack: "Python, Tkinter, PIL, NumPy, scikit-image, Matplotlib",
    image: "/images/image-analysis-project.png",
    alt: "Image Analysis project interface",
  },
  {
    id: "03",
    name: "Personal Portfolio",
    category: "React Portfolio Website",
    description:
      "Customized an interactive portfolio website using React, TypeScript, GSAP, and Three.js to showcase projects, work experience, academic background, and technical skills.",
    stack: "React, TypeScript, Vite, GSAP, Three.js",
    image: "/images/portfolio-project.png",
    alt: "Portfolio website preview",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Projects</span>
        </h2>
        <div className="work-flex">
          {projects.map((project) => (
            <div className="work-box" key={project.id}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Overview</h4>
                <p>{project.description}</p>
                <h4>Tech stack</h4>
                <p>{project.stack}</p>
              </div>
              <WorkImage image={project.image} alt={project.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
