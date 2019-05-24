import React from 'react';

let style = "bg-white hover:bg-sakura-lite border-b border-steel-lite py-3 pl-2";

// const Task = ({task, deleteTask}) => {
//   let style = "bg-white hover:bg-sakura-lite border-b border-steel-lite py-3 pl-2";
  
//   if (task.status === 'complete') {
//     style = 'line-through text-steel bg-white hover:bg-steel-lite border-b border-steel-lite py-3 pl-2'
//   }
//   let toggle = false;

//   return (
//     <div className={style}
//       onMouseEnter={() => {toggle = !toggle}}
//       onMouseLeave={() => {toggle = !toggle}}
//     >
//       {task.task}
//       {toggle ? <button onClick={() => deleteTask(task)}> 'x' </button> : null}
//     </div>
//   )
// }

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    }
  }
  toggle() {
    this.setState({
      toggle: !this.state.toggle
    });
  }
  handleDeleteTask() {
    this.props.deleteTask(this.props.task, this.props.index);
  }

  render() {
    return (
      <div className={style}
        onMouseEnter={() => this.toggle()}
        onMouseLeave={() => this.toggle()}
      >
        {this.props.task.task}
        {this.state.toggle &&
          <button onClick={() => this.handleDeleteTask()}
        >x</button>}
      </div>
    )
  }
}

export default Task;