import { projects } from "../data";
import Project from "../components/Project/Project";
import "./Projects.sass";
export default function Projects() {
  return (
    <>
      <div id="projects-container">
        {projects.map((p, index) => (
          <Project
            key={index}
            name={p.name}
            githubLink={p.githubLink}
            deployLink={p.deployLink}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
