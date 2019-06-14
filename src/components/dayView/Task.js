import React from 'react';

const Task = ({task}) => {
  let style = "bg-white hover:bg-sakura-lite border-b border-steel-lite py-3 pl-2";

  if (task.status === 'complete') {
    style = 'line-through text-steel bg-white hover:bg-steel-lite border-b border-steel-lite py-3 pl-2'
  }
  
  return (
    <div className={style}>
      {task.task}
    </div>
  )
}

export default Task;