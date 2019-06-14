import React from 'react';
import TaskList from './TaskList';

const DayView = ({tasks, addTask}) => {
  return (
    <div>
      <TaskList tasks={tasks} addTask={addTask}/>
    </div>
  )
}

export default DayView;