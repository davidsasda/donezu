import React from 'react';
import dateFns from 'date-fns';

import WeekList from './WeekList';
import donezu from '/static/donezu.svg';

class WeekView extends React.Component {
  constructor() {
    super();
    this.state = {
      weeksList: [dateFns.startOfWeek(new Date(), {weekStartsOn: 1})]
    }
    this.addWeek = this.addWeek.bind(this);
  }

  componentDidMount() {
    this.addWeek();
    this.addWeek();
    this.addWeek();
  }

  addWeek() {
    this.setState(prevState => ({
      weeksList: [...prevState.weeksList, dateFns.subWeeks(prevState.weeksList[0], prevState.weeksList.length)]
    }))
  }

  render() {
    return (
      <div>
        <div className="brand border-b border-steel-lite sticky bg-white pt-12 px-10">
          <img src={donezu} />
        </div>
        <div className="weeks py-3 px-10">
          {this.state.weeksList.map((week, i) => {
            return <WeekList key={i} startOfWeek={week} date={this.props.date} switchDates={this.props.switchDates}/>
          })}
        </div>
        <style jsx='true'>{`
          .brand {
            height: 8.3rem;
          }
        `}</style>
      </div>
    )
  }
}

export default WeekView;