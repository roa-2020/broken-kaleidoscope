import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    Array.from({length: 3000}, ()=><Pixel width="20px" height="20px" />)
  )
}

export default App
