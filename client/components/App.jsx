import React from 'react'
import Pixel from './Pixel.jsx'


const App = () => {
  const pixelArr = new Array(3000);
  return pixelArr.fill(<Pixel/>)
}



export default App
