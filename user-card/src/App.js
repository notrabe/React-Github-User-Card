import React from 'react';
import './App.css';
import axios from 'axios';
import User from './User';

class App extends React.Component {
  constructor() {
    super();
    this.state= {
      user: []
    }
    console.log('constructor is running');
  }

  componentDidMount() {
    console.log('CDM is running.')
    axios.get('https://api.github.com/users/notrabe')
      .then(res => {
        console.log(res.data)
        this.setState({
          user: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })

      axios.get('https://api.github.com/users/notrabe/followers')
        .then(res => {
          console.log(res)
          this.setState({
            followers:res
          })
        })
        .catch(err => {
          console.log(err)
        })
  }

  componentDidUpdate() {
    console.log('CDU is running')
  }

  render() {
    console.log('rendering', this.state.user.length);
    return (
      <div className = 'App'>
        <User user={this.state.user} followers = {this.state.followers}/>
      </div>
    )
  }
}

export default App;