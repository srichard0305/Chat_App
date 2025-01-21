import { create } from "zustand";

interface Message{
    _id: string;
    senderId: string;
    receiverId: string;
    message: string;
    createdAt: string;
}

interface ConversationState {
    selectedConversation: {
        _id: string;
        username: string;    
    } 
    messages: Message[]; 
}

interface ConversationActions{
    setSelectedConversation: (selectedConversation: {_id: string, username: string} ) => void;
    setMessages: (messages: Message[]) => void;
    reset: () => void;
}

const resetState: ConversationState ={
    selectedConversation: {
        _id: "",
        username: "",    
    },
    messages: [],
}

    
const useConversation = create<ConversationState & ConversationActions>((set) => ({
    selectedConversation: {_id: "", username: ""},
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages:  [{_id: "", senderId: "", receiverId: "", message: "", createdAt: ""}],
    setMessages: (messages) => set({messages}),
    reset: () => {
        set(resetState)
    },
}))

export default useConversation;