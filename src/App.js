import React, { useState } from 'react'
import CountDownTimer from './components/CoundDownTimer'
import DaysCountDown from './components/DaysCountDown'

import "./App.css"

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ ctime, setCtime ] = useState(time)

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  }

  setInterval(UpdateTime, 1000)

  return (
    <div className="time">
    <h1>{ctime}</h1>
    <CountDownTimer />
    <DaysCountDown />
    </div>
  )
}

export default App;