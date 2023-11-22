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
    case ActionType.COMPLETE_USER_PENDING_ACTION:
      return {
        ...state,
        loading: true,
      }
    case ActionType.COMPLETE_USER_ERROR_ACTION:
      return {
        ...state,
        error: action.payload,
      }
    case ActionType.DELETE_USER_SUCCESS_ACTION:
      return {
        ...state,
        loading: false,
        todo: state.todo.filter((item) => item.id !== action.payload),
      }
    case ActionType.DELETE_USER_PENDING_ACTION:
      return {
        ...state,
        loading: true,
      }
    case ActionType.DELETE_USER_ERROR_ACTION:
      return {
        ...state,
        error: action.payload,
      }
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
    case ActionType.EDIT_USER_PENDING_ACTION:
      return {
        ...state,
        loading: true,
      }
    case ActionType.EDIT_USER_ERROR_ACTION:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default TodoReducer
