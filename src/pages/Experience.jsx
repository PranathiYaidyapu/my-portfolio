import experience from "../data/experience";
import "../styles/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="section-title">
        <h2>My Journey</h2>
        <p>Education, internships, and professional experience that have shaped my career.</p>
      </div>

      <div className="timeline">

        {experience.map((item) => (

          <div className="timeline-item" key={item.id}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-duration">
                {item.duration}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.organization}</h4>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;