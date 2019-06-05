import React from 'react';
import TaskList from './TaskList';

const DayView = ({tasks, addTask}) => {
  return (
    <div className="flex flex-col flex-grow h-screen text-ake">
      <TaskList tasks={tasks} addTask={addTask}/>
    </div>
  )
}

export default DayView;