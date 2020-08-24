import React from 'react'
import Pixel from './Pixel'

const App = () => {
  return (
    Array(646).fill(0).map((e, i) => { return <Pixel key={i} />})
  )
}

export default App
