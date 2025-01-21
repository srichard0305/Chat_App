import {Server} from "socket.io";
import http from 'http';
import express from 'express';

//create socket.io server onto of express server
const app = express();

// Create an HTTP server using Express
const server = http.createServer(app);

// Initialize a Socket.io server
const io = new Server(server, {
    cors:{
        origin: ["http://localhost:5173"],
        methods: ["GET", "POST"],
        credentials: true,
    }
});

const userSocketMap = new Map();

export const getReceiverSocketId = (reveiverId) => {
    return userSocketMap.get(reveiverId);
} 

//socket.on() is used to listen to events 
io.on('connection', (socket)=> {    
    console.log("user connected", socket.id )

    const userId = socket.handshake.query.userId;
    
    if(userId && userId !== "undefined"){
        userSocketMap.set(userId, socket.id);
    }

    //emit to all users that this user is online
    io.emit("getOnlineUsers", Array.from(userSocketMap.keys()));

    socket.on('disconnect', ()=> {
        console.log("user disconnected", socket.id )
        userSocketMap.forEach((value, key) => {
            if (value === socket.id) {
                userSocketMap.delete(key);
                console.log(`Removed user ${key} from userSocketMap`);
            }
        });

        // Emit the updated list of online users
        io.emit("getOnlineUsers", Array.from(userSocketMap.keys()));
    } )

})

export {app, io, server}