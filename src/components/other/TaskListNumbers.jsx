import React from "react";

const TaskListNumbers = ({data}) => {
  console.log(data)
  return (
    <>
    {data &&  <div className="flex justify-between mt-10 gap-6 w-full ">
      <div className="bg-[#4482d9] text-white flex flex-col py-6 px-9 w-[45%] rounded-xl ">
        <h1 className="text-4xl font-semibold ">{data.taskCount.newTask}</h1>
        <h3 className="text-2xl font-medium ">New Task</h3>
      </div>

      <div className="bg-green-500 text-white flex flex-col py-6 px-9 w-[45%] rounded-xl ">
        <h1 className="text-4xl font-semibold ">{data.taskCount.completed}</h1>
        <h3 className="text-2xl font-medium ">Completed</h3>
      </div>

      <div className="bg-yellow-400 text-white flex flex-col py-6 px-9 w-[45%] rounded-xl ">
        <h1 className="text-4xl font-semibold ">{data.taskCount.active}</h1>
        <h3 className="text-2xl font-medium ">Accepted</h3>
      </div>

      <div className="bg-red-500 text-white flex flex-col py-6 px-9 w-[45%] rounded-xl ">
        <h1 className="text-4xl font-semibold ">{data.taskCount.failed}</h1>
        <h3 className="text-2xl font-medium ">Failed</h3>
      </div>

    </div> }
    

    </>
  );
};

export default TaskListNumbers;
