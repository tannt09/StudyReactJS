import { combineReducers } from 'redux'
import TodoReducer from './Reducer'

const RootReducer = combineReducers({
  data: TodoReducer,
})

export default RootReducer
