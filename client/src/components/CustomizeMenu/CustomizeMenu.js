import React, { useState } from "react";
import ShuffleMenu from "./components/shuffleMenu";
import CreateNewButton from "../../shared/createNewButton";
import AddTaskModal from "../TasksContainer/components/Modals/AddTaskModal";

const CustomizeMenu = () => {
  const [addTask, setAddTask] = useState(false);

  function closeAddTaskModal(e) {
    e.preventDefault();
    e.stopPropagation();
    setAddTask(false);
  }
  function showAddTaskModal(e) {
    e.preventDefault();
    e.stopPropagation();
    setAddTask(true);
  }

  return (
    <div className="p-4 mr-[0%] lg:ml-[5%] lg:mr-[5%] gap-2 flex flex-col justify-center lg:flex-row md:flex-row lg:justify-end md:justify-end ">
      {/* List for prioritizing tasks either by due date or by Date Created */}
      <ShuffleMenu />

      {/* Create New Task Button for desktop and mobile screens*/}
      <div className="md:hidden lg:flex lg:flex-row  text-center ">
        <CreateNewButton showAddTaskModal={showAddTaskModal} />
      </div>

      {/* Popup for new Task creation */}
      {addTask && <AddTaskModal closeAddTaskModal={closeAddTaskModal} />}
    </div>
  );
};

export default CustomizeMenu;
