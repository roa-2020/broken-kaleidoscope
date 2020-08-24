import React from 'react'
import Pixel from './Pixel'

const App = () => {
  let arr = []
    for ( let i = 0; i < 10000; i++) {
      arr.push(<Pixel />)
    }
  return (
      arr
  )
}

export default App
