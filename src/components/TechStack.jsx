import {
  FaReact,
  FaPython,
  FaJava,
  FaDatabase,
} from "react-icons/fa";

import { SiJavascript } from "react-icons/si";
import mendixLogo from "../assets/icons/mendix.jpeg";
import "../styles/TechStack.css";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaDatabase />, name: "SQL" },
  {
  icon: <img src={mendixLogo} alt="Mendix" className="tech-icon" />,
  name: "Mendix",
}
];

function TechStack() {
  return (
    <div className="tech-stack">
      {skills.map((skill) => (
        <div className="tech-pill" key={skill.name}>
          {skill.icon}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TechStack;