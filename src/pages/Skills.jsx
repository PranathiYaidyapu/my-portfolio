import skills from "../data/skills";
import "../styles/Skills.css";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: skills.filter((skill) =>
        ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "GraphQL"].includes(
          skill.name
        )
      ),
    },

    {
      title: "Backend",
      skills: skills.filter((skill) =>
        ["Python", "Java", "Spring Boot", "Django", "Flask"].includes(
          skill.name
        )
      ),
    },

    {
      title: "Cloud & DevOps",
      skills: skills.filter((skill) =>
        ["AWS", "Docker", "Jenkins", "Git", "GitHub"].includes(skill.name)
      ),
    },

    {
      title: "Databases",
      skills: skills.filter((skill) =>
        ["PostgreSQL", "MySQL", "MongoDB"].includes(skill.name)
      ),
    },
  ];

  return (
    <section className="skills" id="skills">

      <div className="section-title">
        <h2>Skills</h2>

        <p>
          Technologies and tools I use to build, deploy, and maintain software.
        </p>
      </div>

      <div className="skills-categories">

        {categories.map((category) => (

          <div className="skills-category" key={category.title}>

            <h3>{category.title}</h3>

            <div className="skills-grid">

              {category.skills.map((skill) => {

                const Icon = skill.icon;

                return (
                  <div className="skill-card" key={skill.name}>

                    <Icon
                      size={45}
                      color={skill.color}
                    />

                    <h4>{skill.name}</h4>

                  </div>
                );

              })}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;