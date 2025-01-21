import { useSocketContext } from "../../context/socketContext";
import useConversation from "../../zustand/useConversation";

interface ConversationProps {
    conversation: {
      _id: string;
      username: string;
      profilepic: string;
      messages: Array<{ _id: string; text: string }>;
    };
}

const conversation = ({ conversation }: ConversationProps) => {

    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id); 

  return (
    <>
        <div className = {`flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer
                ${isSelected? "bg-sky-500" : ""}
            
            `}
                onClick={() => setSelectedConversation(conversation)}
            >
            <div className ={`avatar ${isOnline ? "online" : ""}`} >
                <div className = "w-12 rounded-full">
                    <img src={conversation.profilepic} alt="user avatar" />
                    
                </div>
            </div>
            <div className = "flex p-2">
                <p className = "text-bold text-gray-700">
                    {conversation.username} 
                </p>
            </div>
        </div>

        <div className = "divider my-0 py-0 h-1"/>
    </>
  )
}

export default conversation