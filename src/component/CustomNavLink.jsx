/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

const CustomNavLink = ({ params }) => {
  return (
    <li>
      <NavLink
        to={params.link}
        style={(data) => ({
          color: data.isActive ? 'red' : 'blue',
        })}
      >
        {params.namePage}
      </NavLink>
    </li>
  )
}

export default CustomNavLink
