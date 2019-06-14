import React from 'react';
import TaskList from './TaskList';

const DayView = ({tasks, addTask, deleteTask}) => {
  return (
    <div>
      <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default DayView;