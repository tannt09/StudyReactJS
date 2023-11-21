import React, { useEffect, useState } from 'react'
import { useStoreTodo } from '@/hook/useStoreTodo'
import { TodoItem } from '@/component'

const TodoList = () => {
  const [loadingTodoList, setLoadingTodoList] = useState(false)
  const { todo, loading } = useStoreTodo()

  useEffect(() => {
    setLoadingTodoList(loading)
  }, [loading])

  return loadingTodoList ? (
    <h1>Loading....</h1>
  ) : (
    <div className="TodoList">
      <h1>Test Todo List</h1>
      {todo.map((item) => {
        return <TodoItem key={item.id} props={item} />
      })}
    </div>
  )
}

export default TodoList
