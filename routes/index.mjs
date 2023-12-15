import express from "express";
const router = express.Router();
import {
  SignupController,
  LoginController,
} from "../controllers/authController.mjs";
import authMiddleware from "../middlewares/index.mjs";

// auth routes
router.post("/signup", SignupController);
router.post("/login", LoginController);

export default router;
