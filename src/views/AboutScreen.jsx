import React from 'react'
import axios from 'axios'
import { NavLink, Route, Routes } from 'react-router-dom'
import { DetailScreen } from '.'

const AboutScreen = () => {
  const [data, setData] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const handleApiUser = () => {
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((rs) => {
        setData(rs.data)
        setLoading(false)
      })
      .catch((er) => {
        setLoading(false)
      })
  }

  React.useEffect(() => {
    handleApiUser()
  }, [])
  return (
    <>
      {loading ?? <h1>Loading...</h1>}
      <nav>
        <ul className="WenUserDetail">
          {data.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={'detail/' + item.id} state={item}>
                  {' '}
                  Detail {item.id}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
      <Routes>
        <Route path="detail/:id" element={<DetailScreen />} />
      </Routes>
    </>
  )
}

export default AboutScreen
