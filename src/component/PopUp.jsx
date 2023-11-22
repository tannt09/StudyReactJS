// LIB
import React from 'react'
import { useDispatch } from 'react-redux'

// IMPORT
import './popup.css'
import {
  editSuccessAction,
  editPendingAction,
  editErrorAction,
} from '@/libs/Redux/react-redux/Learn_1/redux/Action'

const PopUp = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setPopUp, id } = props

  const [inputValue, setInputValue] = React.useState('')
  const dispatch = useDispatch()

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleEdit = ({ user }) => {
    setTimeout(() => {
      try {
        dispatch(editSuccessAction(user))
      } catch (err) {
        dispatch(editErrorAction(err))
      }
    }, 1000)
    dispatch(editPendingAction())
  }

  return (
    <div className="PopUp">
      <button className="popup-x" onClick={() => setPopUp(false)}>
        X
      </button>
      <input type="text" value={inputValue} onChange={handleChange} />
      <div className="pu-button-container">
        <button onClick={() => handleEdit({ user: { name: inputValue, id } })}>
          Save
        </button>
        <button onClick={() => setPopUp(false)}>Cancel</button>
      </div>
    </div>
  )
}

export default PopUp
