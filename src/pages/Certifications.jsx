import certifications from "../data/certifications";
import "../styles/Certifications.css";

function Certifications() {
  return (
    <section className="certifications" id="certifications">
      <div className="section-title">
        <h2>Certifications</h2>
        <p>Professional certifications and continuous learning.</p>
      </div>

      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;