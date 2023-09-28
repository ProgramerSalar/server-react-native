import { User } from "../models/user.js";
import ErrorHandler from "../utils/error.js";
import jwt from "jsonwebtoken";
import { asyncError } from "./error.js";

export const isAuthenticated = asyncError(async (req, res, next) => {
  // const token = req.cookie.token
  //   console.log(req.cookies.token);

  const { token } = req.cookies; // store the cookies in token variable

  if (!token) return next(new ErrorHandler("Not Looged In", 401)); // if token is not valid get this error

  const decodeData = jwt.verify(token, process.env.JWT_SECRET); // else decode the token

  req.user = await User.findById(decodeData._id); // find the user using _id

  next();
});

export const isAdmin = asyncError(async (req, res, next) => {
  if (req.user.role !== "admin")
    return next(new ErrorHandler("Only Admin allowed", 401));
  next();
});
