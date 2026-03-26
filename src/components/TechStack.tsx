import "./styles/TechStack.css";

const backendSkills = [
  "Java",
  "Spring Boot",
  "Python",
  "REST APIs",
  "SQL",
  "MySQL",
  "Redis",
  "SQLite",
];

const dataSkills = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Excel",
  "Data Cleaning",
  "Data Visualisation",
  "Machine Learning",
];

const tools = [
  "Git",
  "GitHub",
  "Postman",
  "VS Code",
  "Batch Processing",
  "Production Support",
];

const TechStack = () => {
  return (
    <section className="techstack techstack-section">
      <div className="techstack-shell">
        <div className="techstack-heading">
          <span className="techstack-eyebrow">Technical Skills</span>
          <h2>Tech Stack</h2>
          <p>
            A quick overview of the backend, data, and development tools I use
            most often across projects and professional work.
          </p>
        </div>

        <div className="techstack-grid">
          <article className="tech-card">
            <h3>Backend</h3>
            <div className="tech-pills">
              {backendSkills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="tech-card">
            <h3>Data</h3>
            <div className="tech-pills">
              {dataSkills.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>

          <article className="tech-card tech-card-wide">
            <h3>Tools & Workflow</h3>
            <div className="tech-pills">
              {tools.map((skill) => (
                <span key={skill} className="tech-pill">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
