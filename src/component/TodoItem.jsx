/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch } from 'react-redux'
import '@/libs/Redux/react-redux/Learn_1/styles.css'
import { completeAction } from '@/libs/Redux/react-redux/Learn_1/redux/Action'

const TodoItem = ({ props }) => {
  const dispatch = useDispatch()

  const handleComplete = () => {
    dispatch(completeAction(props.id))
  }

  return (
    <h4
      className={
        props.completed ? 'todo-item-complete' : 'todo-item-not-complete'
      }
      onClick={handleComplete}
    >
      {props.task}
    </h4>
  )
}

export default TodoItem
