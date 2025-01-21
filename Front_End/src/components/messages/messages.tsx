import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import Message from "./message.tsx"
import useListenMessages from "../../hooks/useListenMessages.ts";

const messages = () => {
  const {messages, loading} = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  //scroll to last message 
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">

      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message  message={message} />
        </div>
      ))}

      {!loading && messages.length === 0 && (<p className="text-center text-gray-800">Send a Message to Start Conversation</p>) }
      {loading && <span className="loading loading-spinner"></span>}
    </div>
  )
}

export default messages