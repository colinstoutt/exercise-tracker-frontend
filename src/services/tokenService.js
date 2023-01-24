// ALL TOKEN HELPER FUNCTIONS aka "SERVICES"

// SETS TOKEN IN LOCAL STORAGE
function setToken(token) {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}

// EXTRACT LOGGED IN USER DATA FROM TOKEN
function getUserFromToken() {
  const token = getToken();
  const user = token ? JSON.parse(atob(token.split(".")[1])).user : null;
  console.log(user);
  return user;
}

// GETS TOKEN FROM LOCAL STORAGE
function getToken() {
  let token = localStorage.getItem("token");
  if (token) {
    // Check if expired, remove if it is
    let expired = isTokenExpired(token);
    if (expired) {
      localStorage.removeItem("token");
      token = null;
    }
  }
  return token;
}

// CHECK IF CURRENT TOKEN IS EXPIRED
function isTokenExpired(token) {
  const payload = JSON.parse(atob(token.split(".")[1]));
  // JWT's expiration is expressed in seconds, not milliseconds, so convert
  return payload.exp < Date.now() / 1000;
}

// REMOVES TOKEN IN LOCAL STORAGE
function removeToken() {
  localStorage.removeItem("token");
}

export { setToken, getToken, removeToken, getUserFromToken, isTokenExpired };
