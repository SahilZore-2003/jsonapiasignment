import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./Main.scss"
import { UserContextProvider } from './Context/UserContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
)
