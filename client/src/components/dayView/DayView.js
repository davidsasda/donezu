import React from 'react';
import dateFns from 'date-fns';

import NewTaskInput from './NewTaskInput';
import TaskList from './TaskList';
import ArchiveList from './ArchiveList';

import api from '../../utils/api';

class DayView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      completed: []
    }
    this.setState = this.setState.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  componentDidMount() {
    this.getTasks();
    this.getArchive();
  }

  getTasks() {
    api.get(`/db/${this.props.userID}`)
    .then(res => {
      res.data.reverse();
      this.setState({
        tasks: res.data
      })
    })
    .catch(err => {
      // console.log(err);
    })
  }

  addTask(task) {
    if (task) {
      api.post(`/db/${this.props.userID}`, {task: task})
      .catch(err => {
        console.log(err);
      })
      .then(() => {
        this.setState(prevState => ({
          tasks: [{task: task}, ...prevState.tasks]
        }));
      })
    } else {
      // console.log('Failed to add new task.')
    }
  }

  deleteTask(index) {
    let dbIndex = (this.state.tasks.length - index - 1);
    api.delete(`/db/${this.props.userID}/${dbIndex}`)
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

  getArchive(date = new Date()) {
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MM');
    let day = dateFns.format(date, 'DD');
    api.get(`/archives/${this.props.userID}/${year}/${month}/${day}`)
    .then(res => {
      res.data.reverse();
      this.setState({
        completed: res.data
      });
    })
    .catch(err => {
      // console.log(err);
    })
  }

  completeTask(task, index) {
    let date = new Date();
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MM');
    let day = dateFns.format(date, 'DD');
    api.post(`/archives/${this.props.userID}/${year}/${month}/${day}`, {task: task, date: date})
    .then(() => {
      this.deleteTask(index);
      this.setState(prevState => ({
        completed: [{task: task}, ...prevState.completed]
      }));
    })
    .catch(err => {
      // console.log(err);
    })
  }

  renderList() {
    if (!dateFns.isToday(this.props.date)) {
      return (
        <div>
          <ArchiveList
            userID={this.props.userID}
            date={this.props.date}
          />
        </div>
      )
    } else {
      return (
        <div>
          {this.state && this.state.tasks && 
            <TaskList
              tasks={this.state.tasks}
              completed={this.state.completed}
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
            />
          }
        </div>
      )
    }
  }

  render() {
    return (
      <div className='h-screen overflow-y-auto px-4 md:px-12 lg:px-24'>
        <NewTaskInput
          date={this.props.date} 
          addTask={this.addTask}
        />
        {this.renderList()}
      </div>
    )
  }
}

export default DayView;