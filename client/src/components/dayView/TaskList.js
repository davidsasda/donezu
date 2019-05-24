import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask, deleteTask}) => {
  let index = -1;
  return (
    <div className="tracking-none font-light">
        <NewTask addTask={addTask}/>
        <div className=" max-h-screen-80 overflow-y-auto">
          {tasks.length > 0 && tasks.map((task, i) => {
            index++
            return <Task key={i} task={task} deleteTask={deleteTask} index={index}/>
          })}
        </div>
    </div>
  )
}

export default TaskList;