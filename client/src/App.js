import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './components/dayView/DayView'
import WeekView from './components/weekPane/WeekView';
import dateFns from 'date-fns';

const axios = require('axios');
const server = 'http://localhost:3000';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: '123',
      tasks: [],
      completed: []
    }
    this.setState = this.setState.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  };

  componentDidMount() {
    this.getTasks();
    this.getArchive();
  }

  getTasks() {
    axios.get(`${server}/db/${this.state.userID}`)
    .then(res => {
      res.data.reverse();
      this.setState({
        tasks: res.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  addTask(task) {
    if (task) {
      axios.post(`${server}/db/${this.state.userID}`, {task: task})
      .catch(err => {
        console.log(err);
      })
      this.setState(prevState => ({
        tasks: [{task: task}, ...prevState.tasks]
      }));
    } else {
      console.log('Failed to add new task.')
    }
  }

  deleteTask(index) {
    let dbIndex = (this.state.tasks.length - index - 1);
    axios.delete(`${server}/db/${this.state.userID}/${dbIndex}`)
    .then(() => {
      let updatedTasks = this.state.tasks;
      if (index === 0) {
        updatedTasks.shift();
      } else {
        updatedTasks = [...updatedTasks.slice(0, index), ...updatedTasks.slice(index + 1)];
      }
      this.setState({
        tasks: updatedTasks
      });
    })
    .catch(err => {
      let updatedTasks = this.state.tasks;
      if (index === 0) {
        updatedTasks.shift();
      } else {
        updatedTasks = [...updatedTasks.slice(0, index), ...updatedTasks.slice(index + 1)];
      }
      this.setState({
        tasks: updatedTasks
      });
    });
  }

  getArchive() {
    let date = new Date();
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MMMM');
    let day = dateFns.format(date, 'DD');
    axios.get(`${server}/archives/${this.state.userID}/${year}/${month}/${day}`)
    .then(res => {
      res.data.reverse();
      this.setState({
        completed: res.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  completeTask(task, index) {
    let date = new Date();
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MMMM');
    let day = dateFns.format(date, 'DD');
    axios.post(`${server}/archives/${this.state.userID}/${year}/${month}/${day}`, {task: task, date: date})
    .then(() => {
      this.deleteTask(index);
      this.setState(prevState => ({
        completed: [{task: task}, ...prevState.completed]
      }));
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div>
        <div className="sticky w-full h-16 bg-white shadow z-20 sm:hidden">
          boink
        </div>
        <div className="flex font-sans">
          <div className="h-screen overflow-y-auto w-64 font-light text-sm tracking-tight hidden sm:block">
            <WeekView />
          </div>
          <div className="h-screen flex-col flex-grow text-ake">
            <DayView 
              tasks={this.state.tasks}
              completed={this.state.completed}
              addTask={this.addTask}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
          </div>
        </div>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));