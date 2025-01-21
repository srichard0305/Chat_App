import { useEffect } from "react";
import { useSocketContext } from "../context/socketContext"
import useConversation from "../zustand/useConversation";

const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();  

    useEffect(() => {
        // Register the event listener
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        // Cleanup the event listener on unmount or dependencies change
        return () => {
            socket?.off("newMessage");
        }
    }, [socket, setMessages, messages]);
}

export default useListenMessages