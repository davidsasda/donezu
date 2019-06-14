import React from 'react';
import dateFns from 'date-fns';

const Day = ({day}) => {
  let style = 'text-steel';

  if (dateFns.isToday(day)) {
    style = 'text-ake';
  } else if (dateFns.isFuture(day)){
    style = 'text-midnight';
  }

  return (
    <div className={style + ' pb-3'}>
      <b className="font-bold">{dateFns.format(day, 'ddd').toUpperCase()}</b>
      {dateFns.format(day, ' – MMM D, YYYY')}
    </div>
  )
}

export default Day;