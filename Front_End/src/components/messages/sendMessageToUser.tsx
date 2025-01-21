import { BsSend } from "react-icons/bs";
import { useState } from 'react'
import useSendMessage from "../../hooks/useSendMessage";

interface Message{
  message: string;
}

const sendMessageToUser = () => {

  const [messageToSend , setMessage] = useState<Message>({message: ""})
  const {loading, sendMessage} = useSendMessage()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(messageToSend.message === "") return;
    await sendMessage(messageToSend);
    setMessage({message: ""});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMessage((prevState) => ({
        ...prevState,
        [name]: value,
    }));
}

  return (  
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" name="message" placeholder="Send Message" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white"
              value={messageToSend.message}
              onChange={handleChange}
            />
            <button type = "submit" className="absolute inset-y-0 end-0 flex items-center pe-3 ">
                {!loading? <BsSend /> : <span className="loading loading-spinner"></span>}
            </button>
        </div>
    </form>
  )
}

export default sendMessageToUser