import React, { useState } from "react";
import TaskDescription from "./components/TaskDescription";
import CreateNewButton from "../../shared/createNewButton";
import AddTaskModal from "./components/Modals/AddTaskModal";
import TaskList from "./components/TaskList";
import DescriptionModal from "./components/Modals/DescriptionModal";

const DisplayTasks = () => {
  const [taskType, setTaskType] = useState("Pending");
  const [task, setTask] = useState(null);

  const [addTask, setAddTask] = useState(false);
  function closeAddTaskModal() {
    setAddTask(false);
  }
  function showAddTaskModal(e) {
    e.preventDefault();
    e.stopPropagation();
    setAddTask(true);
  }

  function showTask(task) {
    console.log(task);
    setTask(task);
  }

  function showPending(e) {
    e.preventDefault();
    e.stopPropagation();
    setTaskType("Pending");
  }

  function showCompleted(e) {
    e.preventDefault();
    e.stopPropagation();
    setTaskType("Completed");
  }

  function closeDescriptionModal() {
    setTask(null);
  }
  return (
    // Main container for displaying tasks
    <div className="lg:ml-[5%] lg:mr-[5%] h-full ml-0 mr-[0%] md:ml-[5%] mb-5 rounded-[15px] bg-gradient-to-b from-[#D5D4FFA6] via-[#D5D4FF65] to-[#F7F7FF]">
      {/* Flex row for displaying tasks and task description in desktop mode */}
      <div className="lg:flex lg:flex-row h-full">
        {/* Section for displaying tasks */}
        {/* Div for displaying header and list of tasks.*/}
        <div className="flex flex-col lg:w-[60%]  h-full">
          {/* Header section containing status of tasks Pending or Completed and Create New Task button in tablet mode */}
          <div className="md:flex md:flex-row h-[10%] pt-4 pl-4  items-center">
            <div className="md:w-[65%] text-[30px] font-bold ">
              {taskType === "Pending" ? "Pending Tasks" : "Completed Tasks"}
            </div>
            <div className="hidden lg:hidden md:w-[35%] text-center md:block mr-4">
              <CreateNewButton showAddTaskModal={showAddTaskModal} />

              {addTask && (
                <AddTaskModal closeAddTaskModal={closeAddTaskModal} />
              )}
            </div>
          </div>

          {/* List of Tasks along with delete and complete functionalities */}
          <div className="h-[75%]  pl-2">
            <TaskList
              showTask={showTask}
              taskType={taskType}
              selectedTask={task}
            />
          </div>

          {/*Sections for switching between Pending and Completed Tasks */}
          <div className="h-[15%] ">
            <div className="h-full flex flex-row text-[20px] justify-center text-center font-bold mt-0 border-solid border-t-2 border-black">
              <div
                className="transition-all duration-300 ease-out w-1/2 p-5 rounded-bl-[15px] hover:cursor-pointer flex justify-center items-center"
                style={
                  taskType === "Pending"
                    ? { backgroundColor: "#ACA7D5" }
                    : { backgroundColor: "#D5D4FFA6" }
                }
                onClick={showPending}
              >
                Pending
              </div>
              <div
                className="transition-all h-full duration-300 ease-out w-1/2 p-5 hover:cursor-pointer flex justify-center items-center"
                style={
                  taskType === "Completed"
                    ? { backgroundColor: "#ACA7D5" }
                    : { backgroundColor: "#D5D4FFA6" }
                }
                onClick={showCompleted}
              >
                Completed
              </div>
            </div>
          </div>
        </div>

        {/* Section for displaying task description in desktop mode */}
        <div className="hidden lg:block w-[40%] h-full border-solid border-l-2 border-black">
          <div className="overflow-y-scroll h-[100%]">
            <TaskDescription task={task} />
          </div>
        </div>
      </div>

      {/* Section for displaying task description in mobile and tablet modes*/}
      <div className="lg:hidden">
        {task && (
          <DescriptionModal
            task={task}
            closeDescriptionModal={closeDescriptionModal}
          />
        )}
      </div>
    </div>
  );
};

export default DisplayTasks;
