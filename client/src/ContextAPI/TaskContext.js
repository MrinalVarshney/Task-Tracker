import React, { createContext, useReducer, useContext } from "react";
import tasksData from "../components/TasksData";

// Global management of tasks is done using Context API. 
// The tasks are stored in a global state and can be accessed from any component. 
// The tasks are initially filled with dummy data. The tasks can be added, removed, 
// completed and sorted based on due date or creation date.

// Create context for tasks
const TaskContext = createContext();

export const useTaskContext = () => {
  return useContext(TaskContext);
};

// Initially tasks filled with dummy data
const initialState = {
  tasks: tasksData,
};

// Function to compare tasks based on due date
const compareDate = (taskA, taskB) => {
  const dateA = new Date(taskA.dueDate.split("-").reverse().join("-"));
  const dateB = new Date(taskB.dueDate.split("-").reverse().join("-"));

  return dateA - dateB;
};

// Reducer function
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "REMOVE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "COMPLETE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          }
          return task;
        }),
      };
    case "SORT_TASKS":
      if (action.payload === "dueDate") {
        return {
          ...state,
          tasks: state.tasks.sort(compareDate),
        };
      } else if (action.payload === "creationDate") {
        return {
          ...state,
          tasks: state.tasks.sort(compareDate).reverse(),
        };
      }
      return;
    default:
      return state;
  }
};

//Task Provider
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const removeTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  const completeTask = (taskId) => {
    const task = state.tasks.find((task) => task.id === taskId);
    task.completed = true;
    dispatch({ type: "COMPLETE_TASK", payload: task });
  };

  const sortTasks = (sortFactor) => {
    dispatch({ type: "SORT_TASKS", payload: sortFactor });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        removeTask,
        completeTask,
        sortTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
