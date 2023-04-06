// import { useState } from "react";
// import axios from "axios";

// const RegisterPage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:3003/auth/register", {
//         username,
//         password,
//       });
//       alert("Registration completed! Please login to continue.");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form onSubmit={onSubmit}>
//         <h2>Register</h2>
//         <div className="form-group">
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={(event) => setConfirmPassword(event.target.value)}
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegisterPage;
