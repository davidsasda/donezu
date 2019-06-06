import React from 'react';
import Task from './Task';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask}) => {
  return (
    <div className="overflow-y-auto sm:pr-12 md:pr-24">
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