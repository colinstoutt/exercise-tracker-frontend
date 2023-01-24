import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/signupService";
import "./auth.scss";

function LoginPage({ handleSignupAndLogIn, updateMessage }) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormState((prevState) => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(formState);
      handleSignupAndLogIn();
      navigate("/", { replace: true });
    } catch (err) {
      // Use something other than an alert in production code
      alert("Invalid Credentials!");
    }
  }

  return (
    <div className="auth-form">
      <form className="login" onSubmit={handleSubmit}>
        <legend>Sign In</legend>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          name="email"
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={formState.password}
          name="password"
          onChange={handleChange}
        />
        <div className="form-controls">
          <button>Sign In</button>
        </div>
        <p>
          New to this app?{" "}
          <Link className="Link" to="/signup">
            Sign Up for free!
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
