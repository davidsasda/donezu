import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask, deleteTask}) => {
  let index = -1;
  return (
    <div className="h-screen overflow-y-auto px-4 md:px-12 lg:px-24">
      <NewTask addTask={addTask}/>
      <div className="pb-12">
        {tasks.length > 0 && tasks.map((task, i) => {
          index++
          return <Task key={i} task={task} deleteTask={deleteTask} index={index}/>
        })}
      </div>
    </div>
  )
}

export default TaskList;