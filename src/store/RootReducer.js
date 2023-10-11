import CountReducers from '@/redux/reducers/CountReducers'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
  increment: CountReducers,
})

export default RootReducer
