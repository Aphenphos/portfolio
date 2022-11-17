import { Link } from "react-router-dom";
import "./Footer.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faLinkedin, faG);
export default function Footer() {
  return (
    <footer>
      <Link>
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </Link>
      <Link>
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </Link>
      <Link>
        <FontAwesomeIcon icon="fa-g" />
      </Link>
    </footer>
  );
}
