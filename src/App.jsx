import { useState } from 'react'
import './App.css'
import { LoginScreen } from './views'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginScreen/>
    </>
  )
}

export default App
