import React from 'react'

const AcceptTask = ({data}) => {
  return (
 
    <>
    {data && <div className="flex-shrink-0  min-w-0 h-full w-[23%] bg-yellow-500  rounded-md px-2 py-2">

        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-semibold text-sm bg-red-500 px-2 py-2 rounded-md">
          {data.category}
          </h2>
          <h3 className="text-white font-medium text-sm">{data.date}</h3>
        </div>
        <div className="mt-5 ">
          <h1 className="text-2xl font-bold">{data.title}</h1>
          <p className="text-md  text-wrap mt-3">
          {data.description}
          </p>
          <div className='flex justify-between mt-5 '>
            <button className='bg-green-500 text-sm py-1 rounded-lg px-2 '>Mark as read</button>
            <button className='bg-red-500 text-sm py-1  rounded-lg px-2 '>Mark as failed</button>
          </div>
        </div>
        </div>}
         
        </>
  )
}

export default AcceptTask