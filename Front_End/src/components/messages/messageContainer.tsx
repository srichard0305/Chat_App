import Messages from "./messages.tsx"
import SendMessage from "./sendMessage.tsx"
import { TiMessage } from "react-icons/ti";

const messageContainer = () => {
  const chatNotSelected = true;

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {chatNotSelected ? (
        noChatSelected()
      ) :(
        <> 
            {/* Header */}
            <div className="bg-blue-700 px-4 py-2 mb-2">
                <span className="label-text">To: </span>{" "}
                <span className="text-white font-bold">John Doe</span>
            </div>
            <Messages />
            <SendMessage />
        </>
      )
    }
    </div>
  )
}

export default messageContainer

const noChatSelected = () =>{
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-600 font-semibold flex flex-col items-center gap-2">
        <p>Welcome</p>
        <p>Select a chat to start messaging</p>
        <TiMessage />
      </div>

    </div>
  );
};