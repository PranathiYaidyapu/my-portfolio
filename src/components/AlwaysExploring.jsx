import "./../styles/AlwaysExploring.css";
import { FaReact } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import mendixLogo from "../assets/icons/mendix.jpeg";

function AlwaysExploring() {
  return (
    <section className="exploring">

      <div className="exploring-header">
        <span className="section-tag">🌱 Always Exploring</span>

        <h2>Learning doesn't stop after graduation—it grows with every project, every challenge, and every opportunity to build something meaningful.</h2>

        <p>
          The technologies below aren't just skills on my resume—they're areas
          I'm genuinely curious about, actively exploring, and excited to build
          with as I begin my career.
        </p>
      </div>

      <div className="bubble-container">

        <div className="bubble react">
          <FaReact className="bubble-icon" />

          <h3>Advanced React</h3>

          <p>
            Building reusable components, scalable applications, and modern
            user experiences with clean architecture.
          </p>
        </div>

        <div className="bubble ai">
          <BsRobot className="bubble-icon" />

          <h3>Generative AI</h3>

          <p>
            Exploring LLMs, RAG, prompt engineering, and AI-powered
            applications that create meaningful user experiences.
          </p>
        </div>

        <div className="bubble mendix">
          <img src={mendixLogo} alt="Mendix" className="bubble-icon" />

          <h3>Advanced Mendix</h3>

          <p>
            Expanding my low-code expertise by building enterprise
            applications, integrations, and workflow automation.
          </p>
        </div>

      </div>

      <div className="exploring-footer">
        <p>
          Curiosity drives my learning. Building turns that curiosity into experience.
        </p>
      </div>

    </section>
  );
}

export default AlwaysExploring;