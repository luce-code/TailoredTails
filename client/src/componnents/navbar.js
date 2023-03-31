import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Kennel</Link>
      <Link to="/create-mydog">CreateMydog</Link>
      <Link to="/my-dog">MyDog</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};
