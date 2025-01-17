import Messages from "./messages.tsx"

const messageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
        <>
            {/* Header */}
            <div className="bg-slate-600 px-4 py-2 mb-2">
                <span className="label-text">To: </span>{" "}
                <span className="text-gray-800 font-bold">John Doe</span>
            </div>
            <Messages />
        </>
    </div>
  )
}

export default messageContainer