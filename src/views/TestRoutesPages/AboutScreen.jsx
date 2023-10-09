import { AboutRouters } from '@/routers'
import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'

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
        <ul
          className="WebUserDetail"
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          {data.map((item) => {
            const dataTransmit = {
              nameTest: item.name,
              emailTest: item.email,
            }
            return (
              <h5 key={item.id} style={{ marginRight: '20px' }}>
                <NavLink to={'detail/' + item.id} state={dataTransmit}>
                  Detail {item.id}
                </NavLink>
              </h5>
            )
          })}
        </ul>
      </nav>
      <AboutRouters />
    </>
  )
}

export default AboutScreen
