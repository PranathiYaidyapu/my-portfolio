import "../styles/Hero.css";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";
import { motion } from "framer-motion";
import developer from "../assets/images/developer.png";
import TechStack from "./TechStack";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >

          <p className="hero-greeting">
            Hello I'm 👋
          </p>

          <h1>
            Pranathi Yaidyapu
          </h1>

          <h2 className="hero-role">
            <Typewriter
              words={[
                "Software Engineer",
                "Frontend Developer",
                "Computer Science Graduate",
                "AI Enthusiast",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="hero-description">
            Software Engineer with almost 3 years of experience building
            scalable applications using Java, Python, JavaScript, React,
            and cloud technologies. Passionate about creating reliable
            software, exploring AI, and solving real-world problems through
            technology.
          </p>

          <div className="hero-buttons">
            <a href="/projects" className="btn-primary">
              View Projects →
            </a>

            <a
              href="/resume.pdf"
              className="btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>

          <TechStack />

          <div className="social-icons">
            <a
              href="https://github.com/pranathiyaidyapu"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/pranathiyaidyapu"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:ypranathi07@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

        </motion.div>

        <div className="hero-image">
          <img
            src={developer}
            alt="Developer Illustration"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;