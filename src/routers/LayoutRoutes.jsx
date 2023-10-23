import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
  Layout,
  HomeScreen,
  ContactScreen,
  AboutScreen,
  NotFound,
} from '@/views'

const LayoutRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/home', element: <HomeScreen /> },
        { path: '/contact', element: <ContactScreen /> },
        { path: '/about/*', element: <AboutScreen /> },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ])

  return routes
}

export default LayoutRoutes
