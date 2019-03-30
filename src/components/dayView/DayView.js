import React from 'react';
import TaskList from './TaskList';
import moment from 'moment';

const DayView = ({tasks, addTask}) => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex text-3xl tracking-tight pl-2">
        <div className="font-bold">{moment().format('dddd')}</div>
        <div className='font-thin pl-2'>{moment().format('— MMMM Do, YYYY')}</div>
      </div>
      <TaskList tasks={tasks} addTask={addTask}/>
    </div>
  )
}

export default DayView;