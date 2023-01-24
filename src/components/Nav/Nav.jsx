import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav({ user, handleLogout }) {
  return !user ? (
    <nav className="nav">
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </nav>
  ) : (
    <nav className="nav">
      <h1>Welcome {user.name}, </h1>
      <Link to="/">Home</Link>
      <Link to="" onClick={handleLogout}>
        Log Out
      </Link>
    </nav>
  );
}

export default Nav;
