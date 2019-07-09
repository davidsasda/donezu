import React from 'react';

const CompletedTask = ({task}) => {
  return (
    <div className='line-through text-steel bg-white hover:bg-steel-lite border-b border-steel-lite py-3 pl-2'>
      {task}
    </div>
  )
}

export default CompletedTask;