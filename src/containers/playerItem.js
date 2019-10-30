import React from 'react'

const PlayerItem = (props) => {
  const player = props.player

  return (
    <div className="player-item">
      <p>{player.FirstName} {player.LastName}</p>
    </div>
  )
}

export default PlayerItem
