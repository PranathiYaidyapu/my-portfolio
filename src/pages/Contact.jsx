import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-title">
        <h2>Get In Touch</h2>
        <p>
          I'm currently looking for software development opportunities. Feel
          free to reach out!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:ypranathi07@gmail.com">
            <FaEnvelope />
            <span>ypranathi07@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/YOUR-LINKEDIN/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://github.com/YOUR-GITHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;