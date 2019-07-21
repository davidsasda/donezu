import React from 'react';
import dateFns from 'date-fns';

import Day from './Day';

const WeekList = ({startOfWeek, date, switchDates}) => {
  return (
    <div className='pb-3'>
      <Day day={dateFns.addDays(startOfWeek, 6)} date={date} switchDates={switchDates}/>
      <Day day={dateFns.addDays(startOfWeek, 5)} date={date} switchDates={switchDates}/>
      <Day day={dateFns.addDays(startOfWeek, 4)} date={date} switchDates={switchDates}/>
      <Day day={dateFns.addDays(startOfWeek, 3)} date={date} switchDates={switchDates}/>
      <Day day={dateFns.addDays(startOfWeek, 2)} date={date} switchDates={switchDates}/>
      <Day day={dateFns.addDays(startOfWeek, 1)} date={date} switchDates={switchDates}/>
      <Day day={startOfWeek} date={date} switchDates={switchDates}/>
    </div>
  )
}

export default WeekList;