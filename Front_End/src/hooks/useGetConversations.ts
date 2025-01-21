import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

interface Conversation {
    _id: string;
    username: string; 
    profilepic: string;
    messages: Array<{ _id: string; text: string }>; 
}

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState<Conversation[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/users");
                
                if(!res.ok){
                    throw new Error("Getting Conversations Failed. Please try again later")
                } 

                const data = await res.json();

                if(data.error){
                    throw new Error(data.error)
                }

                setConversations(data);

            } catch (error: any) {
                toast.error(error.message);
                setError(error.message || 'An unexpected error occurred');
            }finally{
                setLoading(false);
            }
        }

        getConversations();
    }, [])

    return { loading, conversations, error};
}
export default useGetConversations