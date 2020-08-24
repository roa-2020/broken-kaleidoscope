import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

let kal = []

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App kal={kal} />,
    document.getElementById('app')
  )
})
