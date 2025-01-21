import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContext.tsx';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setAuthUser } = useAuthContext();

  const logout = async () =>{
    setLoading(true);
    setError(null);
    try {
        const res = await fetch("/api/auth/logout", {
            method: "POST",
            headers: {"Content-type": "application/json"},
        });

        if(!res.ok){
            throw new Error("Log out Fail. Please try again later")
        } 

        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }

        sessionStorage.removeItem("authUser");
        setAuthUser(null);
        toast.success("Successfully logged out!");

        } catch (error: any) {
            toast.error(error.message);
            setError(error.message || 'An unexpected error occurred');
        }finally{
            setLoading(false);
        }
    } 
    return {loading, logout, error}
}

export default useLogout