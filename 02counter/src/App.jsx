import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  //let counter=5
  let [counter,setCounter]=useState(15)
  const addValue=()=>{
    //counter=counter+1
    if(counter==20)
      setCounter(counter=20)
    else
      setCounter(counter+1)
  }
  const removeValue=()=>{
    if(counter==0)
      setCounter(counter=0)
    else
      setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
