import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>Counter APP</h1>
      <div className="card">

        <h3>Count is {count}</h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>

    </>
  )
}

export default App
