import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const DetailScreen = () => {
  const { id } = useParams()
  const location = useLocation()

  console.log('ID :::: ' + id)
  return <h1>{'DetailScreen' + location.state.name}</h1>
}

export default DetailScreen
