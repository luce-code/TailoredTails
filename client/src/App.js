import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreateMydog } from "./pages/create-mydog";
import { MyDog } from "./pages/my-dog";
import { Navbar } from "./componnents/navbar";
import jwt_decode from "jwt-decode";
// import RegisterPage from "./pages/register";

function App() {
  const [user, setUser] = useState({});
  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handlesignOut(event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() => {
    /*global google */
    google.accounts.id.initialize({
      client_id:
        "556953690836-kvr32pa382819a251f3dmv4fiv3hbta3.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {Object.keys(user).length !== 0 && (
        <button onClick={(e) => handlesignOut(e)}>Sign Out</button>
      )}

      {user && (
        <div>
          <h3>{user.name}</h3>
        </div>
      )}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path="/create-mydog" element={<CreateMydog />} />
          <Route path="/my-dog" element={<MyDog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
