import React from 'react'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'
import Header from '../other/Header'

const AdminDashboard = (props) => {

  const LogoutUser=()=>{
    localStorage.setItem('loggedInUser','');
    // window.location.reload();
    props.changeUser('')
}
  return (
    <>
    <div className='p-10 w-screen h-screen'>
      {/* <Header changeUser={props.changeUser}/> */}
      <div className='flex justify-between items-end {props.changeUser}'>
      <h1 className='text-xl font-medium tracking-tighter '>Hello , <br /><span className='font-medium  text-3xl '>Admin 👋</span></h1>
      <button  onClick={LogoutUser} className='bg-red-600 text-white text-lg font-medium tracking-tighter px-3 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
      <CreateTask/>
      <AllTask/>
    </div>
    </>
  )
}

export default AdminDashboard
