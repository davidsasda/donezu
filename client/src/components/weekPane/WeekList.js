import React from 'react';
import dateFns from 'date-fns';

import Day from './Day';
import api from '../../utils/api';

class WeekList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      week: []
    }
  }

  componentDidMount() {
    this.checkWeek();
  }

  checkWeek(date = this.props.startOfWeek) {
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MM');
    let day = dateFns.format(date, 'DD');
    api.get(`/weeks/${this.props.userID}/${year}/${month}/${day}`)
    .then(res => {
      for (let i = 0; i < res.data.length; i++) {
        this.setState(prevState => ({
          week: [...prevState.week, 
            {
              date: dateFns.addDays(this.props.startOfWeek, 6 - i),
              counter: res.data[i]
            }
          ]
        }))
      }
    })
    .catch(err => {
      for (let i = 0; i < 7; i++) {
        this.setState(prevState => ({
          week: [...prevState.week, 
            {
              date: dateFns.addDays(this.props.startOfWeek, 6 - i),
              counter: 0
            }
          ]
        }))
      }
    })
  }

  checkStyle(day) {
    let style = ''
    if (dateFns.format(day, 'YYYY-MM-DD') === this.props.date) {
      style = 'text-ake font-bold cursor-default'; // current view
    } else if (dateFns.isToday(day) && dateFns.format(day, 'YYYY-MM-DD') != this.props.date) { 
      style = 'text-ake hover:font-bold cursor-pointer'; // if today isn't the current view
    } else if (dateFns.isPast(day) && dateFns.format(day, 'YYYY-MM-DD') != this.props.date) {
      style = 'text-steel hover:text-ake hover:font-bold cursor-pointer'; // if day is in the past
    } else if (dateFns.isFuture(day)){
      style = 'text-midnight cursor-default'; // if day is in the future
    }
    return style;
  }

  render() {
    return (
      <div className='pb-3 leading-tight'>
        {this.state.week.length > 0 && this.state.week.map((day, i) => {
          return<Day key={i} day={day.date} counter={day.counter} style={this.checkStyle(day.date)} switchDates={this.props.switchDates}/>
        })}
      </div>
    )
  }
}

export default WeekList;