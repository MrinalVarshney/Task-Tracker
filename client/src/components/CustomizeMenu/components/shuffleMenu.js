import React, { useState } from "react";
import { useTaskContext } from "../../../ContextAPI/TaskContext";
const ShuffleMenu = () => {
  const [sortBy, setSortBy] = useState("creationDate");
  const { sortTasks } = useTaskContext();

  const sortByCreation = () => {
    setSortBy("creationDate");
    sortTasks("creationDate");
  };

  const sortByDue = () => {
    setSortBy("dueDate");
    sortTasks("dueDate");
  };
  return (
    <div
      className="rounded-[15px] w-full lg:w-[566px] md:w-[566px] lg:h-[48px] md:h[48px] h-[48px] border-solid border-2  flex flex-row items-center font-bold text-[18px] text-center hover:cursor-pointer"
      style={{ color: "#3D00C0", borderColor: "#3D00C0" }}
    >
      <div
        className="lg:w-1/5 md:w-1/5 p-2 h-full rounded-tl-[15px] rounded-bl-[15px] hidden md:block"
        style={{ backgroundColor: "#D5D4FFA6" }}
      >
        sort by
      </div>

      {/* Sorting via Creation Date , chosen by default */}
      <div
        onClick={sortByCreation}
        className="transition-all duration-300 ease-in lg:w-2/5 md:2/5 p-2 lg:rounded-none md:rounded-none rounded-tl-[15px] rounded-bl-[15px] h-full w-1/2 text-black"
        style={sortBy === "creationDate" ? { backgroundColor: "#ACA7D5" } : {}}
      >
        Date created
      </div>

      {/* Sorting via Due Date */}
      <div
        className="transition-all duration-300 ease-in lg:w-2/5 md:2/5 p-2 w-1/2 text-black"
        onClick={sortByDue}
        style={sortBy === "dueDate" ? { backgroundColor: "#ACA7D5" } : {}}
      >
        Due date
      </div>
    </div>
  );
};

export default ShuffleMenu;
