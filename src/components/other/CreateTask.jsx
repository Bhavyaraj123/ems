import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();

    // Create the new task object
    const newTask = {
      date,
      assign,
      category,
      description,
      title,
      active: false,
      NewTask: true,
      failed: false,
      completed: false,
    };

    // Update employee list correctly
    const updatedEmployees = userData.map((employee) => {
      if (assign.trim() === employee.name.trim()) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask], // Add task properly
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1, // Increment count
          },
        };
      }
      return employee; // Return unchanged employee if no match
    });

    // Update state correctly
    setUserData(updatedEmployees);

    // Clear input fields
    setAssign("");
    setCategory("");
    setDate("");
    setDescription("");
    setTitle("");
  };

  return (
    <div>
      <div className="bg-[#2d2c2c] px-10 py-5 mt-10 rounded-lg w-full">
        <form
          action=""
          onSubmit={submitHandle}
          className="flex flex-wrap w-full items-start justify-between"
        >
          <div className="flex flex-col gap-2 w-1/2">
            <div>
              <h2 className="text-gray-300 mb-1 text-md font-semibold">
                Task Title
              </h2>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter your task name"
                className="w-[60%] px-2 py-1 text-gray-300 text-md font-medium outline-none bg-transparent border-2 rounded border-gray-300"
              />
            </div>
            <div>
              <h2 className="text-gray-300 mb-1">Date</h2>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="w-[60%] px-2 py-1 text-gray-300 text-md font-medium outline-none bg-transparent border-2 rounded border-gray-300"
              />
            </div>
            <div>
              <h2 className="text-gray-300 mb-1">Assign To</h2>
              <input
                value={assign}
                onChange={(e) => setAssign(e.target.value)}
                type="text"
                placeholder="Employee name"
                className="w-[60%] px-2 py-1 text-gray-300 text-md font-medium outline-none bg-transparent border-2 rounded border-gray-300"
              />
            </div>
            <div>
              <h2 className="text-gray-300 mb-1">Category</h2>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Design, development, etc."
                className="w-[60%] px-2 py-1 text-gray-300 text-md font-medium outline-none bg-transparent border-2 rounded border-gray-300"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col">
            <div>
              <h2 className="text-gray-300 mb-1">Description</h2>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-2 py-4 h-48 text-gray-300 text-md font-medium outline-none bg-transparent border-2 rounded border-gray-300"
              ></textarea>
              <button className="bg-[#54B586] flex justify-center items-center w-full px-3 py-2 text-lg font-semibold rounded-lg mt-2">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
