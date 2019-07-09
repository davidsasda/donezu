import React from 'react';

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
    this.props.deleteTask(this.props.index);
  }
  handleCompleteTask() {
    this.props.completeTask(this.props.task, this.props.index);
  }

  render() {
    return (
      <div 
        className='bg-white hover:bg-sakura-lite border-b border-steel-lite py-3 pl-2'
        onMouseEnter={() => this.toggle()}
        onMouseLeave={() => this.toggle()}
      >
      {this.state.toggle &&
        <button 
          className="text-ake font-thin mr-2 z-10"
          onClick={() => this.handleDeleteTask()}
        >x</button>
      }
      <button
        className="text-ake"
        onClick={() => this.handleCompleteTask()}
      >
        {this.props.task}  
      </button>
      </div>
    )
  }
}

export default Task;

// const Task = ({task, deleteTask}) => {
//   let style = "bg-white hover:bg-sakura-lite border-b border-steel-lite py-3 pl-2";
  
//   if (task.status === 'complete') {
//     style = 'line-through text-steel bg-white hover:bg-steel-lite border-b border-steel-lite py-3 pl-2'
//   }
//   let toggle = false;

//   return (
//     <div className={style}>
//       {task.task}
//     </div>
//   )
// }