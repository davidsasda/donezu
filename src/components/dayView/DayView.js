import React from 'react';
import TaskList from './TaskList';
import dateFns from 'date-fns';

const DayView = ({tasks, addTask}) => {
  return (
    <div className="container mx-auto pt-8">
      <div className="flex text-3xl tracking-tight pl-2">
        <div className="font-bold">{dateFns.format(new Date(), 'dddd')}</div>
        <div className='font-thin pl-2'>{dateFns.format(new Date(), '— MMMM Do, YYYY')}</div>
      </div>
      <TaskList tasks={tasks} addTask={addTask}/>
    </div>
  )
}

export default DayView;