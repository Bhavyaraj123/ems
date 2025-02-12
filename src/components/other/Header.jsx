import React from 'react'



  const Header = ({ data, changeUser }) => {
    const LogoutUser = () => {
      localStorage.removeItem("loggedInUser"); // Remove user from storage
      changeUser(""); // Update the state to reflect logout
    };
  return (
    <>   
     {data && <div className='flex justify-between items-end '>
      <h1 className='text-xl font-medium tracking-tighter '>Hello , <br /><span className='font-medium  text-3xl '>{data.name} 👋</span></h1>
      <button  onClick={LogoutUser} className='bg-red-600 text-white text-lg font-medium tracking-tighter px-3 py-2 rounded-sm'>
        Log Out
      </button>
    </div>}
    </>

    
  )
}

export default Header
