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

  handleEnterKey(event) {
    if (event.key === 'Enter') {
      this.props.addTask(this.state.query);
      this.setState({
        query: '',
        toggle: !this.state.toggle
      })
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => (this.toggle())}>+</button>
        {this.state.toggle && 
          <input
            autoFocus
            type='text'
            value={this.state.query}
            onChange={this.handleChange.bind(this)}
            onKeyPress={(event) => this.handleEnterKey(event)}
          ></input>}
      </div>
    )
  }
}

export default NewTask;