import React from 'react';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  handleChange(event) {
    this.setState({
      query: event.target.value
    })
  }

  handleEnterKey(event) {
    if (event.key === 'Enter') {
      this.props.addTask(this.state.query);
    }
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.query}
          onChange={this.handleChange.bind(this)}
          onKeyPress={(event) => this.handleEnterKey(event)}
        ></input>
      </div>
    )
  }
}

export default NewTask;