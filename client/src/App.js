import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './components/dayView/DayView'
import WeekView from './components/weekPane/WeekView';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: '123'
    }
  };

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className='sticky w-full h-16 bg-white shadow z-20 sm:hidden'>
          boink
        </div>
        <div className='flex font-sans'>
          <div className='h-screen overflow-y-auto w-64 font-light text-sm tracking-tight hidden sm:block'>
            <WeekView />
          </div>
          <div className='h-screen flex-col flex-grow text-ake'>
            <DayView 
              userID={this.state.userID}
            />
          </div>
        </div>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById('App'));