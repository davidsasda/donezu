import React from 'react';
import PresentTask from './PresentTask';
import NewTask from './NewTask';

const TaskList = ({tasks, addTask}) => {
  return (
    <div>
        <NewTask addTask={addTask}/>
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