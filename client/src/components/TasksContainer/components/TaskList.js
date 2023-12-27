import React from "react";
import TaskCard from "./TaskCard";
import { useTaskContext } from "../../../ContextAPI/TaskContext";

const TaskList = ({ showTask, taskType, selectedTask }) => {
  const { tasks } = useTaskContext();

  const completedTasksLength = tasks.filter(
    (task) => task.completed === true
  ).length;
  const pendingTaskLength = tasks.length - completedTasksLength;

  return (
    // Reusable component for displaying list of tasks. It scrollable and displays tasks based on taskType
    <div className="flex flex-col mt-4 h-full overflow-y-scroll">
      {/* Handling the case when no task is present */}
      {(taskType === "Pending" && pendingTaskLength === 0) ||
      (taskType === "Completed" && completedTasksLength === 0) ? (
        <div className="text-5xl font-bold flex justify-center items-center h-full text-slate-500">
          No {taskType} Tasks Found
        </div>
      ) : (
        tasks.map((task) => {
              // Segregation of tasks based on taskType 
          if (taskType === "Pending" && task.completed === false) {
            return (
              <TaskCard
                key={task.id}
                task={task}
                showTask={showTask}
                selectedTask={selectedTask}
              />
            );
          } else if (taskType === "Completed" && task.completed === true) {
            return (
              <TaskCard
                key={task.id}
                task={task}
                showTask={showTask}
                selectedTask={selectedTask}
              />
            );
          }
          return null;
        })
      )}
    </div>
  );
};

export default TaskList;
