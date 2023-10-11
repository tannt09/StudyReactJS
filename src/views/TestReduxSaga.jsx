import { useActions } from '@/hook/useActions'
import { incrementAction } from '@/redux/actions/IncrementAction'
import React from 'react'
import { useSelector } from 'react-redux'

const TestReduxSaga = () => {
  const increment = useActions(incrementAction)
  const count = useSelector((state) => state.increment.count)

  const handleIncrement = React.useCallback(() => {
    increment('Hello')
  }, [increment])

  return (
    <>
      <h1>Count :::: {count}</h1>
      <button onClick={handleIncrement}>Increment ++++</button>
    </>
  )
}

export default TestReduxSaga
