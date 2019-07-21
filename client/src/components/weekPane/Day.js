import React from 'react';
import dateFns from 'date-fns';

const Day = ({day, date, switchDates}) => {
  let style = '';

  if (dateFns.format(day, 'YYYY-MM-DD') === date) {
    style = 'text-ake font-bold cursor-default';
  } else if (dateFns.isToday(day) && dateFns.format(day, 'YYYY-MM-DD') != date) { 
    style = 'text-ake hover:font-bold cursor-pointer';
  } else if (dateFns.isPast(day) && dateFns.format(day, 'YYYY-MM-DD') != date) {
    style = 'text-steel hover:text-ake hover:font-bold cursor-pointer';
  } else if (dateFns.isFuture(day)){
    style = 'text-midnight cursor-default';
  }
  
  return (
    <div 
      className={style + ' pb-3'}
      onClick={() => switchDates(dateFns.format(day, 'YYYY-MM-DD'))}
    >
      <b className='font-bold'>{dateFns.format(day, 'ddd').toUpperCase()}</b>
      {dateFns.format(day, ' – MMM D, YYYY')}
    </div>
  )
}

export default Day;