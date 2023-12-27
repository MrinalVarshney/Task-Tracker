import React from "react";
import Header from "../components/header";
import CustomizeMenu from "../components/CustomizeMenu/CustomizeMenu";
import DisplayTasks from "../components/TasksContainer/DisplayTasks1";

const MainPage = () => {
  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-200 via-slate-50 to-white">
      {/* Header and CustomizeMenu are fixed, DisplayTasks is scrollable */}

      {/* Header with title - Task Tracker */}
      <div className="md:h-[10%] mid:h-[20%] h-[5%]">
        <Header />
      </div>

      {/* CustomizeMenu with for sorting the list and creation of new tasks */}
      <div className="md:h-[10%] mid:h-[5%] h-[18%] ">
        <CustomizeMenu />
      </div>

      {/* DisplayTasks with list of tasks  along with description modals */}
      <div className="lg:h-[75%] h-[80%]">
        <DisplayTasks />
      </div>
    </div>
  );
};

export default MainPage;
