import SearchInput from './SearchInput.tsx'
import Conversations from "./conversations.tsx"
import Logout from "./logout.tsx"

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 p-4 flex flex-col'>
        <SearchInput />
        <div className = "divider divider-primary p-4"></div>
        <Conversations/>
        <Logout />
    </div>
  )
}

export default Sidebar