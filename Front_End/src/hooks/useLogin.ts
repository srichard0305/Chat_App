
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

//hook for connecting login page with backend 

const handleInputErrors = ({username, password} : {
    username: string;
    password: string;
}): boolean => {
    if(!username || !password){
        toast.error("All fields are required")
        return false;
    }
    return true;
};

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {setAuthUser} = useAuthContext();

    const login = async({username, password} : {
        username: string;
        password: string;
    }) => {
        
        const noErrors = handleInputErrors({username, password})
        if(!noErrors) return;
        
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({username, password})
            });

            if(!res.ok){
                throw new Error("Login Fail. Please try again later")
            } 

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            //set authUser in local storage
            localStorage.setItem("authUser", JSON.stringify(data))

            //update context of signed in user
            setAuthUser(data);
            
        } catch (error: any) {
            toast.error(error.message);
            setError(error.message || 'An unexpected error occurred');
        }finally{
            setLoading(false);
        }
    } 
    return { login, loading, error };
}

export default useLogin