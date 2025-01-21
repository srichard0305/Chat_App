
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext';

//hook for connecting signup page with backend 

interface User{
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
}

const handleInputErrors = ({fullName, username, password, confirmPassword} : User): boolean => {
    if(!fullName || !username || !password || !confirmPassword){
        toast.error("All fields are required")
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("Passwords do not match")
        return false;
    }
    if (password.length < 6) {
        toast.error("Password must be at least 8 characters")
        return false;
    }
    return true;
};

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const {setAuthUser} = useAuthContext();

    const signup = async({fullName, username, password, confirmPassword} : User) => {
        
        const noErrors = handleInputErrors({fullName, username, password, confirmPassword})
        if(!noErrors) return;
        
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({fullName, username, password, confirmPassword})
            });

            if(!res.ok){
                throw new Error("Sign Up Fail. Please try again later")
            } 

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }

            //set authUser in local storage
            sessionStorage.setItem("authUser", JSON.stringify(data))

            //update context of signed in user
            setAuthUser(data);
            
        } catch (error: any) {
            toast.error(error.message);
            setError(error.message || 'An unexpected error occurred');
        }finally{
            setLoading(false);
        }
    } 
    return { signup, loading, error };
}

export default useSignup

