import { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';


const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {messages, setMessages, selectedConversation} = useConversation();
    
    useEffect(() =>  {
        const getMessages = async () => {

            setLoading(true)
            try {
                const res = await fetch(`api/messages/${selectedConversation._id}`);

                if(!res.ok){
                    throw new Error("Get Messages Failed. Please try again later")
                } 

                const data = await res.json();
                if(data.error){
                    throw new Error(data.error)
                }

                setMessages(data);

            } catch (error: any) {
                toast.error(error.message);
                setError(error.message || 'An unexpected error occurred');
            }finally{
                setLoading(false);
            }
        }
        if(selectedConversation?._id)getMessages();

    }, [selectedConversation?._id, setMessages])

    return {loading, messages, error}
}

export default useGetMessages