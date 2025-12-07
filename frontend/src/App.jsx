import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Flashcard from './Flashcard.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Flashcard front="Welcome" back="Hello!" />
    </>
  )
}

export default App
