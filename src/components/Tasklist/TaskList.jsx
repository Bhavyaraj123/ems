import React from "react";
import AcceptTask from "./AcceptTask";
import { NewTask } from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="TaskList"
      className="h-[50%] mt-10 rounded-md flex flex-nowrap overflow-x-hidden px-2 py-2 gap-5 max-w-full"
    >
      {data &&
        data.tasks.map((elem ,index) => {
          if (elem.newTask) {
            return <NewTask key={index} data={elem}/>;
          }
          if (elem.active) {
            return <AcceptTask key={index} data={elem}/>;
          }

          if (elem.completed) {
            return <CompleteTask key={index} data={elem}/>;
          }
          if (elem.failed) {
            return <FailedTask key={index} data={elem}/>;
          }
        })}
    </div>
  );
};

export default TaskList;
