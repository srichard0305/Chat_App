import mongoose from "mongoose";

const connectToMongoDB = async () => {

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Succesfully connected to database");   
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
    }
};

export default connectToMongoDB;