import React from 'react'
import './App.css'
import { AboutScreen, ContactScreen, HomeScreen, Layout } from './views'
import { useRoutes } from 'react-router-dom'

function App() {
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
  ])

  return routes
  // return (
  //   <>
  //     {/* <LoginScreen /> */}
  //     {/* <SliderScreen /> */}
  //     {/* <TestUseEffect /> */}
  //     <Routes>
  //       <Route path="/" element={<Layout />}>
  //         <Route path="/home" element={<HomeScreen />} />
  //         <Route path="/contact" element={<ContactScreen />} />
  //         <Route path="/about/*" element={<AboutScreen />} />
  //       </Route>
  //     </Routes>
  //   </>
  // )
}

export default App
