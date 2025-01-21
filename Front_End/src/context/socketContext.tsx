import { createContext, useEffect, useState, ReactNode, useContext } from "react";
import { useAuthContext } from "./authContext";
import {io, Socket} from 'socket.io-client';

/*--------------------------------------------------------------------------- */
interface SocketContextType {
    socket: Socket | null;
    onlineUsers: any[]; 
}

const socketContext = createContext<SocketContextType | null>(null);

/*--------------------------------------------------------------------------- */
export const useSocketContext = () => {
  const context = useContext(socketContext);
    if (!context) {
        throw new Error("useSocketContext must be used within a SocketContextProvider");
    }
    return context;
}

/*--------------------------------------------------------------------------- */
interface SocketContextProviderProps {
    children: ReactNode;
}

export const SocketContextProvider = ({children}: SocketContextProviderProps) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if (authUser) {
          const socket = io("http://localhost:5000", {
            query:{
              userId: authUser._id
            }

          });

          setSocket(socket);

          socket.on("getOnlineUsers", (users) => {
            setOnlineUsers(users);
          })
          
          return () => {socket.close();};
        }else{
            if(socket){
                socket.close()
                setSocket(null);
            }
        }
      }, [authUser]);


    return (
        <socketContext.Provider value={{ socket, onlineUsers }}>{children}</socketContext.Provider>
    )
}