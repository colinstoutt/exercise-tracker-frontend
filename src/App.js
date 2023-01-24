import "./App.scss";
import { useState } from "react";
import { getUserFromToken } from "./services/tokenService";
import { logout } from "./services/signupService";

import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App(props) {
  const [userState, setUserState] = useState({ user: getUserFromToken() });

  function handleSignupAndLogIn() {
    let user = getUserFromToken();
    console.log("****************" + user);
    setUserState({ user: getUserFromToken() });
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
  }

  return (
    <div className="App">
      <Nav user={userState.user} handleLogout={handleLogout} />
      <Main user={userState.user} handleSignupAndLogIn={handleSignupAndLogIn} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
