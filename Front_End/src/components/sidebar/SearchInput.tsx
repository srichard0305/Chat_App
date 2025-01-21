import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

interface searchInput{
  searchText: string;
}

interface Conversation {
  conversation: {
    _id: string;
    username: string;
  }
}

const searchInput = () => {
  const [inputs, setInputs] = useState<searchInput>({searchText: ""});
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(inputs.searchText === "") return;
    if(inputs.searchText.length < 3){
      return toast.error("Search must be at least 3 characters long");
    }

    const conversation = conversations.find((c) => c.username.toLowerCase().includes(inputs.searchText.toLowerCase()));

    if(conversation && conversation._id !== ""){
      setSelectedConversation(conversation)
      setInputs({searchText: ""});
    } else {
      toast.error("No matching conversation found");
    }

  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
        ...prevState,
        [name]: value
     }));
}

  return (
    <form className='flex items-center gap-2 p-2' onSubmit={handleSubmit}>
        <input type = "text" name="searchText" placeholder='Search' className = "input input-bordered rounded-full"
          value = {inputs.searchText}
          onChange={handleChange}
        />
        <button type = "submit" className = "btn btn-circle bg-sky-900 text-white">
          <CiSearch />
        </button>
    </form>
  )
}

export default searchInput