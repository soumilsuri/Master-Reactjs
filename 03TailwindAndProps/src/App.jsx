import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="text-3xl font-bold rounded-md bg-violet-400 mb-4">Hello tailwind</button>
      <Card price="0.01" />
      <Card name="monkey boy"  />
    </>
  )
}

export default App
