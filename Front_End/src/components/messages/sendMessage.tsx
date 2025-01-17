import { BsSend } from "react-icons/bs";

const sendMessage = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" placeholder="Send Message" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-white"></input>
            <button type = "submit" className="absolute inset-y-0 end-0 flex items-center pe-3 "><BsSend /></button>
        </div>
    </form>
  )
}

export default sendMessage