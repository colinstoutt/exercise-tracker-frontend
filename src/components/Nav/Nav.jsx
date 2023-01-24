import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav({ user, handleLogout }) {
  return !user ? (
    <nav className="nav"></nav>
  ) : (
    <nav className="nav">
      <h1>Welcome {user.name}, </h1>
      <Link to="/">Home</Link>
      <Link to="" onClick={handleLogout}>
        Sign Out
      </Link>
    </nav>
  );
}

export default Nav;
