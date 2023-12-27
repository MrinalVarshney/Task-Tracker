import React, { useState } from "react";
import { useTaskContext } from "../../../ContextAPI/TaskContext";
import DeleteAlert from "../../AlertPopups/DeleteAlert";

const TaskCard = ({ task, showTask, selectedTask }) => {
  const { completeTask, removeTask } = useTaskContext();
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  //function to show task details
  function handleClick(e) {
    e.stopPropagation();
    e.preventDefault();
    showTask(task);
  }

  //Opens up a alert popup for task deletion
  const handleDelete = () => {
    setShowDeleteAlert(true);
  };

  //Deletes the task
  const onDelete = () => {
    removeTask(task.id);
    setShowDeleteAlert(false);
  };

  //Closes the alert popup without deleting the task
  const onCancel = () => {
    setShowDeleteAlert(false);
  };

  const title = task ? task.title : null;
  return (
    // Reusable Card for showing tasks in TaskList
    <div
      className={`flex mt-3 lg:flex-row md:flex-row flex-col p-3 rounded-tl-[15px] rounded-bl-[15px] bg-white hover:cursor-pointer ${
        selectedTask?.id === task.id
          ? "border-2 border-r-0 border-black bg-purple-200"
          : " hover:bg-gray-200"
      }`}
    >
      <div
        className="lg:w-[75%] md:w-[80%] w-full p-2 text-[20px] font-bold"
        onClick={handleClick}
      >
        {title.trim().length > 50
          ? title.trim().substring(0, 50) + "..."
          : title}
      </div>
      {/* For deletion of tasks, we have a delete button and a complete button.  */}
      {/* The delete button opens up a alert popup for confirmation of deletion.  */}
      {/* The complete button marks the task as completed. */}
      <div className="ml-10 lg:ml-0 md:ml-0 lg:w-[25%] md:w-[20%] flex flex-row-reverse lg:flex-row md:flex-col-reverse text-center gap-4">
        <button
          className="w-1/2 md:w-full font-bold p-2 rounded-[5px]"
          style={{ backgroundColor: "#FFD2D2", color: "#8C0000" }}
          onClick={() => {
            handleDelete();
          }}
        >
          Delete
        </button>
        {/* Complete button will be shown only for pending tasks */}
        {!task.completed && (
          <button
            className="w-1/2 md:w-full font-bold p-2 rounded-[5px]"
            style={{ backgroundColor: "#F5FFD8", color: "#2F7B00" }}
            onClick={() => {
              completeTask(task.id);
            }}
          >
            Complete
          </button>
        )}
      </div>
      {/* The alert popup for deletion of tasks */}
      {showDeleteAlert && (
        <DeleteAlert onCancel={onCancel} onDelete={onDelete} />
      )}
    </div>
  );
};

export default TaskCard;
