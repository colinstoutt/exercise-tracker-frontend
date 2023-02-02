import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav({ user, handleLogout }) {
  return !user ? (
    <nav className="nav"></nav>
  ) : (
    <nav className="nav">
      <h1 className="nav__name">{user.name.split(" ")[0]}</h1>
      <Link className="nav__logout" onClick={handleLogout}>
        Sign Out
      </Link>
    </nav>
  );
}

export default Nav;
