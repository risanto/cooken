import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { App } from './App'

function ReactApp() {
  return <App />
}

ReactDOM.render(<ReactApp />, document.getElementById('root'))