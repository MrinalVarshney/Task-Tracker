import React from 'react'

const TaskDetails = ({task}) => {
  return (
    // Title of the task, due date, description and image of the task will be displayed here
    <div>
        <h1 className="text-3xl font-bold ">Description</h1>
        <div className="text-2xl font-semibold mt-2 ">{task.title}</div>
        <div className="text-xl mt-2 font-bold text-red-600">Due: {task.dueDate}</div>
        <div className="text-2xl font-weight-200 mt-2 ">{task.description}</div>
        {task.image &&
        <img className="mt-2 max-w-full h-auto" src={task.image} alt="Task images"></img>
        }
    </div>
  )
}

export default TaskDetails
