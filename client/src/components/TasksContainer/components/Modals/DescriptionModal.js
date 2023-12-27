import React from "react";
import TaskDetails from "../../../../shared/TaskDetails";

const DescriptionModal = ({ closeDescriptionModal, task }) => {
  return (
    <>
      {/*Task Description Pop up for Tablet screen*/}
      <div className="hidden md:block">
        <div className=" overlay fixed bottom-0 left-0 w-full h-full flex md:justify-center md:items-center backdrop-filter backdrop-blur-md bg-black bg-opacity-10">
          <div className="rounded-[15px] border popup bg-white p-8 shadow-md md:w-[70%] h-[70%] overflow-y-scroll">
            <div className="flex justify-end">
              <button onClick={closeDescriptionModal}>
                {/* Cross Icon svg */}
                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </button>
            </div>
            {/* This component will show full task details */}
            <TaskDetails task={task} />
          </div>
        </div>
      </div>
      {/*Task Description Pop up for Mobile screens */}
      <div className="md:hidden">
        <div className="fixed bottom-0 left-0 w-full h-full flex justify-center items-end backdrop-filter backdrop-blur-md bg-black bg-opacity-50">
          <div className="rounded-t-[15px] border-t popup bg-white p-8 shadow-md w-full h-[70%] overflow-y-scroll">
            <div className="flex justify-end">
              <button onClick={closeDescriptionModal}>
                {/* Cross Icon svg */}
                <svg fill="none" viewBox="0 0 24 24" height="2em" width="2em">
                  <path
                    fill="currentColor"
                    d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
                  />
                </svg>
              </button>
            </div>
            {/* This component will show full task details */}
            <TaskDetails task={task} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionModal;
