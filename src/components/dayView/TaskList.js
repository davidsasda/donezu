import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask}) => {
  return (
    <div className="h-screen overflow-y-auto px-4 sm:px-8 md:px-24">
      <NewTask addTask={addTask}/>
      <div className="pb-12">
        {tasks.map((task, i) => {
          return <Task key={i} task={task}/>
        })}
      </div>
    </div>
  )
}

export default TaskList;