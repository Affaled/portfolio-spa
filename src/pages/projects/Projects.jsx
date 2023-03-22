import ProjectView from "../../components/projectView/ProjectView";
import "./Projects.css";
import { projects } from "../../Data/ProjectsData";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Projects Page.</h1>
      <div className="text-group">
        <h2>My projects.</h2>
        <p>
          This is just a test project, therefore not a real portfolio and this
          tab does not have any real projects.
        </p>
      </div>
      <div className="project-group">
        {projects.map((project) => (
          <ProjectView
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}
