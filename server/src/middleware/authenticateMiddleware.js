// import jwt from "jsonwebtoken";
// import config from "../config/config.js";
// import { UserModel } from "../models/Users.js";

// const authenticateMiddleware = async (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1];
//     const decodedToken = jwt.verify(token, config.jwtSecret);
//     const user = await UserModel.findById(decodedToken.id).select("-password");
//     req.user = user;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Authentication failed" });
//   }
// };

// export default authenticateMiddleware;
