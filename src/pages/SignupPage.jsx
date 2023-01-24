import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/signupService";
import "./auth.scss";

function SignupPage(props) {
  const [messageState, setMessageState] = useState({
    msg: "",
  });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const navigate = useNavigate();

  function updateMessage(msg) {
    setMessageState({ message: msg });
  }

  function handleChange(e) {
    updateMessage("");
    setFormState((prevState) => ({
      // Using ES2015 Computed Property Names
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      signup(formState);
      props.handleSignupAndLogIn();
      navigate("/login", { replace: true });
    } catch (err) {
      // Invalid user data (probably duplicate email)
      updateMessage(err.message);
    }
  }

  // returns true only if all the required fields are complete and password is confirmed
  function validForm() {
    return (
      formState.name &&
      formState.email &&
      formState.password === formState.passwordConf
    );
  }

  return (
    <div className="auth-form">
      <form className="signup" onSubmit={handleSubmit}>
        <legend>Sign Up</legend>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          value={formState.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          value={formState.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          value={formState.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="confPassword">Confirm Password</label>
        <br />
        <input
          type="password"
          value={formState.passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
        <br />

        <div className="form-controls">
          <button disabled={!validForm()}>Sign Up</button>
        </div>
        <p>
          Already have an account?&nbsp;
          <Link className="Link" to="/login">
            Sign in
          </Link>
        </p>
      </form>
      <p>{messageState.msg}</p>
    </div>
  );
}

export default SignupPage;
