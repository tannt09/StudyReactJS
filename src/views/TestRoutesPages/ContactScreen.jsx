import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ContactScreen = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const userId = searchParams.get('userId')
  const [value, setValue] = React.useState(userId)

  const handleChangeText = (event) => {
    setValue(
      setValue(event.target.value),
      setSearchParams({
        userId: event.target.value,
      }),
    )
  }

  return <input value={value} onChange={handleChangeText}></input>
}

export default ContactScreen
