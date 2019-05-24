import React from 'react';
import WeekList from './WeekList';
import CurrentWeek from './CurrentWeek';
import dateFns from 'date-fns';

const WeekView = () => {
  let currentWeek = dateFns.startOfWeek(new Date(), {weekStartsOn: 1})
  return (
    <div className="h-screen overflow-y-auto w-64 px-8 font-thin text-sm tracking-tighter min-w-200px">
      <CurrentWeek startOfWeek={currentWeek}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 1)}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 2)}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 3)}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 4)}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 5)}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 6)}/>
      <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 7)}/>
    </div>
  )
}

export default WeekView;