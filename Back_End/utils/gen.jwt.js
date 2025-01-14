import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    //payload, secret key for sig, and expires in 15 days
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //same as expiresIn in ms
        httpOnly: true, // prevent XSS
        sameSite: "strict", // CRSF attacks cross-site requests forgery attacks  
        secure: process.env.MODE_ENV !== "development" 
    });
};

export default generateTokenAndSetCookie; 