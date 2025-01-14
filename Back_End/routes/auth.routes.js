import express from "express";
import {signup} from "../controllers/auth.controllers.js";
import {login} from "../controllers/auth.controllers.js";
import {logout} from "../controllers/auth.controllers.js";


const router = express.Router();

//sign up route
router.post("/signup", signup);

//login route
router.post("/login", login);

//logout route
router.post("/logout", logout);

export default router; 