import "./styles/Career.css";

const Academics = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span></span>
          <br /> academics
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MSc Data Science and Analytics</h4>
                <h5>Cardiff University</h5>
              </div>
              <h3>2026 - 2027</h3>
            </div>
            <ul className="career-points">
              <li>
                Currently pursuing a postgraduate degree focused on data
                science, machine learning, and analytical problem solving.
              </li>
              <li>
                Developing practical skills in Python, data analysis, and
                building data-driven solutions.
              </li>
            </ul>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science and Engineering</h4>
                <h5>SRM Institute of Science and Technology</h5>
              </div>
              <h3>2019 - 2023</h3>
            </div>
            <ul className="career-points">
              <li>
                Built a strong foundation in programming, data structures, and
                core computer science concepts.
              </li>
              <li>
                Gained hands-on experience in Java, Python, databases, and
                backend development through academic projects and internships.
              </li>
            </ul>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary</h4>
                <h5>Deep Memorial Public School</h5>
              </div>
              <h3>2019</h3>
            </div>
            <ul className="career-points">
              <li>
                Completed schooling with a focus on science subjects.
              </li>
              <li>
                Developed a strong foundation in analytical thinking and problem
                solving.
              </li>
              <li>
                Built the early interest in logical reasoning and technical
                fields that later led me to computer science.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academics;
