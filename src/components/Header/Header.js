import { Link } from "react-router-dom";
import "./Header.sass";
export default function Header() {
  return (
    <header>
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/about">
        About Me
      </Link>
      <Link className="header-link" to="/contact">
        Contact
      </Link>
    </header>
  );
}
