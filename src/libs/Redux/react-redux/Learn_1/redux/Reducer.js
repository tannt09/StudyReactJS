import { ActionType } from '@/constant'
import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todo: [
    {
      id: uuidv4(),
      task: 'Nguyen Van A',
      completed: false,
    },
    {
      id: uuidv4(),
      task: 'Nguyen Van B',
      completed: true,
    },
    {
      id: uuidv4(),
      task: 'Nguyen Van C',
      completed: true,
    },
    {
      id: uuidv4(),
      task: 'Nguyen Van D',
      completed: true,
    },
    {
      id: uuidv4(),
      task: 'Nguyen Van E',
      completed: true,
    },
  ],
  loading: false,
  error: '',
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    // SET COMPLETE USER
    case ActionType.COMPLETE_USER_SUCCESS_ACTION:
      state.todo.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        ...state,
        loading: false,
      }

    // SET DELETE USER
    case ActionType.DELETE_USER_SUCCESS_ACTION:
      return {
        ...state,
        loading: false,
        todo: state.todo.filter((item) => item.id !== action.payload),
      }

    // SET EDIT USER
    case ActionType.EDIT_USER_SUCCESS_ACTION:
      state.todo.map((item) => {
        if (item.id === action.payload.id) {
          item.task = action.payload.name
        }
        return item
      })
      return {
        ...state,
        loading: false,
      }

    // SET PENDING AND ERROR
    case ActionType.PENDING_ACTION:
      return {
        ...state,
        loading: true,
      }
    case ActionType.ERROR_ACTION:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default TodoReducer
