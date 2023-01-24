import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/signupService";

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
      <form onSubmit={handleSubmit}>
        <legend>Log In</legend>
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={formState.password}
          name="password"
          onChange={handleChange}
        />
        <div className="form-controls">
          <button>Log In</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
