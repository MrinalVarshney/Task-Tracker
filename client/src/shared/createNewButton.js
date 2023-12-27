import React from "react";

const createNewButton = ({ showAddTaskModal }) => {
  return (

    // For Creation of new task modal will be opened via calling showAddTaskModal function
    <div
      className="rounded-[15px] text-white text-[20px] h-[48px] pl-5 pr-5 lg:pl-10 lg:pr-10 p-2  hover:cursor-pointer"
      style={{ backgroundColor: "#3D00C0" }}
      onClick={showAddTaskModal}
    >
      Create new task
    </div>
  );
};

export default createNewButton;
