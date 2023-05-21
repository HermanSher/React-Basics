import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export const ChangeUser = () => {
    const [newUsername, setNewUsername] = useState("")
    const {setUsername} = useContext(AppContext)
  return (
    <div>
        <input onChange={(event)=>{setNewUsername(event.target.value)}}/>
        <button onClick={()=>{setUsername(newUsername)}}>Change name</button>
    </div>
  )
}
