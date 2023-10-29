import React from 'react'
import { useStoreTodo } from '@/hook/useStoreTodo'
import { TodoItem } from '@/component'

const TodoList = () => {
  const { todo } = useStoreTodo()

  return (
    <div className="TodoList">
      <h1>Test Todo List</h1>
      {todo.map((item) => {
        return <TodoItem key={item.id} props={item} />
      })}
    </div>
  )
}

export default TodoList
