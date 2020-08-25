import React from "react"

import Pixel from "./Pixel.jsx"

const App = () => {
  return Array.from({ length: 1000 }, (v, i) => <Pixel key={i} />)
}

export default App
