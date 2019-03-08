import React from 'react';
import TaskList from './TaskList';
import moment from 'moment';

const DayView = ({tasks, addTask}) => {
  return (
    <div>
      <div>{moment().format('dddd - MMMM Do, YYYY')}</div>
      <TaskList tasks={tasks} addTask={addTask}/>
    </div>
  )
}

export default DayView;