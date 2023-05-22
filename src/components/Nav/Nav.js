import { NavLink } from "react-router-dom";
import "./Nav.sass";
import resume from "../files/MaxwillWintersResume.pdf";
export default function Nav() {
  return (
    <>
      <div id="title-container">
        <h1>Maxwill Winters</h1>
        <h2>Software Engineer</h2>
      </div>
      <div id="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
        <a href={resume}>Resume</a>
      </div>
    </>
  );
}
