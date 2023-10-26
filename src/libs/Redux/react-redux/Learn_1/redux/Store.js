import { applyMiddleware, createStore } from 'redux'
import RootReducer from './RootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
