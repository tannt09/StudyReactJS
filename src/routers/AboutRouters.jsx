import React from 'react'
import { useRoutes } from 'react-router-dom'
import { DetailScreen } from '@/views'

const AboutRouters = () => {
  const element = useRoutes([{ path: 'detail/:id', element: <DetailScreen /> }])
  return element
}

export default AboutRouters
