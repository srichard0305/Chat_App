import { createContext, useState, ReactNode, useContext } from "react";

/*--------------------------------------------------------------------------- */
interface AuthContextType{
    authUser: any,
    setAuthUser: (user: any) => void 
}

export const AuthContext = createContext<AuthContextType | null>(null);

/*--------------------------------------------------------------------------- */
//create hook, return object not an array
export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthContextProvider");
    }
     return context; 
}


/*--------------------------------------------------------------------------- */
interface AuthContextProviderProps{
    children: ReactNode
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        const storedUser = sessionStorage.getItem("authUser");
        return storedUser ? JSON.parse(storedUser) : null;
    })

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
          {children}
        </AuthContext.Provider>
      );
}
