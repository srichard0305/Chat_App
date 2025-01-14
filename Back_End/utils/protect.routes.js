import jwt from "jsonwebtoken";
import User from "../models/users.model.js";

const protectRoute = async (req, res, next) => {
    try {
        //get jwt from cookies
        const token = req.cookies.jwt; 

        if(!token){
            return res.status(401).json({error: "Unauthorized: No Token Provided"});
        }

        //verfiy the correct token
        const decode = jwt.verify(token, process.env.JWT_SECRET);

        if(!decode){
            return res.status(401).json({error: "Unauthorized: Invalid Token"});
        }

        const user = await User.findById(decode.userId).select("-password");

        if(!user){
            return res.status(401).json({error: "User not found"});
        }

        req.user = user;

        next();

    } catch (error) {
        console.log("Error in protect route utils", error.message);
        res.status(500).json({error: "Internal Server Error"});  
    }
};

export default protectRoute;