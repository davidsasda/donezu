import React from 'react';
import dateFns from 'date-fns';

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
      <div className="sticky bg-white">
        <div className="pt-8 outline-none border-b border-steel-lite">
          <div className="text-3xl tracking-tight font-thin pb-4 ml-2">
            <b className="font-bold">{dateFns.format(new Date(), 'dddd')}</b>
            {dateFns.format(new Date(), ' — MMMM Do, YYYY')}
          </div>
          <div className="add-task relative">
            <label className="add-icon text-ake font-thin text-3xl ml-2 z-10 absolute">+</label>
            <input
              autoFocus
              className='add-task text-sm text-ake leading-loose hover:bg-sakura-lite focus:bg-sakura-lite outline-none -ml-0 p-2 pl-8 min-w-full'
              onChange={this.handleChange.bind(this)}
              onKeyPress={(event) => event.key === 'Enter' && this.handleAddTask()}
              type='text'
              value={this.state.query}
            ></input>
          </div>
        </div>
        <style jsx>{`
          .add-icon {
            top: 0.25rem;
          }
          .add-task {
            transition: all 0.2s ease-in-out;
            border-bottom: 1px solid #e8e8e8;
            margin-bottom: -0.05rem;
          }
          .add-task::placeholder {
            font-weight: lighter;
          }
          .add-task:focus {
            border-bottom: 1px solid #BC002D;
          }
          .sticky {
            top: 0;
          }
        `}</style>
      </div>
    )
  }
}

export default NewTask;