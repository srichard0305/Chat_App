import Conversation from "../models/conversation.model.js";
import Message from "../models/messages.model.js";

export const sendMessage = async (req, res) => {
    try {
        
        const {message} = req.body; 
        const {id:receiverId} = req.params; // grab id from url
        const senderId = req.user._id; 

        let conversation =  await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });

        //create conversation if it is null
        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId: senderId,
            receiverId: receiverId,
            message: message
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //save message and conversation
        // try await Promise.all(conversation.save(), newMessage.save()) was causing error and going to catch block?
        await conversation.save();
        await newMessage.save();

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller", error.message);
        res.status(500).json({error: "Internal Server Error"});  
    }
};

export const getMessages = async (req, res) => {

    try {
        const {id:userToChat} = req.params;
        const senderId = req.user._id; 

        const conversation =  await Conversation.findOne({
            participants: {$all: [senderId, userToChat]}
        }).populate("messages"); // populate the messages array with the actually messages from messages collection 

        if(!conversation){
            res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(201).json(messages);

    } catch (error) {
        console.log("Error in getMessage controller", error.message);
        res.status(500).json({error: "Internal Server Error"});  
    }
} 