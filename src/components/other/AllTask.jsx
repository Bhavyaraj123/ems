import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = ({data}) => {
    const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="alltask" className='bg-[#2d2c2c] p-10 py-5 mt-10 h-60 rounded-lg flex flex-col overflow-y-auto w-full'>

<div className='flex justify-between items-center bg-green-500 px-2 py-2 text-xl rounded-lg font-semibold text-white mt-2 z-10'>
            <h2 className='w-1/5'>Employee name</h2>
            <h2 className='w-1/5'>New Task</h2>
            <h2 className='w-1/5'>Active Task</h2>
            <h2 className='w-1/5'>Completed Task</h2>
            <h2 className='w-1/5'>Failed Task</h2>
        </div>

<div id="alltask" className='h-[80%] overflow-auto'>
    {userData && Array.isArray(userData) && userData.map((emp , index)=>{
            return <div key={index}   className='flex border-2  border-white  justify-between items-center overflow-auto bg-[] px-2 py-2 text-xl rounded-lg font-semibold text-white mt-2'>
            <h2 className='w-1/5'>{emp.name}</h2>
            <h2 className='w-1/5 text-blue-500'>{emp.taskCount.newTask}</h2>
            <h2 className='w-1/5 text-yellow-500 '>{emp.taskCount.active}</h2>
            <h2 className='w-1/5 text-green-600'>{emp.taskCount.completed}</h2>
            <h2 className='w-1/5 text-red-500'>{emp.taskCount.failed}</h2>
        </div>
        })}</div>
        
        
        
    </div>  
  )
}

export default AllTask