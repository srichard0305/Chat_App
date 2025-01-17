
import { useState } from 'react'
import toast from 'react-hot-toast';

const handleInputErrors = ({fullName, username, password, confirmPassword} : {
    fullName: string;
    username: string;
    password: string;
    confirmPassword: string;
}): boolean => {
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

    const signup = async({fullName, username, password, confirmPassword} : {
        fullName: string;
        username: string;
        password: string;
        confirmPassword: string;
    }) => {
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
            console.log('Signup successful:', data);
            
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

