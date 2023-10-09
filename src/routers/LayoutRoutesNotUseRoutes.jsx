import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout, HomeScreen, ContactScreen, AboutScreen } from '@/views'

const LayoutRoutesNotUseRoutes = () => {
  return (
    <>
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

export default LayoutRoutesNotUseRoutes
