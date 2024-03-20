import React, { useState } from 'react'
import ButtonIncrease from './ButtonIncrease';
import ButtonDecrease from './ButtonDecrease';
import ButtonReset from './ButtonReset';
import '../Counter.css';

export default function Counter() {

  const [counter,setCounter] = useState(0)

  function increaseCounter() {
    setCounter(counter + 1)

  }
  
  function decreaseCounter() {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  
  function resetCounter() {
    setCounter(0)
  }

  return (
    <div className='counter-container'>
      <div className='counter-box'>
        <h1 id='counter'>Counter: {counter}</h1>
        <div className='counter-controls'>
          <ButtonIncrease onClick={increaseCounter} />
          <ButtonDecrease onClick={decreaseCounter} />
          <ButtonReset onClick={resetCounter} />
        </div>
      </div>
        
        
    </div>
  )
}



