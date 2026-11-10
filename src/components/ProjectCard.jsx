function ProjectCard({
  title,
  technologies,
  description,
  image,
  github,
}) {
  return (
    <div className="project-card">

      {image && (
        <div className="project-image">
          <img src={`/projects/${image}`} alt={title} />
        </div>
      )}

      <div className="project-content">

        <h3>{title}</h3>

        <div className="tech-stack">
          {technologies.map((tech) => (
            <span className="tech-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <p>{description}</p>

        <div className="project-buttons">

         <a
  className="github-btn"
  href={github}
  target="_blank"
  rel="noreferrer"
>
  GitHub ↗
</a>


        </div>

      </div>

    </div>
  );
}

export default ProjectCard;