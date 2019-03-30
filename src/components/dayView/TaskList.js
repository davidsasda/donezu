import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask}) => {
  return (
    <div className="tracking-none font-light">
        <NewTask addTask={addTask}/>
        {tasks.map((task, i) => {
          return <Task key={i} task={task}/>
        })}
    </div>
  )
}

export default TaskList;