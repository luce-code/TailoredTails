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
      <Link to="/">Kennel</Link>
      <Link to="/create-mydog">CreateMydog</Link>
      <Link to="/my-dog">MyDog</Link>

      <Link to="/register">Register</Link>
      {!cookies.access_token ? (
        <Link to="/login">Login</Link>
      ) : (
        <button onClick={handleLogout} style={{ backgroundColor: "red" }}>
          Logout
        </button>
      )}
    </div>
  );
};
