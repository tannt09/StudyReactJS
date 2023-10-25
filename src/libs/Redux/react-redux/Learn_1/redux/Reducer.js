const initialState = {
  todo: [
    {
      task: 'Nguyen Van A',
      completed: false,
    },
    {
      task: 'Nguyen Van B',
      completed: true,
    },
  ],
}

const TestReducer = (state = initialState, action) => {
  switch (action.type) {
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
