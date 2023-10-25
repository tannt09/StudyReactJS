import React from 'react'
import { useRoutes } from 'react-router-dom'
import {
  Layout,
  HomeScreen,
  ContactScreen,
  AboutScreen,
  NotFound,
} from '@/views'
import { TodoList } from '@/libs/Redux/react-redux/Learn_1'

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
    {
      path: '/todoList',
      element: <TodoList />,
    },
  ])

  return routes
}

export default LayoutRoutes
