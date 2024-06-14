import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    //fragments
    <> 
      <h1 className='bg-green-400 text-black p-5 rounded-lg'>Tailwind Test</h1>
      <Card username="CoffeeWithReact" />
      <Card username="Harsh" />
    </>
  )
}

export default App
