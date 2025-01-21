import { useAuthContext } from "../../context/authContext";
import { getTime } from "../../utils/getTime";

interface MessageProps {
  message: {
    _id: string;
    senderId: string;
    receiverId: string;
    message: string;
    createdAt: string;
  };
}
const Message = ({message}: MessageProps) => {
  const {authUser} = useAuthContext();
  const fromLoggedInUser = message.senderId === authUser._id;

  const chatClass = fromLoggedInUser ? 'chat chat-end' : 'chat chat-start';
  const bubbleColour = fromLoggedInUser ? "bg-blue-600" : "bg-gray-700";

  const formattedDate = getTime(message.createdAt);

  return (
    <div className={`${chatClass}`}>
       <div className={`chat-bubble text-white ${bubbleColour}`}>
        {message.message}
       </div>
       <div className="chat-footer opacity-50 text-black text-xs gap-1 items-center">{formattedDate}</div>
    </div>
  )
}

export default Message