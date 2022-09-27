import React, { Component } from 'react'
import Container from './Container'
import Form from './Form'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    sightings: [],
    error: ''
    }
  }


  componentDidMount = () => {
    fetch('http://localhost:3001/sightings')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        sightings: data
      })
    })
    .catch((error) => {
      this.setState({
        error: `Sorry, we seem to be having a ${error.message}`
      })
    })
  }

  componentDidUpdate = () => {
    fetch('http://localhost:3001/sightings')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        sightings: data
      })
    })
    .catch((error) => {
      this.setState({
        error: `Sorry, we seem to be having a ${error.message}`
      })
    })
    }
  }

  render() {
  return (
    <div className="App">
      <h1>Welcome to alien friend finder!</h1>
      {!this.state.error && <h2>{this.state.error}</h2>}
      <Form />
      {!this.state.sightings && <Container sightings={this.state.sightings} />}
    </div>
  )
  }
}

export default App;
