import React from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';

const DayView = ({tasks, addTask}) => {
  return (
    <div>
      <NewTask addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default DayView;