import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask}) => {
  return (
    <div className="tracking-none font-light">
        <NewTask addTask={addTask}/>
        <div className=" max-h-screen-80 overflow-y-auto">
          {tasks.map((task, i) => {
            return <Task key={i} task={task}/>
          })}
        </div>
    </div>
  )
}

export default TaskList;