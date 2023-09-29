import axios from 'axios'
import React from 'react'

const TestUseEffect = () => {
  const [data, setData] = React.useState([])
  const [newData, setNewData] = React.useState([])
  const [error, setError] = React.useState()
  const [loading, setLoading] = React.useState(false)

  const handleApiUser = () => {
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((rs) => {
        setData(rs.data)
        setNewData(rs.data)
        setError()
        setLoading(false)
      })
      .catch((er) => {
        console.log('Error ::::1111 ' + er)
        setError(er)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    handleApiUser()
  }, [])

  const handleSearchChange = (event) => {
    setNewData(
      data.filter((item) => {
        const name = item.name.toLowerCase()
        const textSearch = event.target.value.toLowerCase()
        return name.includes(textSearch)
      }),
    )
  }

  console.log('Error ::::2222 ' + error)
  return (
    <>
      {loading && <h1>Loading...</h1>}
      <input type="text" placeholder="Search" onChange={handleSearchChange} />
      {newData.map((item) => {
        return (
          <li key={item.id} style={{ textAlign: 'left', color: 'black' }}>
            {item.name}
          </li>
        )
      })}
    </>
  )
}

export default TestUseEffect
