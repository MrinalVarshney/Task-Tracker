import React, { useState } from "react";
import { useTaskContext } from "../../../../../ContextAPI/TaskContext";

const TaskInputDetails = ({ closeAddModal, setAlert }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(getCurrentDate());
  const [image, setImage] = useState("");

  const { addTask } = useTaskContext();

  function saveTask(e) {
    e.preventDefault();
    e.stopPropagation();
    if (title.trim().length === 0) {
      setAlert({ message: "Title cannot be empty", type: "error" });
      return;
    }
    const newTask = {
      id: new Date().getTime().toString(),
      title: title,
      description: description,
      dueDate: dueDate,
      image: image,
      completed: false,
      creationDate: getCurrentDate(),
    };
    addTask(newTask);
    closeAddModal();
  }

  function getCurrentDate() {
    const today = new Date();

    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <div className="rounded-t-[15px] lg:rounded-b-[15px] h-[90%] w-full md:rounded-b-[15px] border popup bg-white p-4 shadow-md lg:w-[40%] lg:h-[90%] md:w-[90%] md:h-[80%]  flex flex-col gap-8">
      
      {/* Heading */}
      <div className="h-[5%] w-full flex justify-start">
        <h1 className="text-4xl font-bold " style={{ color: "#3D00C0" }}>
          New Task
        </h1>
      </div>

       {/* Input for setting task title */}
      <div className="h-[10%]">
        <input
          className="rounded-[15px] h-full w-full text-xl pl-4 placeholder-black"
          style={{ backgroundColor: "#E5E4FF" }}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        ></input>
      </div>

      {/* Input for setting task description */}
      <div className="h-[40%]">
        <textarea
          className="rounded-[15px] h-full w-full text-xl pl-4 placeholder-black resize-none"
          style={{ backgroundColor: "#E5E4FF" }}
          placeholder="Description..."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
      </div>

      {/* Input for setting task due date */}
      <div className="h-[10%] flex flex-row">
        <div className="w-[70%]">
          <div
            className="rounded-tl-[15px] rounded-bl-[15px] h-full w-full text-xl pl-4 flex items-center"
            style={{ backgroundColor: "#E5E4FF" }}
          >
            Due Date: {dueDate}
          </div>
        </div>
        <div className="w-[30%]">
          <button
            style={{ backgroundColor: "#737374" }}
            className="text-white font-bold lg:text-xl md:text-xl text-sm rounded-tr-[15px] rounded-br-[15px] text-center w-full h-full"
          >
            Change
          </button>
        </div>
      </div>

      {/* Image Upload */}
      <div className="h-[10%] flex flex-row">
        <div className="w-[70%]">
          <div
            className="rounded-tl-[15px] rounded-bl-[15px] h-full w-full text-xl pl-4 flex items-center"
            style={{ backgroundColor: "#E5E4FF" }}
          >
            No Image..
          </div>
        </div>
        <div className="w-[30%]">
          <button
            style={{ backgroundColor: "#737374" }}
            className="text-white font-bold lg:text-xl md:text-xl text-sm rounded-tr-[15px] rounded-br-[15px] text-center w-full h-full"
          >
            Add Image
          </button>
        </div>
      </div>

      {/* Buttons for saving and cancelling the task */}
      <div className="h-[20%] flex flex-row">
        <div className="w-[50%]">
          <button
            onClick={closeAddModal}
            className="text-black font-bold text-xl rounded-[15px] text-center w-full h-[70%] hover:bg-red-100 transition-all duration-300 ease-in"
          >
            Cancel
          </button>
        </div>
        <div className="w-[50%]">
          <button
            style={{ backgroundColor: "#3D00C0" }}
            className="text-white font-bold text-xl rounded-[15px]  text-center w-full h-[70%]"
            onClick={saveTask}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskInputDetails;
