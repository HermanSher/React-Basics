import React from 'react'
import { ChangeUser } from './ChangeUser'
import { useContext } from 'react'
import { AppContext } from '../App'

export const Profile = (props) => {
    const {username} = useContext(AppContext)
  return (
    <div>
        Profile page of {username}
        <ChangeUser/>
    </div>
  )
}
