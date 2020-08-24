import React from 'react'
import Pixel from './Pixel.jsx'

const App = () => {
  return Array.from({length: 100}, (v, i) => <Pixel key={i}/>);
}

export default App

// Array.from({length: 5}, (v, i) => i);

//window.setTimeout(function, milliseconds);