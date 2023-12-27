import React from "react";
import TaskDetails from "../../../shared/TaskDetails";

const TaskDescription = ({ task }) => {
  return (
    // Title of the task, due date, description and image of the task will be displayed via TaskDetails component
    <div className="p-2 mt-2 ml-2 text-5xl h-[98%]">
      {/* Handling the case when no task is selected */}
      {task == null ? (
        <div className="text-5xl font-bold flex justify-center items-center h-full text-slate-500">
          No Task Selected
        </div>
      ) : (
        <TaskDetails task={task} />
      )}
    </div>
  );
};

export default TaskDescription;
