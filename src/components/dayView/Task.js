import React from 'react';

const Task = ({task}) => {
  if (task.status === 'complete') {
    return (<div className="line-through text-steel bg-white hover:bg-steel-lite border-b border-steel-lite py-3">
    {task.task}
  </div>)
  }
  return (
    <div className="bg-white hover:bg-sakura-lite border-b border-steel-lite py-3 pl-2">
      {task.task}
    </div>
  )
}

export default Task;