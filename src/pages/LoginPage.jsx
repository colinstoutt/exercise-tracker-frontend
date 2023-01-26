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
    <div scroll="no" className="auth">
      <form className="auth-form" onSubmit={handleSubmit}>
        <legend className="auth-form__title">Sign In</legend>
        <label className="auth-form__label" htmlFor="email">
          Email
        </label>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          name="email"
          onChange={handleChange}
          className="auth-form__input"
        />
        <br />

        <label className="auth-form__label" htmlFor="password">
          Password
        </label>
        <br />
        <input
          type="password"
          placeholder="Password"
          value={formState.password}
          name="password"
          onChange={handleChange}
          className="auth-form__input"
        />
        <div className="form-controls">
          <button className="auth-form__button">Sign In</button>
        </div>
        <p className="auth-form__Link">
          Don't have an account?{" "}
          <Link className="auth-form__Link-btn" to="/signup">
            Create
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
