import React, { Component } from 'react'
import './Form.css'


class Form extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      description: '',
      error: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  checkSubmit = (event) => {
    event.preventDefault();
    if (!this.state.location || !this.state.description) {
      this.setState({
        error: 'Please Submit All Values'
      })
      return
    }
    this.postSubmit()
  }

  postSubmit = () => {
    postObject = {location: this.state.location, description: this.state.description}
    fetch('http://localhost:3001/sightings', {
      method: 'POST',
      body: JSON.stringify(postObject),
      headers: {
	      'Content-Type': 'application/json'
       }
    })
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      location: '',
      description: '',
      error: ''
    })
  }

  render() {
    return(
      <form>
        {!this.state.error && <h2>{this.state.error}</h2>}
        <input type='text' placeholder='Location' name="location" value={this.state.location} onChange={event => this.handleChange(event)}></input>
        <input type='text' placeholder='Description' name='description' value={this.state.description} onChange={event => this.handleChange(event)}></input>
        <button onClick=({event => this.checkSubmit(event)})>SUBMIT</button>
      </form>
    )
  }
}

export default Form;
