import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './components/dayView/DayView'
import WeekView from './components/weekPane/WeekView';

const axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userID: '123',
      tasks: []
    }
    this.addTask = this.addTask.bind(this);
    this.setState = this.setState.bind(this);
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    axios.get(`http://localhost:3000/db/${this.state.userID}`)
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
      axios.post(`http://localhost:3000/db/${this.state.userID}`, newTask)
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

  render() {
    return (
      <div className="flex font-sans">
        <WeekView />
        <DayView tasks={this.state.tasks} addTask={this.addTask}/>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));