import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './components/dayView/DayView'
import WeekView from './components/weekPane/WeekView';

const axios = require('axios');
const server = 'http://localhost:3000';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: '123',
      tasks: []
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.setState = this.setState.bind(this);
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios.get(`${server}/db/${this.state.userID}`)
    .then(data => {
      this.setState({
        tasks: data.data
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  addTask(task, dueDate = '') {
    let newTask = {
      userID: this.state.userID,
      task: task,
      due: dueDate
    };
    if (task) {
      axios.post(`${server}/db/${this.state.userID}`, newTask)
      .catch(err => {
        console.log(err);
      })

      this.setState(prevState => ({
        tasks: [newTask, ...prevState.tasks]
      }));
    } else {
      console.log('Failed to add new task.')
    }
  }

  deleteTask(task, index) {
    axios.delete(`${server}/db/${this.state.userID}/${task._id}`)
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
      console.log(err);
    });
  }

  render() {
    return (
      <div className="flex font-sans">
        <WeekView />
        <DayView tasks={this.state.tasks} addTask={this.addTask} deleteTask={this.deleteTask}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));