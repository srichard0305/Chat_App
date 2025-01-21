import Sidebar from '../../components/sidebar/sidebar.tsx'
import MessageContainer from '../../components/messages/messageContainer.tsx'

const home = () => {
  return (
    <div className = "flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar/> 
      <MessageContainer />
    </div>
  )
}

export default home