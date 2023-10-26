import { v4 as uuidv4 } from 'uuid'

const initialState = {
  todo: [
    {
      id: uuidv4,
      task: 'Nguyen Van A',
      completed: false,
    },
    {
      id: uuidv4,
      task: 'Nguyen Van B',
      completed: true,
    },
  ],
}

const TestReducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case 'TEXT_REDUX':
      console.log('Get payload ::::1111' + action.payload)
      return {
        ...state,
      }
    default:
      return state
  }
}

export default TestReducer
