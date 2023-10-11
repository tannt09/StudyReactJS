import { createReducer } from '@reduxjs/toolkit'
import { incrementAction } from '../actions/IncrementAction'

const initialState = {
  count: 0,
}

const CountReducers = createReducer(initialState, (builder) =>
  builder
    .addCase(incrementAction, (state, action) => {
      console.log('Test Increment :::: ' + action.payload)
      state.count++
    })
    .addDefaultCase((state) => state),
)

export default CountReducers
