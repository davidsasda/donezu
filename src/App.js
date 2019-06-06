import React from 'react';
import ReactDOM from 'react-dom';
import DayView from './components/dayView/DayView'
import WeekView from './components/weekPane/WeekView';
import data from './exampleData.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: data.tasks
    }
    this.addTask = this.addTask.bind(this);
  };

  componentDidMount() {
    console.log('sample data', this.state.tasks);
  }

  addTask(task, dueDate = '') {
    let newTask = {
      task: task,
      due: dueDate,
      status: 'incomplete'
    };
    if (task) {
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
        <div className="h-screen overflow-y-auto w-64 font-light text-sm tracking-tight hidden sm:block">
          <WeekView />
        </div>
        <div className="h-screen flex-col flex-grow text-ake">
          <DayView tasks={this.state.tasks} addTask={this.addTask}/>
        </div>
      </div>
    )
  };
}

ReactDOM.render(<App />, document.getElementById("App"));