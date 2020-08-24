import React from 'react'
import Pixel from './Pixel'

const App = () => {
  const length = 500
      const init = <Pixel />
      const result = Array.from({ length }, () => init)
      console.log(result)
  
  return (
    result
  )
}

export default App
