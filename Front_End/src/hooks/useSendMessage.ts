import {useState } from 'react'
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

interface Message{
    message: string;
}

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async ({message}: Message) => {
        setLoading(true);
        try {
            const res = await fetch(`api/messages/sent/${selectedConversation._id}`, {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({message})
            });

            if(!res.ok){
                throw new Error("Send Message Failed. Please try again later")
            } 

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            setMessages([...messages, data]);

        } catch (error: any) {
            toast.error(error.message);
            setError(error.message || 'An unexpected error occurred');
        }finally{
            setLoading(false);
        }

       
    }
    return {loading, sendMessage, error}

}

export default useSendMessage