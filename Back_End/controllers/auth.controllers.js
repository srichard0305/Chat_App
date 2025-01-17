import User from "../models/users.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/gen.jwt.js";

export const signup = async (req, res) => {
    try {
        //get info from user
        const {fullName, username, password, confirmPassword} = req.body;

        if(password < 8){
            return res.status(400).json({error:"Password must at least 8 characters"});
        }

        //check if passwords entered are the same
        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords do not match"});
        }

        const user = await User.findOne({username});

        if(user){ //if user already exists return error message
            return res.status(400).json({error:"Username already exits"});
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create user
        const newUser = new User({
            fullName:fullName,
            username:username,
            password:hashedPassword,
            profilepic:"defualt_profilepic.jpg"
        });

        if(newUser){

            //create JWT
            generateTokenAndSetCookie(newUser._id, res);

            await newUser.save();

            res.status(201).json({
              _id:newUser._id,
              username:newUser.username,
              profilepic:newUser.profilepic
            });

        }

       
    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"});       
    }
}

export const login = async (req, res) => {
    try {
        //get info from user
        const {username, password} = req.body;

        //find user in db
        const user = await User.findOne({username});

        //verify password
        const correctPassword = await bcrypt.compare(password, user?.password || "");

        if(!user || !correctPassword){
            return res.status(400).json({error: "Invalid Username or Password"});
        }

        //gen jwt
        generateTokenAndSetCookie(user._id, res);

        res.status(201).json({
            _id:user._id,
            username:user.username,
            profilepic:user.profilepic
          })
        
    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"}); 
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({error: "Logged Out Successfully"});

    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({error: "Internal Server Error"}); 
    }
}