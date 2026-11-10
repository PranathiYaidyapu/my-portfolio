
import "../styles/FeaturedProject.css";
import healthcare from "../assets/projects/HealthCare.png";
function FeaturedProject() {
  return (
    <section className="featured-project">

      <div className="featured-left">

        <span className="featured-tag">
          ⭐ Featured Project
        </span>

        <h2>
          iChat - Healthcare Appointment &
          Medication Management System
        </h2>

        <p>
          Designed with a responsive interface and reusable React components to deliver a smooth user experience.
        </p>

        <div className="featured-tech">
          <span>React</span>
          <span>JavaScript</span>
          <span>Firebase</span>
        </div>

        <div className="featured-buttons">
          <a href="/projects" className="btn-primary">
            Explore Projects →
          </a>

          <a
            href="https://github.com/pranathiyaidyapu/iChat"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            Source Code
          </a>
        </div>

      </div>

      <div className="featured-right">
        <img
          src={healthcare}
          alt="Healthcare Project"
        />
      </div>

    </section>
  );
}

export default FeaturedProject;