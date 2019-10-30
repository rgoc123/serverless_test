import React, { Component } from 'react'

export default class PlayersContainer extends Component {
  constructor() {
    super()
    this.state = {
      players: null
    }
  }

  async componentDidMount() {
    const playersStream = await fetch('https://hrvunvk5si.execute-api.us-west-2.amazonaws.com/prod/players')
    const playersRes = await playersStream.json()
    const players = playersRes.body

    this.setState({
      players: players
    })
  }

  render() {
    console.log(this.state)

    if (!this.state.players) {
      return (
        <p>Loading Players...</p>
      )
    } else {
      return (
        <h2>Players</h2>
      )
    }
  }

}
