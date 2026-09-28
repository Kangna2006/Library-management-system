import express from "express"
import {completeProfile, getProfile, getUsers, loginUser, registerAdmin, registerUser, updateProfile, verifyOtp} from "../controllers/authController.js"
import { authenticateToken, authorixeRoles } from "../middleware/authMiddleware.js";


const authRouter = express.Router();
authRouter.post("/register",registerUser);
authRouter.post("/verify-otp",verifyOtp);
authRouter.post("/complete-profile",completeProfile);

authRouter.post("/login",loginUser);
authRouter.post("/register-admin",registerAdmin);

//protected routes
authRouter.get("/me",authenticateToken, getProfile);
authRouter.put("/update-profile",authenticateToken, updateProfile);
authRouter.get("/users",authenticateToken,authorixeRoles("admin"),getUsers);
export default authRouter;