import express from "express";
import {
  changePassword,
  forgetpassword,
  getMyProfile,
  login,
  logout,
  resetpassword,
  updatePic,
  updateProfile,
} from "../controllers/user.js";
import { signup } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);
router.post("/signup", singleUpload, signup);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logout);

// update Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updatepic", isAuthenticated,singleUpload, updatePic);


// forget Password and Rest Password 
router.route("/forgetpassword").post(forgetpassword).put(resetpassword)

export default router;
