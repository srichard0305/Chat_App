import Conversation from "./conversation.tsx"
import useGetConversations from "../../hooks/useGetConversations.ts"

const conversations = () => {
  const {loading, conversations} = useGetConversations();

  return (
    <div className = "py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation 
        key={conversation._id}
        conversation = {conversation}
      />))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  )
}

export default conversations