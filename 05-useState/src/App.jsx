import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num+1)
  }
  function decreaseNum() {
    if (num > 0) {
      setNum(num-1)
    }
  }
  function jump5Num() {
    setNum(num+5)
  }

  return (
    <div className="counter-app">
      <div className="counter-card">
        <p className="counter-label">Current Value</p>
        <h1 className="counter-value">{num}</h1>
        <div className="button-group">
          <button className="btn btn-secondary" onClick={decreaseNum}>Decrease</button>
          <button className="btn btn-primary" onClick={increaseNum}>Increase</button>
          <button className="btn btn-accent" onClick={jump5Num}>Increase by 5</button>
        </div>
      </div>
    </div>
  )
}

export default App