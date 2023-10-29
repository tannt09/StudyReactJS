import React from 'react'
import { useDispatch } from 'react-redux'
import { testRedux } from '../redux/Action'
import { useStoreTodo } from '@/hook/useStoreTodo'
import { TodoItem } from '@/component'

const TodoList = () => {
  const { todo } = useStoreTodo()

  const dispatch = useDispatch()

  const handleClickTest = () => {
    dispatch(testRedux('hello'))
  }

  return (
    <div className="TodoList">
      <h1>Test Todo List</h1>
      <button onClick={handleClickTest}>Test Redux</button>
      {todo.map((item) => {
        return <TodoItem key={item.id} props={item} />
      })}
    </div>
  )
}

export default TodoList
