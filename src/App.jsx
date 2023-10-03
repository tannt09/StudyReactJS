import React from 'react'
import './App.css'
import { AboutScreen, ContactScreen, HomeScreen } from './views'
import { Route, Routes, Link } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <SliderScreen /> */}
      {/* <TestUseEffect /> */}
      <ul className="WebHeader">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomeScreen />}>
          Home
        </Route>
        <Route path="/contact" element={<ContactScreen />}>
          Contact
        </Route>
        <Route path="/about" element={<AboutScreen />}>
          About
        </Route>
      </Routes>
    </>
  )
}

export default App
