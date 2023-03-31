import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Auth } from "./pages/auth";
import { CreateMydog } from "./pages/create-mydog";
import { MyDog } from "./pages/my-dog";
import { Navbar } from "./componnents/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/create-mydog" element={<CreateMydog />} />
          <Route path="/my-dog" element={<MyDog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
