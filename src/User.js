import React from 'react'
import api from './api'

export default class User extends React.Component {
  state = {
    isLoading: true,
    error: null,
    user: null
  }

  componentDidMount() {
    api.getUser()
      .then(user => {
        this.setState({ user, isLoading: false })
      })
      .catch(err => this.setState({ error: err, isLoading: false }))
  }

  render() {
    const { isLoading, user, error } = this.state
    return isLoading
      ? (
        <div>loading...</div>
      ) : error ? <div>{error}</div> : <div>user: {user.name.first} {user.name.last} </div>
  }
}