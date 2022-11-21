import { projects } from "../data";
import Project from "../components/Project/Project";
import './Projects.sass'
export default function Projects() {
    return (
    <>
    <div id="projects-container">
    {projects.map((p, index) => (
      <Project key={index} name={p.name} link={p.link} description={p.description} index={index}/>
    ))}
  </div>
  </>
    )
}