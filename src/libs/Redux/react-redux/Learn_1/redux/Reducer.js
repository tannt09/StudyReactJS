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
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COMPLETE_USER_ACTION:
      state.todo.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed
        }
        return item
      })
      return {
        ...state,
      }
    default:
      return state
  }
}

export default TodoReducer
