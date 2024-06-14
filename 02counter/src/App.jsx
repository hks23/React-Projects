import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//React updates all states directly without all jhanjhat of getElementById etc etc

function App() {
  
  let [counterValue, setCounterValue] = useState(0)
  //default value of counterValue is 0


  //now when we are trying to update the UI it not updating so to change states of all instances we use the useState
  //let counterValue = 0
  const addValue = ()=>{
   //counterValue = counterValue + 1;
   console.log("Value removed", Math.random());
   setCounterValue(counterValue + 1)
   setCounterValue(counterValue + 1)
   setCounterValue(counterValue + 1)
   setCounterValue(counterValue + 1)
  }

  const removeValue = ()=>{
    
    if(counterValue == 0){
      counterValue = 0
      setCounterValue(counterValue)
      
    }
    
    else{
      counterValue = counterValue - 1;
      console.log("Value removed", Math.random());
      setCounterValue(counterValue)
      
    }
    
  }

  return (
    <>
      <h1>Coffee and Froth</h1>
      <h2>Counter value: {counterValue}</h2>

      <button onClick={addValue}> Add Value </button>
      <br />
      <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
