import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["access_token"]);

  const handleLogout = () => {
    removeCookies("access_token");
    console.log("Logout clicked"); // add this line
  };

  return (
    <div className="navbar">
      {!cookies.access_token ? (
        <div className="navbar__main">
          <div className="navbar-left">
            <Link className="navbar__home" to="/"><img className="navbar__logo" src="https://i.imgur.com/c6GK0kY.png" alt="tailored tails logo" /></Link>
            <Link className="navbar__button" to="/">Features</Link>
            <Link className="navbar__button" to="/">Pricing</Link>
            <Link className="navbar__button" to="/">Community</Link>
            <Link className="navbar__button" to="/">Support</Link>
          </div>
          <div className="navbar-right">
            <Link className="navbar__button" to="/login">Login</Link>
            <Link className="navbar__button" to="/login">Register</Link>
          </div>
        </div>

      ) : (
        <div className="navbar__main">
          <div className="navbar-left">
          <Link className="navbar__home" to="/"><img className="navbar__logo" src="https://i.imgur.com/c6GK0kY.png" alt="tailored tails logo" /></Link>
            <Link className="navbar__button" to="/">Kennel</Link>
            <Link className="navbar__button" to="/">Routine</Link>
            <Link className="navbar__button" to="/">Calendar</Link>
            <Link className="navbar__button" to="/">Support</Link>
          </div>
          <div className="navbar-right">
            <Link className="navbar__button" to="/login">Login</Link>
            <Link to="/" onClick={handleLogout} className="navbar__button">Logout</Link>
          </div>
        </div>
      )}
    </div>
  );
};
