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

      {!cookies.access_token ? (
        <>
          {/* <Link to="/register">Register</Link> */}
          <Link to="/login">login/Register</Link>
        </>
      ) : (
        <button onClick={handleLogout} style={{ backgroundColor: "white" }}>
          Logout
        </button>
      )}
    </div>
  );
};
