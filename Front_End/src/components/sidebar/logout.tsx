import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";

const Logout = () => {

  const {loading, logout} = useLogout();

  const handleLogout = () =>  {
    logout();
  }

  return (
    <div className="mt-auto ">
      {!loading ? (
        <CiLogout className="w-6 h-6 text-black cursor-pointer" 
        onClick={handleLogout}
      />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
        
    </div>
  )
}

export default Logout