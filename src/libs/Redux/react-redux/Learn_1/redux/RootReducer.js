import { combineReducers } from 'redux'
import TestReducer from './Reducer'

const RootReducer = combineReducers({
  data: TestReducer,
})

export default RootReducer
