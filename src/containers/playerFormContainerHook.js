import React, { useState } from 'react';

const Example = () => {
  const [player, setPlayer] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    hometown: "",
    homeState: "",
    position: ""
  })

  console.log(player)

  const updateField = (e) => {
    const field = e.target.name
    const newVal = e.target.value

    setPlayer({ ...player, [field]: newVal})
  }

  return (
    <>
      <h2>New Form</h2>
      <form id="player-form">
      <input name="firstName" placeholder="First Name" onChange={updateField} />
      <input name="lastName" placeholder="Last Name" onChange={updateField} />
      </form>
    </>
  )
}

export default Example
