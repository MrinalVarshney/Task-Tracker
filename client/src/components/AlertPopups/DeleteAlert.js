import React, { useState } from 'react';

const TaskDeletePopup = ({ onDelete, onCancel }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDelete = () => {
    onDelete();
    setIsVisible(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsVisible(false);
  };

  return (
    // Popup for deleting a task
    <div className={`fixed inset-0 shadow-300 flex items-center justify-center ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className=" p-6 rounded-lg shadow-lg bg-slate-100" >
        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this task?</p>
        <div className="flex justify-end">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="ml-4 px-4 py-2  text-red-500 hover:bg-red-600 focus:outline-none rounded" style={{backgroundColor:"#FFD2D2"}}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDeletePopup;

