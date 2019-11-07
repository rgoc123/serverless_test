import React from 'react';
import './App.css';

import PlayersContainer from './containers/playersContainer'
import PlayerFormContainer from './containers/playerFormContainer'
import Example from './containers/playerFormContainerHook'

function App() {
  return (
    <div className="App">
      <h1>Bob's Cool NFL Site</h1>
      <PlayersContainer />
      <PlayerFormContainer />
    </div>
  )
}

export default App;
