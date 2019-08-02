import React from 'react';
import Task from './Task';
import CompletedTask from './CompletedTask';

const TaskList = ({tasks, completed, deleteTask, completeTask}) => {
  let index = -1;
  return (
    <div className='pb-12 leading-tight'>
      {tasks.length > 0 && tasks.map((obj, i) => {
        index++
        return <Task key={i} task={obj.task} deleteTask={deleteTask} completeTask={completeTask} index={index}/>
      })}
      {completed.length > 0 && completed.map((obj, i) => {
        return <CompletedTask key={i} task={obj.task}/>
      })}
    </div>
  )
}

export default TaskList;