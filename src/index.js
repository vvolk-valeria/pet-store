import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App/App'
import './index.css'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
    <BrowserRouter 
    basename="pet-store"
    >
    <App />
    </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
