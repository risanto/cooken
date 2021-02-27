import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

function ReactApp() {
  return <App />
}

ReactDOM.render(<Router forceRefresh={true}>
  <ReactApp />
</Router>, document.getElementById('root'))