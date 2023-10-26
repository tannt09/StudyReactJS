import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import RootReducer from '@/store/RootReducer'
// import createSagaMiddleware from 'redux-saga'
import { LayoutRoutes } from '@/routers'
import store from './libs/Redux/react-redux/Learn_1/redux/Store'

function App() {
  // const sagaMiddleware = createSagaMiddleware()
  // const store = configureStore({
  //   reducer: RootReducer,
  //   middleware: [sagaMiddleware],
  // })

  return (
    <>
      <Provider store={store}>
        {/* <TestReduxSaga /> */}
        {/* <TestUseEffect /> */}
        <LayoutRoutes />
      </Provider>
    </>
  )
}

export default App
