import express from "express";
import protectRoute from "../utils/protect.routes.js";
import {getUsersForSidebar} from "../controllers/user.controllers.js";

const router = express.Router();

//get users from contact list
router.get("/", protectRoute, getUsersForSidebar);


export default router; 