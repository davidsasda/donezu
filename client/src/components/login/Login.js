import React from 'react';

import api from '../../../config/api';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  }

  handleChange(event, target) {
    this.setState({
      [target]: event.target.value
    })
  }

  handleRegister() {
    let query = {
      email: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    }
    api.post(`/users/register`, query)
    .then()
    .catch(err => console.log(err))
  }

  handleLogin() {
    let query = {
      email: this.state.username,
      password: this.state.password
    }
    api.post(`/users/login`, query, {withCredentials: true})
    .then(() => window.location.reload(false))
    .catch()
  }

  switchView(input) {
    this.setState({
      view: input
    });
  }

  handleView() {
    if (this.state.view === 'signup') {
      return (
        <div>
          Sign up
          <form>
            <input
              name='username'
              autoComplete='username'
              type='hidden'
            ></input>
            <label htmlFor='username'>Email:</label>
            <input
              autoFocus
              className=''
              onChange={event => this.handleChange(event, 'username')}
              name='username'
              autoComplete='off'
              type='text'
              value={this.state.username}
            ></input>
            <label htmlFor='new-password'>Password:</label>
            <input
              className=''
              onChange={event => this.handleChange(event, 'password')}
              name='new-password'
              autoComplete='new-password'
              type='password'
              value={this.state.password}
            ></input>
            <label htmlFor='new-password'>Confirm Password:</label>
            <input
              className=''
              onChange={event => this.handleChange(event, 'password2')}
              name='new-password'
              autoComplete='new-password'
              type='password'
              value={this.state.password2}
            ></input>
          </form>
          <button
            onClick={() =>this.handleRegister()}
          >Sign Up</button>
          Already have an account?
          <button
            className='text-ake'
            onClick={() => this.switchView('login')}
          >Log in</button>
        </div>
      )
    } else if (this.state.view === 'login') {
      return (
        <div>
          Log in
          <form>
            <label htmlFor='username'>Email:</label>
            <input
              autoFocus
              className=''
              onChange={event => this.handleChange(event, 'username')}
              name='username'
              autoComplete='username'
              type='text'
              value={this.state.username}
            ></input>
            <label htmlFor='current-password'>Password:</label>
            <input
              className=''
              onChange={event => this.handleChange(event, 'password')}
              onKeyPress={event => event.key === 'Enter' && this.handleEnterKey()}
              name='current-password'
              autoComplete='current-password'
              type='password'
              value={this.state.password}
            ></input>
          </form>
          <button
            onClick={() =>this.handleLogin()}
          >Login</button>
          Don't have an account?
          <button
            className='text-ake'
            onClick={() => this.switchView('signup')}
          >Create account</button>
        </div>
      )
    } else {
      return (
        <div>
          <button
            onClick={() => this.switchView('signup')}
          >Sign up</button>
          <button
            className='text-ake'
            onClick={() => this.switchView('login')}
          >Log in</button>
        </div>
      )
    }
  }

  render() {
    return this.handleView();
  }
}

export default Login;