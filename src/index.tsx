import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'components/App'
import { HashRouter as Router } from 'react-router-dom'
import { store } from 'redux/store'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider  store={store}>
      <Router basename='/'>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)
