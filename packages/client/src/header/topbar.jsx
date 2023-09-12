import { Link } from "react-router-dom";
import * as S from "./topbar.styled";

const ToBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link variant="gradient3" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ToBar;
