import React, { Component } from 'react'

import '../styles/players.css'

export default class PlayerForm extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      birthday: "",
      hometown: "",
      homeState: "",
      position: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    console.log("Submitting form")
    const stream = await fetch('https://hrvunvk5si.execute-api.us-west-2.amazonaws.com/prod/players', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        birthday: this.state.birthday,
        hometown: this.state.hometown,
        homeState: this.state.homeState,
        position: this.state.position,
      })
    })

    console.log(response)
  }

  handleChange(field, e) {
    this.setState({
      [field]: e.target.value
    })
  }

  render() {
    return (
      <>
        <h2>Player Form</h2>
        <form id="player-form">
          <input value={this.state.firstName}
            placeholder="First Name"
            onChange={(e) => this.handleChange("firstName", e)}/ >
          <input value={this.state.lastName} placeholder="Last Name" onChange={(e) => this.handleChange("lastName", e)}/ >
          <input value={this.state.birthday} placeholder="Birthday" onChange={(e) => this.handleChange("birthday", e)}/ >
          <input value={this.state.hometown} placeholder="Hometown" onChange={(e) => this.handleChange("hometown", e)}/ >
          <input value={this.state.homeState} placeholder="Home State" onChange={(e) => this.handleChange("homeState", e)}/ >
          <input value={this.state.position} placeholder="Position" onChange={(e) => this.handleChange("position", e)}/ >
          <button type="submit" onClick={this.handleSubmit}>Add Player</button>
        </form>
      </>
    )
  }
}
