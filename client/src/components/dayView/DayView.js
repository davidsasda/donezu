import React from 'react';
import TaskList from './TaskList';
import dateFns from 'date-fns';

const DayView = ({tasks, addTask, deleteTask}) => {
  return (
    <div className="min-w-825px pt-8 h-screen text-ake">
      <div className="text-3xl tracking-tight font-thin pl-2">
        <b className="font-bold">{dateFns.format(new Date(), 'dddd')}</b>
        {dateFns.format(new Date(), ' — MMMM Do, YYYY')}
      </div>
      <TaskList tasks={tasks} addTask={addTask} deleteTask={deleteTask}/>
    </div>
  )
}

export default DayView;