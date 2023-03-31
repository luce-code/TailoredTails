// import { useState } from "react";
// import axios from "axios";

// export const Auth = () => {
//   return (
//     <div className="auth">
//       <Login />
//       <Register />
//     </div>
//   );
// };

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:3003/auth/login", {
//         username,
//         password,
//       });
//       alert("Login successful!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Form
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       label="Login"
//       onSubmit={onSubmit}
//       confirmField={false}
//       buttonLabel="Login"
//     />
//   );
// };

// const Register = () => {
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
//       alert("Registration Completed! Now Login.");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Form
//       username={username}
//       setUsername={setUsername}
//       password={password}
//       setPassword={setPassword}
//       confirmPassword={confirmPassword}
//       setConfirmPassword={setConfirmPassword}
//       label="Register"
//       onSubmit={onSubmit}
//       confirmField={true}
//       buttonLabel="Register"
//     />
//   );
// };

// const Form = ({
//   username,
//   setUsername,
//   password,
//   setPassword,
//   confirmPassword,
//   setConfirmPassword,
//   label,
//   onSubmit,
//   confirmField,
//   buttonLabel,
// }) => {
//   return (
//     <div className="auth-container">
//       <form onSubmit={onSubmit}>
//         <h2> {label} </h2>
//         <div className="form-group">
//           <label htmlFor="username"> Username: </label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password"> Password: </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </div>
//         {confirmField && (
//           <div className="form-group">
//             <label htmlFor="confirmPassword"> Confirm Password: </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               value={confirmPassword}
//               onChange={(event) => setConfirmPassword(event.target.value)}
//             />
//           </div>
//         )}
//         <button type="submit">{buttonLabel}</button>
//       </form>
//     </div>
//   );
// };
