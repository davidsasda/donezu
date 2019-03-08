import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      toggle: false
    }
  }

  toggle() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }
  
  handleAddTask() {
    this.props.addTask(this.state.query);
    this.setState({
      query: '',
      toggle: false
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>+</button>
        {this.state.toggle && 
          <input
            autoFocus
            type='text'
            value={this.state.query}
            onChange={this.handleChange.bind(this)}
            onKeyPress={(event) => event.key === 'Enter' && this.handleAddTask()}
          ></input>}
        {this.state.toggle &&
          <button onClick={() => this.handleAddTask()}> {'<'}</button>
        }
      </div>
    )
  }
}

export default NewTask;