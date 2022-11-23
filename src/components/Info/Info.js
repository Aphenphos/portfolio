
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Info.sass";
library.add(faGithub, faLinkedin, faG);
export default function Info() {
  return (
    <>
    <div id='info-links'>
      <a href="https://www.linkedin.com/in/maxwill-winters/">
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>
      <a href='https://github.com/Aphenphos'>
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
      <a href='mailto: MaxwillWinters@gmail.com'>
        <FontAwesomeIcon icon="fa-g" />
      </a>
      </div>
      </>
  );
}
