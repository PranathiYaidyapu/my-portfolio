import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import "../styles/Project.css";
function Projects() {
	  return (
		<section className="projects">
  <h2>Featured Projects</h2>

  <div className="project-grid">
    {projects.map((project) => (
  <ProjectCard
    key={project.id}
    title={project.title}
    technologies={project.technologies}
    description={project.description}
    image={project.image}
    github={project.github}
    live={project.live}
  />
))}
  </div>
</section>
    );
}

export default Projects;