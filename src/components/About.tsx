import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I'm an MSc Data Science student at Cardiff University with a
          background in backend engineering from my experience at Tata
          Consultancy Services. I've worked on REST APIs, batch processing
          systems, and production-level applications, which shaped my approach
          to building reliable and structured systems.
        </p>
        <p className="para">
          Alongside my studies, I work as a Residence Life Assistant, where I
          support students and help organise community events, strengthening my
          communication and teamwork skills.
        </p>
        <p className="para">
          I work with Java, Python, SQL, and backend frameworks like Spring
          Boot, and I'm currently exploring data science and machine learning
          through hands-on projects. I enjoy solving problems methodically and
          building systems that are practical and efficient.
        </p>
      </div>
    </div>
  );
};

export default About;
