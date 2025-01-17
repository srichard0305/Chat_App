
const conversation = () => {
  return (
    <>
        <div className = "flex gap-2 items-center hover:bg-sky-700 rounded p-2 py-1 cursor-pointer">
            <div className = "avatar online ">
                <div className = "w-12 rounded-full">
                    <img src="default_profilepic.jpg"></img>
                </div>
            </div>
            <div className = "flex p-2">
                <p className = "text-bold text-blue-600">Full Name</p>
            </div>
        </div>

        <div className = "divider my-0 py-0 h-1"/>
    </>
  )
}

export default conversation