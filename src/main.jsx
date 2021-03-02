import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {StoreContext} from 'redux-react-hook'
import {makeStore} from './Store'


const store = makeStore()

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value = {store}>
      <App/>
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
