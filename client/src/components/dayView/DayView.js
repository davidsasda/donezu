import React from 'react';
import TaskList from './TaskList';

const DayView = ({tasks, completed, addTask, deleteTask, completeTask}) => {
  return (
    <div>
      <TaskList
        tasks={tasks}
        completed={completed}
        addTask={addTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  )
}

export default DayView;