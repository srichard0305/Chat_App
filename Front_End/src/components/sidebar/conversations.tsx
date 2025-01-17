import Conversation from "./conversation.tsx"

const conversations = () => {
  return (
    <div className = "py-2 flex flex-col overflow-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default conversations