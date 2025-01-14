import express from "express";
import {sendMessage} from "../controllers/message.controllers.js";
import {getMessages} from "../controllers/message.controllers.js";
import protectRoute from "../utils/protect.routes.js";

const router = express.Router();

//message sent route
router.post("/sent/:id", protectRoute, sendMessage);

//get messages between users
router.get("/:id", protectRoute, getMessages);


export default router; 