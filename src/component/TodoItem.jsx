/* eslint-disable react/prop-types */
// LIB
import React from 'react'
import { useDispatch } from 'react-redux'

// IMPORT
import '@/libs/Redux/react-redux/Learn_1/styles.css'
import {
  completeErrorAction,
  completePendingAction,
  completeSuccessAction,
  deleteErrorAction,
  deletePendingAction,
  deleteSuccessAction,
  editSuccessAction,
} from '@/libs/Redux/react-redux/Learn_1/redux/Action'

const TodoItem = ({ props }) => {
  const dispatch = useDispatch()

  const handleComplete = () => {
    setTimeout(() => {
      try {
        dispatch(completeSuccessAction(props.id))
      } catch (err) {
        dispatch(completeErrorAction(err))
      }
    }, 1000)
    dispatch(completePendingAction())
  }

  const handleDelete = () => {
    setTimeout(() => {
      try {
        dispatch(deleteSuccessAction(props.id))
      } catch (err) {
        dispatch(deleteErrorAction(err))
      }
    }, 1000)
    dispatch(deletePendingAction())
  }

  const handleEdit = ({ user }) => {
    setTimeout(() => {
      try {
        dispatch(editSuccessAction(user))
      } catch (err) {
        // dispatch(deleteErrorAction(err))
      }
    }, 1000)
    dispatch(deletePendingAction())
  }

  return (
    <>
      <div className="todo-list">
        <h4
          className={
            props.completed ? 'todo-item-complete' : 'todo-item-not-complete'
          }
          onClick={handleComplete}
        >
          {props.task}
        </h4>
        <button
          className="todo-item-edit"
          onClick={() =>
            handleEdit({ user: { name: 'Test1111', id: props.id } })
          }
        >
          Edit
        </button>
        <button className="todo-item-delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  )
}

export default TodoItem
