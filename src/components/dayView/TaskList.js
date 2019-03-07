import React from 'react';
import PresentTask from './PresentTask';

const TaskList = ({tasks}) => {
  return (
    <div>
        {tasks.map((task, i) => {
          return <PresentTask key={i} task={task} />
        })}
        {/* {tasks.map((task, i) => {
          return <FutureTask key={i} task={task} />
        })}
        {tasks.map((task, i) => {
          return <PastTask key={i} task={task} />
        })} */}
    </div>
  )
}

export default TaskList;