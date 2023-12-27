import React, { useState } from "react";
import TaskInputDetails from "./DetailForms/TaskInputDetails";
import Alert from "../../../AlertPopups/Alert";

const AddTaskModal = ({ closeAddTaskModal }) => {
  const [alert, setAlert] = useState(null);
  
  return (
    <div>
                                        {/* For Tablet and above screen size */}

      <div className="hidden md:block">
        <div className=" overlay fixed bottom-0 left-0 w-full h-full flex md:justify-center md:items-center backdrop-filter backdrop-blur-md bg-black bg-opacity-10">
          {/* Form for adding new task details */}
          <TaskInputDetails
            closeAddModal={closeAddTaskModal}
            setAlert={setAlert}
          />
        </div>
      </div>
                                        {/* For Mobile screen size */}

      <div className="md:hidden lg:hidden">
        <div className="fixed bottom-0 left-0 w-full h-full flex justify-center items-end backdrop-filter backdrop-blur-md bg-black bg-opacity-50">
          {/* Form for adding new task details */}
          <TaskInputDetails
            closeAddModal={closeAddTaskModal}
            setAlert={setAlert}
          />
        </div>
      </div>

      {/* Alert for handling errors i.e no Title or dueDate */}
      {alert && (
        <Alert message={alert.message} type={alert.type} setAlert={setAlert} />
      )}
    </div>
  );
};

export default AddTaskModal;
