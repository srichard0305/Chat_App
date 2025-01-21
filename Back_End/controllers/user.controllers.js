import User from "../models/users.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const currentUser = req.user._id;

        const allUsers = await User.find({_id: { $ne : currentUser}}).select("-password");

        res.status(201).json(allUsers);

    } catch (error) {
        console.log("Error in getUsersForSidebar controller", error.message);
        res.status(500).json({error: "Internal Server Error"}); 
    }
}