import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/Logo.css";
import "../styles/Resume.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-box">PY</div>
        <span>Pranathi</span>
        </div>
        <ul className="nav-links">
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/projects">Projects</NavLink></li>
  <li><NavLink to="/experience">Experience</NavLink></li>
  <li><NavLink to="/skills">Skills</NavLink></li>
  <li><NavLink to="/certifications">Certifications</NavLink></li>
  <li><NavLink to="/contact">Contact</NavLink></li>
  <li>
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-btn"
    >
      Resume
    </a>
  </li>
</ul>
    </nav>
  );
}
export default Navbar;