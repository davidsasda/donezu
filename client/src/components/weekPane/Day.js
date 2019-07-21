import React from 'react';
import dateFns from 'date-fns';

const Day = ({day, counter, style, switchDates}) => {
  return (
    <div 
      className={style + ' pb-3'}
      onClick={() => switchDates(dateFns.format(day, 'YYYY-MM-DD'))}
    >
      <b className='font-bold'>{dateFns.format(day, 'ddd').toUpperCase()}</b>
      {dateFns.format(day, ' – MMM D, YYYY')}
      {counter > 0 ? ` – ${counter}` : ''}
    </div>
  )
}

export default Day;