import React from 'react';
import Day from './Day';
import dateFns from 'date-fns';

const WeekList = ({startOfWeek}) => {
  return (
    <div className='pb-3'>
      <Day day={dateFns.addDays(startOfWeek, 6)}/>
      <Day day={dateFns.addDays(startOfWeek, 5)}/>
      <Day day={dateFns.addDays(startOfWeek, 4)}/>
      <Day day={dateFns.addDays(startOfWeek, 3)}/>
      <Day day={dateFns.addDays(startOfWeek, 2)}/>
      <Day day={dateFns.addDays(startOfWeek, 1)}/>
      <Day day={startOfWeek}/>
    </div>
  )
}

export default WeekList;