import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailScreen = () => {
  const { id } = useParams()
  const location = useLocation()

  console.log('ID :::: ' + id)
  return <h3>{'DetailScreen' + location.state.emailTest}</h3>
}

export default DetailScreen
