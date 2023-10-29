/* eslint-disable react/prop-types */
import React from 'react'

const TodoItem = ({ props }) => {
  return (
    <h4
      className={
        props.completed ? 'todo-item-complete' : 'todo-item-not-complete'
      }
    >
      {props.task}
    </h4>
  )
}

export default TodoItem
