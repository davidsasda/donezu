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
    if (this.state.toggle && this.state.query) {
      this.handleAddTask();
    }
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
      <div className="border-b border-steel-lite py-3 pl-2">
        <button 
          className="text-ake font-sans font-thin text-3xl"
          onClick={() => this.toggle()}
        >+</button>
        {this.state.toggle && 
          <input
            autoFocus
            className='text-ake font-sans font-thin text-lg ml-2'
            onChange={this.handleChange.bind(this)}
            onKeyPress={(event) => event.key === 'Enter' && this.handleAddTask()}
            type='text'
            value={this.state.query}
          ></input>}
      </div>
    )
  }
}

export default NewTask;