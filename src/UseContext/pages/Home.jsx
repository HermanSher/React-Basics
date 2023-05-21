import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

export const Home = () => {
  const {username}= useContext(AppContext);
  return (
    <div>Home page of {username}</div>
  )
}
