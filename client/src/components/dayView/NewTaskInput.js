import React from 'react';
import dateFns from 'date-fns';

class NewTaskInput extends React.Component {
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
  
  handleAddTask() {
    this.props.addTask(this.state.query);
    this.setState({
      query: ''
    })
  }
  
  render() {
    return (
      <div className='sticky bg-white h-32 sm:mb-1'>
        <div className='pt-4 sm:pt-10 outline-none border-b border-steel-lite'>
          <div className='text-xl md:text-2xl h-12 font-thin ml-2'>
            <b className='font-bold'>{dateFns.format(this.props.date, 'dddd')}</b>
            {dateFns.format(this.props.date, ' — MMMM Do, YYYY')}
          </div>
          <div className='add-task relative'>
            <label className='add-icon text-ake font-thin text-3xl ml-2 z-10 absolute'>+</label>
            <input
              autoFocus
              className='add-task text-sm text-ake leading-loose hover:bg-sakura-lite focus:bg-sakura-lite outline-none p-2 pl-8 min-w-full'
              onChange={this.handleChange.bind(this)}
              onKeyPress={(event) => event.key === 'Enter' && this.handleAddTask()}
              type='text'
              value={this.state.query}
            ></input>
          </div>
        </div>
        <style jsx='true'>{`
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

export default NewTaskInput;