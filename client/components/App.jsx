import React from 'react'
import Pixel from './Pixel'


const App = () => {
  return (
    <div>
      {Array(10).fill(0).map(item => <Pixel />)}
    </div>
  )
}

export default App
