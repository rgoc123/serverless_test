import React, { Component } from 'react'

import PlayerItem from './playerItem'

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

  playersList() {
    return this.state.players.map(player => {
      return <PlayerItem key={player.PlayerId} player={player} />
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
        <>
          <h2>Players</h2>
          <div className="players-list">
            {this.playersList()}
          </div>
        </>
      )
    }
  }

}
