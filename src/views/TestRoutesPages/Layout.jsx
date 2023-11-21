import { CustomNavLink } from '@/component'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <h1>Header</h1>
        <nav>
          <ul className="WebHeader">
            <CustomNavLink params={{ link: '/home', namePage: 'Home' }} />
            <CustomNavLink params={{ link: '/contact', namePage: 'Contact' }} />
            <CustomNavLink params={{ link: '/about', namePage: 'About' }} />
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  )
}

export default Layout
