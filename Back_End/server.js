import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/mongodb_connect.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";

// create express connection
const app = express();
const PORT = process.env.PORT || 5000; 

dotenv.config();

// middleware 
app.use(express.json()); // parse the incoming requests with JSON payloads from req.body
app.use(cookieParser()); 


//auth routes
app.use("/api/auth", authRoutes);

//message routes
app.use("/api/messages", messageRoutes);

//user routes
app.use("/api/users", userRoutes);

//app.get("/", (req, res) => {
    // root for http://localhost:5000/
   // res.send("Hello World!!");
//});

app.listen(5000, () => {
    connectToMongoDB(); 
    console.log(`Server Running on Port ${PORT}`)
});