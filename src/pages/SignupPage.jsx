import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../services/signupService";

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
      <form onSubmit={handleSubmit}>
        <legend>Sign Up</legend>
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          name="name"
          onChange={handleChange}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={formState.passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
        <div className="form-controls">
          <button disabled={!validForm()}>Sign Up</button>
        </div>
        <Link to="/login">Sign In</Link>
      </form>
      <p>{messageState.msg}</p>
    </div>
  );
}

export default SignupPage;
