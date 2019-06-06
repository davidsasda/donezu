import React from 'react';
import WeekList from './WeekList';
import CurrentWeek from './CurrentWeek';
import dateFns from 'date-fns';
import donezu from '/static/donezu.svg';

const WeekView = () => {
  let currentWeek = dateFns.startOfWeek(new Date(), {weekStartsOn: 1})
  return (
    <div>
      <div className="brand border-b border-steel-lite sticky bg-white pt-10 px-10">
        <img src={donezu} />
      </div>
      <div className="weeks py-3 px-10">
        <CurrentWeek startOfWeek={currentWeek}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 1)}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 2)}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 3)}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 4)}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 5)}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 6)}/>
        <WeekList startOfWeek={dateFns.subWeeks(currentWeek, 7)}/>
      </div>
      <style jsx>{`
        .brand {
          height: 7.5rem;
        }
      `}</style>
    </div>
  )
}

export default WeekView;