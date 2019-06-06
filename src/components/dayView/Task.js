import React from 'react';

const Task = ({task}) => {
  let style = "hover:bg-sakura-lite text-sm border-b border-steel-lite py-3 pl-2";

  if (task.status === 'complete') {
    style = 'line-through text-steel border-b border-steel-lite py-3 pl-2'
  }
  
  return (
    <div className={style}>
      {task.task}
    </div>
  )
}

export default Task;