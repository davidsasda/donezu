import React from 'react';
import TaskList from './TaskList';
import NewTask from './NewTask';
import moment from'moment';

const DayView = ({tasks, addTask}) => {
  return (
    <div>
      <div>{moment().format('dddd - MMMM Do, YYYY')}</div>
      <NewTask addTask={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default DayView;