import React from 'react'
import './App.css'
import { AboutScreen, ContactScreen, HomeScreen, Layout } from './views'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <LoginScreen /> */}
      {/* <SliderScreen /> */}
      {/* <TestUseEffect /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/about/*" element={<AboutScreen />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
