import { CiSearch } from "react-icons/ci";

const searchInput = () => {
  return (
    <form className='flex items-center gap-2 p-2'>
        <input type = "text" placeholder='Search' className = "input input-bordered rounded-full"></input>
        <button type = "submit" className = "btn btn-circle bg-sky-900 text-white">
          <CiSearch />
        </button>
    </form>
  )
}

export default searchInput