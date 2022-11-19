
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./Info.sass";
library.add(faGithub, faLinkedin, faG);
export default function Info() {
  return (
    <>
    <div id='info-links'>
      <Link className="Link">
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </Link>
      <Link className="Link">
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </Link>
      <Link className="Link">
        <FontAwesomeIcon icon="fa-g" />
      </Link>
      </div>
      </>
  );
}
