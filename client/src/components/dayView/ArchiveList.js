import React from 'react';
import dateFns from 'date-fns';

import CompletedTask from './CompletedTask';

const axios = require('axios');
const server = 'http://localhost:3000';

class ArchiveList extends React.Component {
  constructor() {
    super();
    this.state = {
      archive: []
    }
  }

  componentDidMount() {
    this.getArchive(this.props.date);
  }

  getArchive(date) {
    let year = dateFns.format(date, 'YYYY');
    let month = dateFns.format(date, 'MM');
    let day = dateFns.format(date, 'DD');
    axios.get(`${server}/archives/${this.props.userID}/${year}/${month}/${day}`)
    .then(res => {
      res.data.reverse();
      this.setState({
        archive: res.data
      });
    })
    .catch(err => {
      // console.log(err);
    })
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