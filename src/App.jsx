import React from 'react'
import './App.css'
import { TestReduxSaga } from '@/views'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import RootReducer from '@/store/RootReducer'
import createSagaMiddleware from 'redux-saga'

function App() {
  const sagaMiddleware = createSagaMiddleware()
  const store = configureStore({
    reducer: RootReducer,
    middleware: [sagaMiddleware],
  })

  return (
    <>
      <Provider store={store}>
        <TestReduxSaga />
      </Provider>
      {/* <TestUseEffect /> */}
      {/* <LayoutRoutes /> */}
    </>
  )
}

export default App
