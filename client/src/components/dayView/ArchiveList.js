import React from 'react';
import dateFns from 'date-fns';

import CompletedTask from './CompletedTask';

import api from '../../config/api';

class ArchiveList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      archive: []
    }
  }

  componentDidMount() {
    this.getArchive(this.props.userID, this.props.date);
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date || this.props.userID !== prevProps.userID) {
      this.getArchive(this.props.userID, this.props.date);
    }
  }

  getArchive(user, date) {
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MM');
    let day = dateFns.format(date, 'DD');
    if (!user) {
      return null
    } else {
      api.get(`/archives/${user}/${year}/${month}/${day}`)
      .then(res => {
        res.data.reverse();
        this.setState({
          archive: res.data
        });
      })
      .catch(err => {
        this.setState({
          archive: []
        })
      })
    }
  }

  render() {
    return (
      <div className='pb-12'>
        {this.state.archive.length > 0 && this.state.archive.map((obj, i) => {
          return <CompletedTask key={i} task={obj.task}/>
        })}
      </div>
    )
  }
}

export default ArchiveList;