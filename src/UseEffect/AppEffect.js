import React from 'react'
import { useState } from 'react'

import Text from './Text'
import './App.css'

const AppEffect = () => {
  const [toggle,setToggle] = useState(false)

  const handleInput = ()=>{
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <button onClick={handleInput}>hide/show</button>
      {toggle && <Text/>}
    </div>
  )
}

export default AppEffect