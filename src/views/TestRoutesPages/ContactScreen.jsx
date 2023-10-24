import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const ContactScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [value, setValue] = React.useState('')

  useEffect(() => {
    setSearchParams({ userId: value })
  }, [value])

  const handleChangeText = (event) => {
    setValue(event.target.value)
  }

  console.log(searchParams.get('userId'))

  return <input value={value} onChange={handleChangeText}></input>
}

export default ContactScreen
