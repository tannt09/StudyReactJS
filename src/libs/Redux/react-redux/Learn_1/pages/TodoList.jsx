import React from 'react'
import { useDispatch } from 'react-redux'
import { testRedux } from '../redux/Action'
import { useStoreTodo } from '@/hook/useStoreTodo'

const TodoList = () => {
  const { todo } = useStoreTodo()

  const dispatch = useDispatch()

  const handleClickTest = () => {
    dispatch(testRedux('hello'))
  }
  console.log('Test :::: ' + todo[0].task)
  return (
    <div className="TodoList">
      <h1>Test Todo List</h1>
      <button onClick={handleClickTest}>Test Redux</button>
    </div>
  )
}

export default TodoList
