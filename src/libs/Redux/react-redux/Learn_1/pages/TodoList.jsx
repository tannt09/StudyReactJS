import React from 'react'
import { useDispatch } from 'react-redux'
import { testRedux } from '../redux/Action'

const TodoList = () => {
  const dispatch = useDispatch()

  const handleClickTest = () => {
    dispatch(testRedux('hello'))
  }
  return (
    <div className="TodoList">
      <h1>Test Todo List</h1>
      <button onClick={handleClickTest}>Test Redux</button>
    </div>
  )
}

export default TodoList
