import { MdArrowOutward, MdCopyright } from "react-icons/md";

import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:shivalikauni@gmail.com" data-cursor="disable">
                shivalikauni@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+447887137418" data-cursor="disable">
                +44 7887137418
              </a>
            </p>
          </div>
          <div className="contact-box" id="social">
            <h4>Social</h4>
            <a
              href="https://github.com/shivalika3101"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/shivalika31"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Shivalika Karan Bora</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
