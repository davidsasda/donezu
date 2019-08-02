import React from 'react';
import ReactDOM from 'react-dom';
import dateFns from 'date-fns';

import DayView from './components/dayView/DayView';
import WeekView from './components/weekPane/WeekView';
import Login from './components/login/Login';

import api from './config/api';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: '',
      date: dateFns.format(new Date(), 'YYYY-MM-DD')
    }
    this.switchDates = this.switchDates.bind(this);
  };

  componentDidMount() {
    if (document.cookie) {
      api.get('/users/login', {withCredentials: true})
      .then(res => {
        this.setState({
          userID: res.data.user.email
        })
      })
    }
  }

  switchDates(date) {
    if (!dateFns.isFuture(date) && date != this.state.date) {
      this.setState({
        date: date
      })
    }
  }

  handleView() {
    if (this.state.userID) {
      return (
        <div>
          <div className='sticky w-full h-16 bg-white shadow z-20 sm:hidden'>
            boink
          </div>
          <div className='flex font-sans'>
            <div className='h-screen overflow-y-auto w-64 font-light text-sm tracking-tight hidden sm:block'>
              <WeekView
                userID={this.state.userID}
                date={this.state.date}
                switchDates={this.switchDates}
              />
            </div>
            <div className='h-screen flex-col flex-grow text-ake'>
              <DayView 
                userID={this.state.userID}
                date={this.state.date}
              />
            </div>
          </div>
        </div>
      )
    } else {
      return(
        <div>
          <Login />
        </div>
      )
    }
  }

  render() {
    return this.handleView()
  };
}

ReactDOM.render(<App />, document.getElementById('App'));