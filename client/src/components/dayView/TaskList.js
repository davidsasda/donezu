import React from 'react';
import Task from './Task';
import CompletedTask from './CompletedTask';
import NewTask from './NewTask';

const TaskList = ({tasks, completed, addTask, deleteTask, completeTask}) => {
  let index = -1;
  return (
    <div className='h-screen overflow-y-auto px-4 md:px-12 lg:px-24'>
      <NewTask addTask={addTask}/>
      <div className='pb-12'>
        {tasks.length > 0 && tasks.map((obj, i) => {
          index++
          return <Task key={i} task={obj.task} deleteTask={deleteTask} completeTask={completeTask} index={index}/>
        })}
        {completed.length > 0 && completed.map((obj, i) => {
          return <CompletedTask key={i} task={obj.task}/>
        })}
      </div>
    </div>
  )
}

export default TaskList;