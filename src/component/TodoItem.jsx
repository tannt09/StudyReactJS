/* eslint-disable react/prop-types */
// LIB
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

// IMPORT
import '@/libs/Redux/react-redux/Learn_1/styles.css'
import '@/component/popup.css'
import {
  completeSuccessAction,
  deleteSuccessAction,
  errorAction,
  pendingAction,
} from '@/libs/Redux/react-redux/Learn_1/redux/Action'
import { PopUp } from '@/component'

const TodoItem = ({ props }) => {
  const [popUp, setPopUp] = useState(false)
  const dispatch = useDispatch()

  const handleComplete = () => {
    setTimeout(() => {
      try {
        dispatch(completeSuccessAction(props.id))
      } catch (err) {
        dispatch(errorAction(err))
      }
    }, 1000)
    dispatch(pendingAction())
  }

  const handleDelete = () => {
    setTimeout(() => {
      try {
        dispatch(deleteSuccessAction(props.id))
      } catch (err) {
        dispatch(errorAction(err))
      }
    }, 1000)
    dispatch(pendingAction())
  }

  return (
    <>
      <div className={popUp ? ' during-popup' : ''}>
        {popUp && <PopUp setPopUp={setPopUp} id={props.id} />}
      </div>
      <div className="todo-list">
        <h4
          className={
            props.completed ? 'todo-item-complete' : 'todo-item-not-complete'
          }
          onClick={handleComplete}
        >
          {props.task}
        </h4>
        <button className="todo-item-edit" onClick={() => setPopUp(true)}>
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
